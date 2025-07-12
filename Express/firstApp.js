const express = require('express');

const app = express();
app.get('/',function(req, res){
    res.send("Hey Baby Vicky")
}).listen(3000);