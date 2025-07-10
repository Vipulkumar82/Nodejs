var http = require('http');
const { json } = require('stream/consumers');

var data = {name:"Vipul",age:"22",email:"vipul@gmail.com"}

http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type':'application\json'});
    res.write(JSON.stringify(data));
    res.end()
}).listen(3000);