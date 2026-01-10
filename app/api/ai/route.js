const mentalModel = `
Request enters →
  1️⃣ Identify user (IP)
  2️⃣ Rate limit
  3️⃣ Log usage
  4️⃣ Decide WHAT the user wants (switch)
  5️⃣ Respond accordingly
`;

import { NextResponse } from "next/server";
import { rateLimit } from "../../../lib/rateLimit";
import { openai } from "../../../lib/openai";
import { SYSTEM_PROMPT } from "../../../lib/aiPrompt";
import { logRateLimit, logRequest } from "../../../lib/aiMetrics";

export async function POST(req) {
  const ip = req.headers.get("x-forwarded-for") || "unknown";

  // 🔒 Rate limit FIRST
  if (!rateLimit(ip)) {
    logRateLimit();
    return NextResponse.json(
      { error: "Too many requests. Please slow down 😊" },
      { status: 429 }
    );
  }

  const { type, payload } = await req.json();

  if (!type) {
    return NextResponse.json(
      { error: "AI request type is required" },
      { status: 400 }
    );
  }

  // 📊 Log request intent
  logRequest({ ip, type });

  let userPrompt = "";

  // 🎯 ROUTE BY INTENT
  switch (type) {
    case "explain-weather":
      userPrompt = `
        Here is the current weather data:
        ${JSON.stringify(payload, null, 2)}

        Explain what this weather means to a student in a friendly way.
        Then add a short "Did you know?" fact related to climate or weather.
        `;
      break;

    case "environment":
      userPrompt = `
        Answer the following environmental question in a friendly,
        student-focused, easy-to-understand way:

        ${payload}
        `;
      break;
    /*
       case "quiz":
       return handleQuiz(payload);

        case "did-you-know":
       return handleFact(payload);
    */

    default:
      return NextResponse.json(
        { error: "Unsupported AI request type" },
        { status: 400 }
      );
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.4,
      max_tokens: 350,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: userPrompt },
      ],
    });

    return NextResponse.json({
      response: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error("AI error:", error);

    return NextResponse.json({
      response:
        "🌱 I’m having trouble responding right now. Please try again shortly.",
    });
  }
}

//   // 🔒 Rate limit AI usage
//   if (!rateLimit(ip)) {
//     logRateLimit();
//     return NextResponse.json(
//       { error: "Too many requests. Please slow down 😊" },
//       { status: 429 }
//     );
//   }

//   const { type, payload } = await req.json();

//   if (!type) {
//     return NextResponse.json(
//       { error: "AI request type is required" },
//       { status: 400 }
//     );
//   }

//   let userPrompt = "";
//   logRequest({ ip, type });

//   async function handleExplainWeather(payload) {
//     const prompt = `
// Here is the current weather data:
// ${JSON.stringify(payload)}

// Explain what this means to a student.
// Then add a short "Did you know?" fact.
// `;

//     return runAI(prompt);
//   }

//   async function handleEnvironment(question) {
//     const prompt = `
// Answer the following environmental question in a friendly, student-focused way:
// ${question}
// `;

//     return runAI(prompt);
//   }

//   // 🎯 Decide behavior based on type
//   switch (type) {
//     case "explain-weather":
//       return handleExplainWeather(payload);

//     case "environment":
//       return handleEnvironment(payload);

//     default:
//       return NextResponse.json(
//         { error: "Unsupported AI request type" },
//         { status: 400 }
//       );
//   }

//   try {
//     const completion = await openai.chat.completions.create({
//       model: "gpt-4o-mini",
//       temperature: 0.4,
//       max_tokens: 350,
//       messages: [
//         { role: "system", content: SYSTEM_PROMPT },
//         { role: "user", content: userPrompt },
//       ],
//     });

//     return NextResponse.json({
//       response: completion.choices[0].message.content,
//     });
//   } catch (error) {
//     console.error("AI error:", error);

//     return NextResponse.json(
//       {
//         response:
//           "I’m having trouble responding right now. Please try again shortly 🌱",
//       },
//       { status: 200 }
//     );
//   }
// }
