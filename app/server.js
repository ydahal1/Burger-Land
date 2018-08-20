var express = require('express');
var hbs = require('express-handlebars');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var path = require('path');

var PORT = process.env.PORT || 3010;
var app = express();

//Serve static contents from public folder
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

//Import routes
var routes = require("./controllers/burgers_controller");
app.use(routes);


//Setting up handlebars engine
app.engine('handlebars', exphbs({defaultLayout : "main"}));
app.set('view engine', 'handlebars');



//Require routes
var routes = require("./controllers/burgers_controller.js");
app.use(routes);


app.listen(PORT, function(){
    console.log(`Server running in port ${PORT}`)
});