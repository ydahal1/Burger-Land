var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '158966211',
    database : 'burger_db'
  });

connection.connect(function(err){
    if (err){
        console.log(err);
        return;
    }
    console.log("Sucessfully connected to burger_db")
});

module.exports = connection;