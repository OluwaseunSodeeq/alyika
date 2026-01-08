const cache = new Map();

const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes

export function getCachedWeather(city) {
  const cached = cache.get(city.toLowerCase());

  if (!cached) return null;

  const isExpired = Date.now() - cached.timestamp > CACHE_DURATION;

  if (isExpired) {
    cache.delete(city.toLowerCase());
    return null;
  }

  return cached.data;
}

export function setCachedWeather(city, data) {
  cache.set(city.toLowerCase(), {
    data,
    timestamp: Date.now(),
  });
}
