import http from "http";
import fs from "fs";
import path from "path";

const root = path.resolve("public");
const server = http.createServer((req, res) => {
  const url = decodeURIComponent((req.url || "/").split("?")[0]);
  const file = path.join(root, url === "/" ? "_logo-preview.html" : url);
  fs.readFile(file, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end("missing");
      return;
    }
    const ext = path.extname(file);
    const type = ext === ".svg" ? "image/svg+xml" : "text/html";
    res.writeHead(200, { "content-type": type });
    res.end(data);
  });
});

server.listen(9876, "127.0.0.1", () => {
  console.log("listening 9876");
});
