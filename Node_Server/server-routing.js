const http = require("http");

const server = http.createServer((req, res) => {
console.log(req.method, req.url);

  if (req.url === "/") {
    res.end("Home Page");
  }

  else if (req.url === "/about") {
    res.end("About Page");
  }

  else if (req.url === "/contact") {
    res.end("Contact Page");
  }

  else {
    res.end("Route Not Found or 404 Not Found");
  }

});

server.listen(8000,()=>{
    console.log(`Server running at port:http://localhost:${8000}`);
});