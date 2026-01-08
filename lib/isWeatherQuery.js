export function isWeatherQuery(message) {
  return message.toLowerCase().includes("weather");
}
