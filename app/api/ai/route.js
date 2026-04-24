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

  if (!payload || payload.length > 500) {
    return NextResponse.json({ error: "Message too long" }, { status: 400 });
  }

  logRequest({ ip, type });

  let userPrompt = "";

  switch (type) {
    case "explain-weather":
      userPrompt = `
Here is the weather data:
${JSON.stringify(payload)}

Explain this in a fun and simple way for a student.

Then add:
- one helpful tip
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
          if (text) {
            controller.enqueue(encoder.encode(text));
          }
        }
        controller.close();
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  } catch (error) {
    console.error("AI error:", error);

    return new Response(" I’m having trouble responding right now.", {
      status: 500,
    });
  }
}
