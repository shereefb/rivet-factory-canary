export function normalizeTicket(value) {
  return value.trim().replace(/\s+/g, '-').toUpperCase();
}
