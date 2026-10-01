// @ts-check
import { defineConfig } from "astro/config";

// The site is served from https://ilab-kit.github.io/ilab/ (repository "ilab" in the ilab-kit organization).
// If the repository is renamed to "ilab-kit.github.io", change base to "/".
export default defineConfig({
  site: "https://ilab-kit.github.io",
  base: "/ilab",
});
