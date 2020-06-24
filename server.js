const http = require("http");
const { parse } = require("querystring");

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    let body = "";
    req.on("data", chunk => {
      body += chunk.toString();
    });
    req.on("end", () => {
      console.log(parse(body));
      res.end("ok");
    });
  }
});
server.listen(3000);
