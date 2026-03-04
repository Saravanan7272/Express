const http=require("http");

const server= http.createServer((req,res) => {
console.log(req.method, req.url);
if(req.url==="/"){
  res.end("Hello");
}
else if (req.url==="/users" && req.method==="GET") {
res.end("Get Users");
  }

else if (req.url==="/users" && req.method==="POST") {
    res.end("Create User");
  }

  else {
    res.end("Route Not Found");
  }

});

server.listen(8000,()=>{
console.log(`Server running at port:http://localhost:${8000}`);}
);