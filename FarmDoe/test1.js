var http = require('http');
var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('VineethReddyGali-C0777252.db');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Starting Database pull ');
  
  db.all("SELECT fieldName FROM Fields",function(err,rows) {
    rows.forEach(function(row) {
        res.write(row.fieldName);
    })




res.end('done processing ');
  })
db.close();


}).listen(8082);