// ACK CODE tracking: links projects (projects.yaml "ack", e.g. "NRF##") to the outputs
// (publications/patents "ack", e.g. "NRF25, IITP25") that acknowledge them.

/** "NRF25, IITP25" -> ["NRF25", "IITP25"] */
export function parseAck(text) {
  return String(text || "")
    .split(/[,\s]+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

const yy = (y) => Number(String(y).slice(-2));

/** All concrete codes a project owns: "NRF##" over its years -> ["NRF21", ..., "NRF25"]. */
export function projectCodes(p) {
  if (!p.ack) return [];
  if (!p.ack.includes("##")) return [p.ack];
  const prefix = p.ack.replace("##", "");
  const [from, to] = p.ackYears
    ? p.ackYears.map(yy)
    : [yy(String(p.start).slice(0, 4)), yy(String(p.end).slice(0, 4))];
  const out = [];
  for (let y = from; y <= to; y++) out.push(`${prefix}${String(y).padStart(2, "0")}`);
  return out;
}

/** Count how many items (publications, patents) carry each code. */
export function countCodes(items) {
  const m = {};
  for (const it of items) for (const c of parseAck(it.ack)) m[c] = (m[c] || 0) + 1;
  return m;
}
