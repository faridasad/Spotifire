export function formatTimeFromMs(ms: number) {
  const ts = Math.floor(ms / 1000);
  const m = Math.floor(ts / 60);
  const s = ts % 60;

  return `${m}:${s.toString().padStart(2, "0")}`;
}
