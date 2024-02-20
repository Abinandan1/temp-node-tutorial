const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  if (req.url === "/") {
    res.write(JSON.stringify({ msg: "Welcome to our homepage" }));
    res.end();
    return;
  }
  if (req.url === "/about") {
    res.write(JSON.stringify({ msg: "Here is our short history" }));
    res.end();
    return;
  }
  res.end(`
  <h1>Oops!</h1>
  <p>We can't seem to find the page you are looking for</p>
  <a href='/'>back home</a>
  `);
});

server.listen(5000);
