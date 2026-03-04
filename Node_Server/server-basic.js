//import http
const http=require("http")

//create server
const server=http.createServer((req,res)=>{
    res.end("hello from node.js server");
})

//attached to the port
server.listen(8000,()=>{
    console.log(`server runing at http://localhost:${8000}`);
})

