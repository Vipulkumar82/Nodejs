var http=require('http');

http.createServer(function(req, res){
    res.write("Har Har Mahadev");
    res.end();
}).listen(3000);