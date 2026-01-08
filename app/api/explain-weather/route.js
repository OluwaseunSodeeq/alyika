import { NextResponse } from "next/server";

export async function POST(req) {
  const { weather } = await req.json();

  if (!weather) {
    return NextResponse.json(
      { error: "Weather data is required" },
      { status: 400 }
    );
  }

  const { location, temperature, condition, humidity, wind } = weather;

  // ⚠️ TEMP AI LOGIC (replace later with real AI)
  const explanation = `
In ${location}, the temperature is currently ${temperature}°C with ${condition}.
High humidity (${humidity}%) can make the air feel warmer and heavier.
Wind speed of ${wind} m/s helps circulate air and can reduce heat buildup.

These conditions are influenced by natural weather patterns and, over time,
climate change can increase temperature extremes.
`;

  return NextResponse.json({ explanation });
}
