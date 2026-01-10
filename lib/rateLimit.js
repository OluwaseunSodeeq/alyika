const rateMap = new Map();

export function rateLimit(ip, limit = 20, windowMs = 60_000) {
  const now = Date.now();
  const record = rateMap.get(ip) || { count: 0, start: now };

  if (now - record.start > windowMs) {
    record.count = 0;
    record.start = now;
  }

  record.count += 1;
  rateMap.set(ip, record);

  return record.count <= limit;
}
