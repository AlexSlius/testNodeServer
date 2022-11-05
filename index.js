const http = require("http");
 
http.createServer(function(request, response){
    console.log("Hello world!");
    response.end("Hello world!");
}).listen(4000);