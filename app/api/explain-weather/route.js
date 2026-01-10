import { NextResponse } from "next/server";
import openai from "../../../config-openai";
import { rateLimit } from "../../../lib/rateLimit";
import { SYSTEM_PROMPT } from "../../../lib/aiPrompt";

export async function POST(req) {
  const ip = req.headers.get("x-forwarded-for") || "unknown";

  //  Rate limit FIRST
  if (!rateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please slow down 😊" },
      { status: 429 }
    );
  }

  //  Then weather explanation logic
  const { weather } = await req.json();

  if (!weather) {
    return NextResponse.json(
      { error: "Weather data is required" },
      { status: 400 }
    );
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.4,
      max_tokens: 300,
      messages: [
        {
          role: "system",
          content: SYSTEM_PROMPT,
        },
        {
          role: "user",
          content: `
Here is the current weather data:
${JSON.stringify(weather)}

Explain what this means to a student.
Then add a short "Did you know?" fact.
          `,
        },
      ],
    });

    return NextResponse.json({
      explanation: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error("AI error:", error);

    return NextResponse.json(
      {
        explanation:
          "I’m having trouble explaining the weather right now. Please try again in a moment 🌱",
      },
      { status: 200 }
    );
  }
}

// =================SECOND TRY WITH RATE LIMITING==================
// export async function POST(req) {
//   const ip = req.headers.get("x-forwarded-for") || "unknown";
//   //   Rate limit FIRST
//   if (!rateLimit(ip)) {
//     return NextResponse.json(
//       { error: "Too many requests. Please slow down 😊" },
//       { status: 429 }
//     );
//   }

//   //   Then weather explanation logic
//   const { weather } = await req.json();

//   if (!weather) {
//     return NextResponse.json(
//       { error: "Weather data is required" },
//       { status: 400 }
//     );
//   }

//   //   const { location, temperature, condition, humidity, wind } = weather;

//   // ⚠️ TEMP AI LOGIC (replace later with real AI)
//   const completion = await openai.chat.completions.create({
//     model: "gpt-4o-mini",
//     messages: [
//       {
//         role: "system",
//         content: `
//             You are Alyika, a friendly environmental education assistant.
//             Your audience includes students and curious learners.
//             Always respond in a clear, engaging, and encouraging tone.
//             Use simple language, real-world examples, and short paragraphs.
//             Only answer questions related to:
//             - weather
//             - climate
//             - environment
//             - sustainability

//             If a question is outside this scope, politely say you cannot help.
//             Never give medical, legal, or political advice.
//         `,
//       },
//       {
//         role: "user",
//         content: JSON.stringify(weather),
//       },
//     ],
//   });

//   return NextResponse.json({
//     explanation: completion.choices[0].message.content,
//   });
// }

// import { NextResponse } from "next/server";

// export async function POST(req) {
//   const { weather } = await req.json();

//   if (!weather) {
//     return NextResponse.json(
//       { error: "Weather data is required" },
//       { status: 400 }
//     );
//   }

//   const { location, temperature, condition, humidity, wind } = weather;

//   // ⚠️ TEMP AI LOGIC (replace later with real AI)
//   const explanation = `
// In ${location}, the temperature is currently ${temperature}°C with ${condition}.
// High humidity (${humidity}%) can make the air feel warmer and heavier.
// Wind speed of ${wind} m/s helps circulate air and can reduce heat buildup.

// These conditions are influenced by natural weather patterns and, over time,
// climate change can increase temperature extremes.
// `;

//   return NextResponse.json({ explanation });
// }
