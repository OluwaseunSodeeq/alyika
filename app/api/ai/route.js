export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { openai } from "../../../lib/openai";
import { rateLimit } from "../../../lib/rateLimit";
import { SYSTEM_PROMPT } from "../../../lib/aiPrompt";
import { logRateLimit, logRequest } from "../../../lib/aiMetrics";

export async function POST(req) {
  const ip = req.headers.get("x-forwarded-for") || "unknown";

  // 🔒 Rate limit
  if (!rateLimit(ip)) {
    logRateLimit();
    return NextResponse.json(
      { error: "Too many requests. Please slow down 😊" },
      { status: 429 },
    );
  }

  const { type, payload } = await req.json();

  if (!type) {
    return NextResponse.json(
      { error: "AI request type is required" },
      { status: 400 },
    );
  }

  // 🔒 Payload protection (cost control)
  if (!payload || payload.length > 500) {
    return NextResponse.json({ error: "Message too long" }, { status: 400 });
  }

  // 📊 Log request
  logRequest({ ip, type });

  let userPrompt = "";

  // 🎯 Intent handling
  switch (type) {
    case "explain-weather":
      userPrompt = `
Here is the weather data:
${JSON.stringify(payload)}

Explain this in a fun and simple way for a student.

Then add:
- one helpful tip (e.g. what to wear or do)
- one short "Did you know?" fact 🌍
`;
      break;

    case "environment":
      userPrompt = `
Explain this in a simple, engaging way:

${payload}

If possible:
- give a real-life example
- keep it short and interesting
`;
      break;

    default:
      return NextResponse.json(
        { error: "Unsupported AI request type" },
        { status: 400 },
      );
  }
  try {
    const stream = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.5,
      max_tokens: 180,
      top_p: 0.85,
      frequency_penalty: 0.3,
      stream: true,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: userPrompt },
      ],
    });

    const encoder = new TextEncoder();

    const readable = new ReadableStream({
      async start(controller) {
        for await (const chunk of stream) {
          const text = chunk.choices[0]?.delta?.content || "";
          controller.enqueue(encoder.encode(text));
        }
        controller.close();
      },
    });

    return new Response(readable);
  } catch (error) {
    console.error("AI error:", error);

    return new Response("🌱 I’m having trouble responding right now.", {
      status: 500,
    });
  }
  // try {
  //   const completion = await openai.chat.completions.create({
  //     model: "gpt-4o-mini",
  //     temperature: 0.5, // slightly higher for engagement
  //     max_tokens: 180,
  //     top_p: 0.85,
  //     frequency_penalty: 0.3,
  //     messages: [
  //       { role: "system", content: SYSTEM_PROMPT },
  //       { role: "user", content: userPrompt },
  //     ],
  //   });

  //   return NextResponse.json({
  //     response: completion.choices[0].message.content,
  //   });
  // } catch (error) {
  //   console.error("AI error:", error);

  //   return NextResponse.json({
  //     response:
  //       "🌱 Hmm… I’m having a little trouble right now. Please try again in a moment!",
  //   });
  // }
}
// ========
// export const runtime = "nodejs";

// const mentalModel = `
// Request enters →
//   1️⃣ Identify user (IP)
//   2️⃣ Rate limit
//   3️⃣ Log usage
//   4️⃣ Decide WHAT the user wants (switch)
//   5️⃣ Respond accordingly
// `;

// import { NextResponse } from "next/server";
// import { openai } from "../../../lib/openai";
// // import { openai } from "@/lib/openai";
// import { rateLimit } from "../../../lib/rateLimit";
// import { SYSTEM_PROMPT } from "../../../lib/aiPrompt";
// import { logRateLimit, logRequest } from "../../../lib/aiMetrics";

// export async function POST(req) {
//   const ip = req.headers.get("x-forwarded-for") || "unknown";

//   // 🔒 Rate limit FIRST
//   if (!rateLimit(ip)) {
//     logRateLimit();
//     return NextResponse.json(
//       { error: "Too many requests. Please slow down 😊" },
//       { status: 429 },
//     );
//   }

//   const { type, payload } = await req.json();

//   if (!type) {
//     return NextResponse.json(
//       { error: "AI request type is required" },
//       { status: 400 },
//     );
//   }

//   // 📊 Log request intent
//   logRequest({ ip, type });

//   let userPrompt = "";

//   // 🎯 ROUTE BY INTENT
//   switch (type) {
//     case "explain-weather":
//       userPrompt = `
//         Here is the current weather data:
//         ${JSON.stringify(payload, null, 2)}

//         Explain what this weather means to a student in a friendly way.
//         Then add a short "Did you know?" fact related to climate or weather.
//         `;
//       break;

//     case "environment":
//       userPrompt = `
//         Answer the following environmental question in a friendly,
//         student-focused, easy-to-understand way:

//         ${payload}
//         `;
//       break;

//     default:
//       return NextResponse.json(
//         { error: "Unsupported AI request type" },
//         { status: 400 },
//       );
//   }

//   try {
//     const completion = await openai.chat.completions.create({
//       model: "gpt-4o-mini",
//       temperature: 0.3,
//       max_tokens: 150,
//       top_p: 0.8,
//       frequency_penalty: 0.2,
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

//     return NextResponse.json({
//       response:
//         "🌱 I’m having trouble responding right now. Please try again shortly.",
//     });
//   }
// }
// =================

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
//
// const completion = await openai.chat.completions.create({
//   model: "gpt-4o-mini",
//   temperature: 0.3,
//   max_tokens: 150,
//   messages: [
//     { role: "system", content: SYSTEM_PROMPT },
//     { role: "user", content: userPrompt },
//   ],
// });
/*
    case "quiz":
      userPrompt = `
        Create ONE multiple-choice quiz question about climate, environment, or weather.

        Rules:
        - Provide exactly 4 options labeled A, B, C, D
        - Clearly indicate the correct answer
        - After the answer, explain why it is correct
        - Keep it student-friendly and short
        `;
            break;

   
      

        case "did-you-know":
       return handleFact(payload);
    */
// }
