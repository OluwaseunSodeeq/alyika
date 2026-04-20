export function isWeatherQuery(message) {
  const msg = message.toLowerCase();

  const weatherKeywords = [
    "weather",
    "temperature",
    "rain",
    "sunny",
    "cloudy",
    "forecast",
    "wind",
    "humidity",
    "storm",
    "hot",
    "cold",
    "heat",
    "rainfall",
    "drizzle",
    "snow",
  ];

  return weatherKeywords.some((word) => msg.includes(word));
}
