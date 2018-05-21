var express = require("express");
var router = express.Router();
var burgers = require("../models/burger.js");

router.get("/burgers", function(req, res) {
    burgers.getAll(function(result) {
        console.log("inside get route: ", result);
        res.json(result);
    })
});

router.post("/burgers", function(req, res) {
    var newBurger = req.body;
    console.log(req.body);
    burgers.create(newBurger)
    res.send(newBurger);
})

module.exports = router;