export function isEnvironmentRelated(message) {
  const keywords = [
    "climate",
    "weather",
    "environment",
    "global warming",
    "sustainability",
    "pollution",
    "carbon",
    "emissions",
    "temperature",
    "rain",
    "flood",
    "drought",
    "air quality",
    "greenhouse",
    "ozone",
  ];

  return keywords.some((word) => message.toLowerCase().includes(word));
}
