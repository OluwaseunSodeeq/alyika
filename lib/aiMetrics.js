const metrics = {
  totalRequests: 0,
  byType: {},
  byIP: {},
  rateLimited: 0,
};

export function logRequest({ ip, type }) {
  metrics.totalRequests += 1;

  metrics.byType[type] = (metrics.byType[type] || 0) + 1;
  metrics.byIP[ip] = (metrics.byIP[ip] || 0) + 1;
}

export function logRateLimit() {
  metrics.rateLimited += 1;
}

export function getMetrics() {
  return metrics;
}
