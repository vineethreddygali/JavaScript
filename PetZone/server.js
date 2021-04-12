var express = require('express');
var app = express();
app.use(express.static('pics'));
//app.use(express.static('htmldir'));
var html_dir = '/Users/vineethreddy/Documents/GitHub/JavaScript/PetZone/PetZone.html';
app.get('/', function (req, res) {
   
    res.sendFile(html_dir);

})

 

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
