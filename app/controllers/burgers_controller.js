var express = require('express');
var router = express.Router();
var burger = require("../models/burger");

//Gets all undevored ones config/orm.js >> modal/burger.js >> controllers/burgercontroller.js
router.get('/', function(req, res){
    burger.all(function(data){
        var hbsObject = {
            burger : data
        }
    console.log(hbsObject);
    res.render('index', hbsObject);
    }); 
});

router.post('/api/burgers', function(req, res){
    console.log("Test $$$$$$$$$$$$$$$$$$ " + req.body.col_name);
    console.log("Test $$$$$$$$$$$$$$$$$$  " + (req.body.burger_name).toString());
    burger.create(req.body.col_name,
            req.body.burger_name, 
            function(result){
                res.json({id: result.insertId});
        });
});

router.put('/api/burgers/:id', function(req, res){
    console.log("Test ############# devoured status " + req.body.devoured);
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.update(req.body.devoured,
    condition,
    function(result) {
        if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
      });
});

module.exports = router;
