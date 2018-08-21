var connection = require("./connection");
var tableInput = 'burgers';

function printQuestionMarks(num){
    var arr=[];
    for(var i=0; i< num; i++){
        arr.push("?");
    }
    return arr.toString();
}
  
var orm = {
    all: function(tableInput, cb){
        var queryString = 'SELECT * FROM ' + tableInput + ';'
        connection.query(queryString, function( err, results){
            if(err){
                 throw err;
            }cb(results);
        });
    },
    create : function(table, cols, vals, cb){
        var queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols + ")";
        queryString += "VALUES ( '";
        queryString += vals +" '" ;
        queryString +=  ") ";

        console.log("Test1");
        console.log(queryString);
        console.log("Test2");

        connection.query(queryString, function(err, results){
            console.log("Test3");
            if(err){
                console.log("Test-4");
                throw err;
            }cb(results);
            console.log("Test-5");
        });
    },
    update: function(table, newVal, condition, cb){
        var queryString = "UPDATE " + table;

        queryString += " SET devoured = " + newVal;
        queryString += " WHERE ";
        queryString += condition;
       
    
        console.log(queryString);
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      }
}

module.exports = orm;
