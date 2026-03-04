// import http module
const http = require("http");

// create server
const server = http.createServer((req, res) => {

  // log request
  console.log(req.method, req.url);
  
  // routeing
  if(req.url === "/") {
    res.end("Welcome to the Home Page");
    return;
  }
  
  if (req.url === "/product") {

    const data = {
      id: 1,
      product: "Pen",
      prize: 20
    };

    // tell browser we are sending JSON
    res.setHeader("Content-Type", "application/json");

    // send JSON response
    res.end(JSON.stringify(data));
  }

  else {
    res.end("Route Not Found");
  }

});

// start server
server.listen(8000, () => {
  console.log("Server running at http://localhost:8000");
});