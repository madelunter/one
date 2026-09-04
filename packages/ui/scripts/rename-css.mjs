import { readdirSync, renameSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const dist = resolve(dirname(fileURLToPath(import.meta.url)), "..", "dist");
const to = resolve(dist, "styles.css");

const cssFile = readdirSync(dist).find((file) => file.endsWith(".css") && file !== "styles.css");

if (cssFile) {
  renameSync(resolve(dist, cssFile), to);
}
