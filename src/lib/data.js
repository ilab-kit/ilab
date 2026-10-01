import fs from "node:fs";
import path from "node:path";
import * as yaml from "js-yaml";

/** Load a YAML file from src/data (read at build time). */
export function load(name) {
  const file = path.join(process.cwd(), "src", "data", `${name}.yaml`);
  return yaml.load(fs.readFileSync(file, "utf8"));
}

/** Prefix a site-relative path with the configured base URL. */
export function url(p = "/") {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return base + (p.startsWith("/") ? p : "/" + p);
}

/** Path to a file under public/images. */
export const img = (p) => url("/images/" + p);

/** "2024-2" -> { year: "2024", ko: "2024년 2학기", en: "Fall 2024" } */
export function termLabel(term) {
  const [year, sem] = String(term).split("-");
  return { year, ko: `${year}년 ${sem}학기`, en: `${sem === "1" ? "Spring" : "Fall"} ${year}` };
}

/** Wrap lab-member names in <b> for author lists. */
export function highlightAuthors(text, names) {
  let out = text.replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" })[c]);
  for (const n of names) {
    const esc = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/-/g, "[-\\u2010]?");
    out = out.replace(new RegExp(esc, "g"), (m) => `<b>${m}</b>`);
  }
  return out;
}
