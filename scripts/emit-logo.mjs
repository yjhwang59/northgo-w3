import fs from "fs";

const svg = fs.readFileSync("public/logo.svg", "utf8").trim();
const inline = svg.replace(
  'role="img" aria-label="Northgo"',
  'aria-hidden="true"'
);
fs.writeFileSync("src/components/Logo.astro", `---\n---\n${inline}\n`);
fs.writeFileSync(
  "public/logo.svg",
  svg.replace("currentColor", "#13264b") + "\n"
);
fs.copyFileSync(
  process.env.TEMP + "/ng-logo/favicon.png",
  "public/favicon.png"
);
console.log("wrote logo component, logo.svg, favicon.png");
