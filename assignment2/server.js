var express = require('express');
var app = express();
app.use(express.static('images'));
//app.use(express.static('htmldir'));
var html_dir = '/Users/vineethreddy/Documents/GitHub/JavaScript/assignment2/Samplecode.html';
app.get('/', function (req, res) {
   
    res.sendFile(html_dir);

})

 

var server = app.listen(8089, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})