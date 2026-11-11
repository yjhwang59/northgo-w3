import fs from "fs";

const j = JSON.parse(
  fs.readFileSync(
    process.env.TEMP +
      "/ng-logo/teal/animations/baaba8bf-a82c-443b-a5bf-713b21458c02.json",
    "utf8"
  )
);

function prop(v) {
  if (!v) return null;
  if (Array.isArray(v)) return v;
  if (v.a === 1 && Array.isArray(v.k)) return v.k[0].s;
  return v.k;
}

function apply(tr, x, y) {
  const p = prop(tr.p);
  const a = prop(tr.a);
  const s = prop(tr.s);
  const sx = (s ? s[0] : 100) / 100;
  const sy = (s ? s[1] : 100) / 100;
  let X = (x - a[0]) * sx;
  let Y = (y - a[1]) * sy;
  return [X + p[0], Y + p[1]];
}

function shapeToD(sh, transforms) {
  const { v, i, o, c } = sh;
  const map = (idx, dx, dy) => {
    let x = v[idx][0] + dx;
    let y = v[idx][1] + dy;
    for (let t = transforms.length - 1; t >= 0; t--) {
      [x, y] = apply(transforms[t], x, y);
    }
    return [x, y];
  };
  const fmt = (pt) => `${pt[0].toFixed(2)} ${pt[1].toFixed(2)}`;
  const n = v.length;
  let d = `M ${fmt(map(0, 0, 0))}`;
  const seg = (a, b) => {
    const c1 = map(a, o[a][0], o[a][1]);
    const c2 = map(b, i[b][0], i[b][1]);
    const p = map(b, 0, 0);
    d += ` C ${fmt(c1)} ${fmt(c2)} ${fmt(p)}`;
  };
  for (let k = 0; k < n - 1; k++) seg(k, k + 1);
  if (c) {
    seg(n - 1, 0);
    d += " Z";
  }
  return d;
}

function hex(c) {
  return (
    "#" +
    [c[0], c[1], c[2]]
      .map((x) => Math.round(x * 255).toString(16).padStart(2, "0"))
      .join("")
  );
}

const parts = [];

function collect(items, transforms, bucket) {
  const groups = items.filter((x) => x.ty === "gr");
  if (items.some((x) => x.ty === "sh") && items.some((x) => x.ty === "fl")) {
    const fillItem = items.find((x) => x.ty === "fl");
    const paths = items
      .filter((x) => x.ty === "sh")
      .map((x) => shapeToD(x.ks.k, transforms));
    bucket.push({ fill: hex(fillItem.c.k), paths });
    return;
  }
  for (const g of groups) {
    const tr = g.it.find((x) => x.ty === "tr");
    collect(
      g.it.filter((x) => x.ty !== "tr"),
      tr ? [...transforms, tr] : transforms,
      bucket
    );
  }
}

for (const layer of j.layers) {
  if (layer.nm === "Mask" || layer.td === 1) continue;
  const bucket = [];
  collect(layer.shapes, [layer.ks], bucket);
  for (const item of bucket) parts.push({ layer: layer.nm, ...item });
}

const paths = parts
  .map((part) => {
    const fill = part.fill.toLowerCase() === "#13264b" ? "currentColor" : part.fill;
    return `<path fill="${fill}" fill-rule="evenodd" d="${part.paths.join(" ")}"/>`;
  })
  .join("");

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1070 210" role="img" aria-label="Northgo">${paths}</svg>\n`;
fs.writeFileSync("public/logo.svg", svg);

const inline = svg.replace(
  'role="img" aria-label="Northgo"',
  'style="height:48px;width:auto"'
);
fs.writeFileSync(
  "public/_logo-preview.html",
  `<!doctype html><body style="margin:0;background:#111"><div style="background:#fff;padding:32px;color:#13264b">${inline}</div><div style="background:#0a1b33;padding:32px;color:#fff">${inline}</div></body>`
);

console.log(
  parts.map((p) => `${p.layer} ${p.fill} x${p.paths.length}`).join("\n")
);
console.log("bytes", svg.length);
