const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./student.db');

let sql = "select * from student";

db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    rows.forEach((row) => {
      console.log(row.id);
      console.log(row.name);  
      console.log(row.phone);
    });
  });

  



