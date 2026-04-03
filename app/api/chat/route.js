import { OpenAI } from "openai";
import {
  isEnvironmentRelated,
  isWeatherQuery,
} from "../../../lib/isEnvironmentRelated";
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  const { message } = await req.json();

  // 🚫 Block long inputs
  if (!message || message.length > 500) {
    return new Response("⚠️ Message too long. Keep it under 500 characters.", {
      status: 400,
    });
  }

  const encoder = new TextEncoder();

  // ✅ Helper to stream plain text (for non-AI responses too)
  const streamText = (text) => {
    return new ReadableStream({
      start(controller) {
        controller.enqueue(encoder.encode(text));
        controller.close();
      },
    });
  };

  // ===============================
  // 🌦 WEATHER QUERY (STREAMED)
  // ===============================
  if (isWeatherQuery(message)) {
    try {
      const weatherRes = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/weather`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ city: "Ibadan" }),
        },
      );

      const weatherData = await weatherRes.json();

      // 🔥 Stream AI explanation directly
      const stream = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        stream: true,
        messages: [
          {
            role: "system",
            content: `
You are a fun, engaging AI for students and young learners 🌍
- Explain weather in a simple way
- Use emojis 🌤️🌱✨
- Keep it short and friendly
            `,
          },
          {
            role: "user",
            content: `Explain this weather in a fun way: ${JSON.stringify(
              weatherData,
            )}`,
          },
        ],
      });

      const readableStream = new ReadableStream({
        async start(controller) {
          for await (const chunk of stream) {
            const text = chunk.choices[0]?.delta?.content || "";
            controller.enqueue(encoder.encode(text));
          }
          controller.close();
        },
      });

      return new Response(readableStream);
    } catch (error) {
      return new Response(
        streamText("❌ Couldn't fetch weather right now. Try again."),
        { status: 500 },
      );
    }
  }

  // ===============================
  // 🚫 OUTSIDE SCOPE (STREAMED)
  // ===============================
  if (!isEnvironmentRelated(message)) {
    return new Response(
      streamText(
        "🌍 I can only help with weather and environmental topics. Try asking about climate or pollution!",
      ),
    );
  }

  // ===============================
  // 🤖 ENVIRONMENT AI (STREAMED)
  // ===============================
  try {
    const stream = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      stream: true,
      messages: [
        {
          role: "system",
          content: `
You are a friendly AI tutor for students and young learners 🌱

Rules:
- Use simple English
- Be engaging and conversational
- Add emojis 🌍✨🌱
- Occasionally ask follow-up questions
- Keep answers clear and not too long
          `,
        },
        { role: "user", content: message },
      ],
    });

    const readableStream = new ReadableStream({
      async start(controller) {
        for await (const chunk of stream) {
          const text = chunk.choices[0]?.delta?.content || "";
          controller.enqueue(encoder.encode(text));
        }
        controller.close();
      },
    });

    return new Response(readableStream);
  } catch (error) {
    return new Response(
      streamText("⚠️ Something went wrong. Please try again."),
      { status: 500 },
    );
  }
}
//=================
// import { OpenAI } from "openai";

// import { NextResponse } from "next/server";
// import { isEnvironmentRelated, isWeatherQuery } from "@/lib/filters";

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// export async function POST(req) {
//   const { message } = await req.json();

//   // 🚫 Block long inputs (cost protection)
//   if (!message || message.length > 500) {
//     return NextResponse.json(
//       { reply: "⚠️ Message too long. Keep it under 500 characters." },
//       { status: 400 },
//     );
//   }

//   // 🌦 Weather query → call weather API
//   if (isWeatherQuery(message)) {
//     const weatherRes = await fetch(
//       `${process.env.NEXT_PUBLIC_BASE_URL}/api/weather`,
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ city: "Ibadan" }), // you can make dynamic later
//       },
//     );

//     const weatherData = await weatherRes.json();

//     // Now explain weather using AI
//     const aiRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/ai`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         type: "explain-weather",
//         payload: weatherData,
//       }),
//     });

//     const aiData = await aiRes.json();

//     return NextResponse.json({ reply: aiData.response });
//   }

//   // Non-environment question → block AI
//   if (!isEnvironmentRelated(message)) {
//     return NextResponse.json({
//       reply:
//         " I can only help with weather and environmental topics. Try asking about climate or pollution!",
//     });
//   }

//   // 🤖 Default → AI
//   const aiRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/ai`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       type: "environment",
//       payload: message,
//     }),
//   });

//   const aiData = await aiRes.json();

//   return NextResponse.json({ reply: aiData.response });
// }

// =============
// import { NextResponse } from "next/server";

// export async function POST(req) {
//   const { message } = await req.json();

//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/ai`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       type: "environment",
//       payload: message,
//     }),
//   });

//   const data = await res.json();

//   return NextResponse.json({
//     reply: data.response,
//   });
// }
// ====================
// import { NextResponse } from "next/server";

// export async function POST(req) {
//   const { message } = await req.json();

//   const res = await fetch("/api/ai", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     // body: JSON.stringify({ message: userMessage }),
//     body: JSON.stringify({
//       type: "environment",
//       payload: message,
//     }),
//   });

//   const data = await res.json();

//   setMessages((prev) => [
//     ...prev.slice(0, -1),
//     { role: "bot", content: data.reply },
//   ]);
// }
