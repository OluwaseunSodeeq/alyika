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

  function isAlyikaQuestion(message) {
    const msg = message.toLowerCase();

    return (
      msg.includes("who are you") ||
      msg.includes("tell me about yourself") ||
      msg.includes("what are you") ||
      msg.includes("what is alyika") ||
      msg.includes("tell me about alyika")
    );
  }

  const streamText = (text) =>
    new ReadableStream({
      start(controller) {
        controller.enqueue(encoder.encode(text));
        controller.close();
      },
    });

  const isRelated = await isEnvironmentRelated(message);
  const isAlyika = isAlyikaQuestion(message);

  if (isAlyikaQuestion(message)) {
    return new Response(
      streamText(
        "I’m Alyika, your learning companion that explains weather, climate and environmental sustainability topics in a simple and conversational way. I love sharing information that can inspire you to care for our planet and make eco-friendly choices. If you have any questions about the environment or how to live sustainably, feel free to ask! Let’s learn together!",
      ),
      {
        headers: { "Content-Type": "text/plain; charset=utf-8" },
      },
    );
  }

  if (!isRelated && !isAlyika) {
    return new Response(
      streamText(
        "Sorry, I can only help with weather, climate, environment, and sustainability topics.",
      ),
      { headers: { "Content-Type": "text/plain; charset=utf-8" } },
    );
  }

  // WEATHER (API and AI explanation)
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

  // FALLBACK AI (NO MORE DECLINE HERE 🔥)
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
