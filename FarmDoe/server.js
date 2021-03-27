var http = require('http');
var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('VineethReddyGali-C0777252.db');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
 // res.write('Starting Database pull \n');

  db.all("SELECT * FROM Fields", function(err, rows) {
    res.write('Fields are:\n');
    rows.forEach(function(row) {
        res.write(row.fieldName+'\n');
    })



//res.end('done processing ');
  })
  db.all("SELECT * FROM Veggies", function(err, rows) {
    res.write('\nField name:Crop:Quantity\n');
    rows.forEach(function(row) {
        res.write(row.fieldName+':'+row.Crop+':'+row.Quantity+'\n');
    })



//res.end('');
  })

  db.all("SELECT * FROM veggiePrice", function(err, rows) {
    res.write('\nVeggie Name:Price\n');
    rows.forEach(function(row) {
        res.write(row.veggieName+':'+row.Price+'\n');
    })



res.end('');
  })

db.close();


}).listen(8080); 