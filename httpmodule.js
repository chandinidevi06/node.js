var http=require("http")

var server=http.createServer((req,res)=>{
    console.log(req);
    var url=req.url
    if(url == "/"){
        res.writeHead(200,{"content-type":"text/plain"})
        res.end("iam the node js")
    }else if(url == "/home"){
        res.writeHead(200,{"content-type":"text/plain"})
        res.end("iam the home page js")
    }else{
        res.writeHead(404,{"content-type":"text/plain"})
        res.end("page was not found")
    };
})
server.listen(3000,()=>{
    console.log("server is running on http://localhost:3000");
})



