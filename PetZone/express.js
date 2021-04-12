var http = require('http');
var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('contactdb.db');


  
  db.run('INSERT INTO details VALUES (?,?,?,?)', ['a','b','c',1], (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('success');
    }
  });

  db.close;
  
    


