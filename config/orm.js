var con = require("./connection.js");

var tableName = "burgers";

var orm = {
    selectAll: function(callback) {
        con.query("SELECT * FROM " + tableName, function(err, res) {
            callback(res);
        });
    },
    insertOne: function(burger, callback) {
        // what does this line do?
        // todo.complete = todo.complete || 0;
        con.query("INSERT INTO " + tableName + " (burger_name, devoured) VALUES (?,?)", [burger.burger_name, burger.devoured], function(err, res) {
            callback(res);
        });
    },
    updateOne: function(burger, callback) {
        // add code for updating name of burger or whether burger has been devoured?
    },
};

module.exports = orm;