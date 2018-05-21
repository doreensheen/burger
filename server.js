var con = require("./config/connection.js");

var router = require("./controllers/burger_controller")
var burger = require("./models/burger.js");
// require express
var express = require("express");
var app = express();

// require express-handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// require body-parser
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// define PORT
var PORT = process.env.PORT || 8000;

// home html when page first opens
// app.get("/home", function(req, res) {
//     con.query("SELECT * FROM movies", function(err, data) {
//         if (err) throw err;
//         res.render("index", {movies: data});
//     })
// })
app.use("/api", router);

app.get("/home", function(req, res) {
    con.query("SELECT * FROM burgers", function(err, data) {
        if (err) throw err;
        res.render("index", {burgers: data});
    })
})

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});