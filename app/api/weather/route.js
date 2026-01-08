import { NextResponse } from "next/server";

export async function POST(req) {
  const { city } = await req.json();
  console.log("Received city:", city);

  if (!city) {
    return NextResponse.json({ error: "City is required" }, { status: 400 });
  }

  const API_KEY = process.env.OPENWEATHER_API_KEY;

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );

    if (!res.ok) {
      throw new Error("Weather data not found");
    }

    const data = await res.json();

    const response = {
      location: data.name,
      temperature: data.main.temp,
      condition: data.weather[0].description,
      humidity: data.main.humidity,
      wind: data.wind.speed,
    };

    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(
      { error: "Unable to fetch weather data" },
      { status: 500 }
    );
  }
}
