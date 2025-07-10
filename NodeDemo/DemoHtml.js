var http = require('http');

var data =
`<input type='text' placeholder='Enter your Name'/>
<br>
<input type='text' placeholder='Enter your Name'/>
<br>
<input type='text' placeholder='Enter your Name'/>
`

http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type':"text/html"});
    res.write(data);
    res.end();
}).listen(4000);