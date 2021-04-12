var { response } = require('express');
var express = require('express');
const parser       = require('body-parser');
var app = express();
app.use(express.static('pics'));

const bodyparser = parser.urlencoded({extended: false});

//app.use(express.static('htmldir'));
var html_dir = '/Users/vineethreddy/Documents/GitHub/JavaScript/PetZone/PetZone.html';



app.get('/', bodyparser,function (req, res) {
   
    res.sendFile(html_dir);

})
app.get('/contact.html', function(req, res) {
    res.sendFile(__dirname + "/" + "contact.html");
});






app.post('/user',bodyparser, function(req, res){

    var data = {
      fName : req.body.firstname,
      lName : req.body.lastname,
      email : req.body.Email,
      phone : req.body.PhoneNo
    }


    console.log(data.fName);
   
    var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('contactdb.db');


  
db.run('INSERT INTO details VALUES (?,?,?,?)', [data.fName,data.lName,data.email,data.phone], (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('success');
    }
  });

  db.all("SELECT * FROM details", function(err, rows) {
    res.write('Details are:\n');
    rows.forEach(function(row) {
        res.write(row.fName+' '+row.lName+' '+row.email+' '+row.phone+'\n');
    })

    res.end('');
  })


  db.close;

   
});



var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
