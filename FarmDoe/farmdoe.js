const sqlite3 = require('sqlite3').verbose();

let dataBase = new sqlite3.Database('./VineethReddyGali-C0777252.db');

dataBase.all('select * from Fields', [], (err, rows) => {
    if (err) {
      throw err;
    }
    rows.forEach((row) => {
      console.log(row.fieldName);
    });
    
  });

  dataBase.each('SELECT * from Veggies', function (err, row) {
    console.log(row.Crop,row.Quantity);
  })