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

export function isConceptQuestion(message) {
  const msg = message.toLowerCase();

  return (
    msg.includes("why") ||
    msg.includes("cause") ||
    msg.includes("causes") ||
    msg.includes("effect") ||
    msg.includes("effects") ||
    msg.includes("benefit") ||
    msg.includes("benefits") ||
    msg.includes("how")
  );
}

export function isLiveWeatherQuery(message) {
  const msg = message.toLowerCase();

  return (
    (msg.includes("weather") ||
      msg.includes("temperature") ||
      msg.includes("rain") ||
      msg.includes("forecast")) &&
    (msg.includes("today") ||
      msg.includes("now") ||
      msg.includes("in ") ||
      msg.includes("current"))
  );
}
