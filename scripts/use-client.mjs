import { readFileSync, writeFileSync } from "fs";

const BANNER = '"use client";\n';
const FILES = ["dist/index.js", "dist/index.mjs"];

for (const file of FILES) {
  const content = readFileSync(file, "utf8");
  if (!content.startsWith('"use client"')) {
    writeFileSync(file, BANNER + content);
    console.log(`Prepended "use client" to ${file}`);
  }
}
