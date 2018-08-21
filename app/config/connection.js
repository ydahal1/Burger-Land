var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'w29ifufy55ljjmzq.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user     : 'tf4klvf6oo0k1bjt',
    password : 'uy5rhf8601ityymp',
    database : 'd6oaqa6uisooeg6g'
  });

connection.connect(function(err){
    if (err){
        console.log(err);
        return;
    }
    console.log("Sucessfully connected to burger_db")
});

module.exports = connection;