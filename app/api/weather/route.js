import { NextResponse } from "next/server";
import { getCachedWeather, setCachedWeather } from "../../../lib/weatherCache";

export async function POST(req) {
  const { city } = await req.json();

  if (!city) {
    return NextResponse.json({ error: "City is required" }, { status: 400 });
  }

  const cached = getCachedWeather(city);
  if (cached) {
    return NextResponse.json({ ...cached, cached: true });
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

    const weatherData = {
      location: data.name,
      temperature: data.main.temp,
      condition: data.weather[0].description,
      humidity: data.main.humidity,
      wind: data.wind.speed,
    };

    setCachedWeather(city, weatherData);
    return NextResponse.json(weatherData);
  } catch (error) {
    return NextResponse.json(
      { error: "Unable to fetch weather data" },
      { status: 500 }
    );
  }
}
