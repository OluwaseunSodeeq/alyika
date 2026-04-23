import { OpenAI } from "openai";
import { isWeatherQuery } from "../../../lib/isWeatherQuery";
import { SYSTEM_PROMPT } from "../../../lib/aiPrompt";
import { extractCity } from "../../../lib/weatherCache";
import { isEnvironmentRelated } from "../../../lib/isEnvironmentRelated";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  const { message } = await req.json();

  if (!message || message.length > 500) {
    return new Response("⚠️ Message too long. Keep it under 500 characters.", {
      status: 400,
    });
  }

  const encoder = new TextEncoder();

  const streamText = (text) =>
    new ReadableStream({
      start(controller) {
        controller.enqueue(encoder.encode(text));
        controller.close();
      },
    });

  const isRelated = await isEnvironmentRelated(message);

  if (!isRelated) {
    return new Response(
      streamText(
        "🌍 I only help with weather, cliamte, environment, and sustainability topics.",
      ),
      { headers: { "Content-Type": "text/plain; charset=utf-8" } },
    );
  }

  // ✅ STEP 2: WEATHER (API + AI explanation)
  if (isWeatherQuery(message)) {
    try {
      const city = extractCity(message) || "Lagos";

      const weatherRes = await fetch(`${req.nextUrl.origin}/api/weather`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ city }),
      });

      const weatherData = await weatherRes.json();

      const stream = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        stream: true,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          {
            role: "user",
            content: `Here is real-time weather data: ${JSON.stringify(weatherData)}. Explain it simply.`,
          },
        ],
      });

      return streamResponse(stream, encoder);
    } catch {
      console.error("Weather API error:", error);
      return new Response(streamText("❌ Couldn't fetch weather right now."), {
        status: 500,
      });
    }
  }

  // ✅ STEP 3: FALLBACK AI (NO MORE DECLINE HERE 🔥)
  try {
    const stream = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      stream: true,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: message },
      ],
    });

    return streamResponse(stream, encoder);
  } catch {
    return new Response(streamText("⚠️ Something went wrong."), {
      status: 500,
    });
  }
}

// helper
function streamResponse(stream, encoder) {
  return new Response(
    new ReadableStream({
      async start(controller) {
        for await (const chunk of stream) {
          const text = chunk.choices[0]?.delta?.content || "";
          if (text) controller.enqueue(encoder.encode(text));
        }
        controller.close();
      },
    }),
    {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    },
  );
}

//=================

// import { OpenAI } from "openai";
// import { isEnvironmentRelated } from "../../../lib/isEnvironmentRelated";
// import { isWeatherQuery } from "../../../lib/isWeatherQuery";

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// export async function POST(req) {
//   const { message } = await req.json();

//   if (!message || message.length > 500) {
//     return new Response("⚠️ Message too long. Keep it under 500 characters.", {
//       status: 400,
//     });
//   }

//   const encoder = new TextEncoder();

//   const streamText = (text) =>
//     new ReadableStream({
//       start(controller) {
//         controller.enqueue(encoder.encode(text));
//         controller.close();
//       },
//     });

//   // 🌦 WEATHER
//   if (isWeatherQuery(message)) {
//     try {
//       const weatherRes = await fetch(
//         `${process.env.NEXT_PUBLIC_BASE_URL}/api/weather`,
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ city: "Ibadan" }),
//         },
//       );

//       const weatherData = await weatherRes.json();

//       const stream = await openai.chat.completions.create({
//         model: "gpt-4o-mini",
//         stream: true,
//         messages: [
//           {
//             role: "system",
//             content:
//               "You are a fun AI for students. Explain weather simply with emojis 🌤️",
//           },
//           {
//             role: "user",
//             content: `Explain this weather: ${JSON.stringify(weatherData)}`,
//           },
//         ],
//       });

//       const readableStream = new ReadableStream({
//         async start(controller) {
//           for await (const chunk of stream) {
//             const text = chunk.choices[0]?.delta?.content || "";
//             if (text) {
//               controller.enqueue(encoder.encode(text));
//             }
//           }
//           controller.close();
//         },
//       });

//       return new Response(readableStream, {
//         headers: { "Content-Type": "text/plain; charset=utf-8" },
//       });
//     } catch {
//       return new Response(streamText("❌ Couldn't fetch weather right now."), {
//         status: 500,
//       });
//     }
//   }

//   // 🚫 OUTSIDE SCOPE
//   if (!isEnvironmentRelated(message)) {
//     return new Response(
//       streamText("🌍 I only help with weather & environmental topics."),
//       { headers: { "Content-Type": "text/plain; charset=utf-8" } },
//     );
//   }

//   // 🌱 ENVIRONMENT AI
//   try {
//     const stream = await openai.chat.completions.create({
//       model: "gpt-4o-mini",
//       stream: true,
//       messages: [
//         {
//           role: "system",
//           content:
//             "You are a friendly AI tutor 🌱. Use simple English + emojis.",
//         },
//         { role: "user", content: message },
//       ],
//     });

//     const readableStream = new ReadableStream({
//       async start(controller) {
//         for await (const chunk of stream) {
//           const text = chunk.choices[0]?.delta?.content || "";
//           if (text) {
//             controller.enqueue(encoder.encode(text));
//           }
//         }
//         controller.close();
//       },
//     });

//     return new Response(readableStream, {
//       headers: { "Content-Type": "text/plain; charset=utf-8" },
//     });
//   } catch {
//     return new Response(streamText("⚠️ Something went wrong."), {
//       status: 500,
//     });
//   }
// }
