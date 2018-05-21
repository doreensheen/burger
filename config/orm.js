var con = require("./connection.js");

var tableName = "burgers";

var orm = {
    selectAll: function(callback) {
        var string = "SELECT * FROM " + tableName;
        con.query(string, function(err, res) {
            if (err) throw err;
            callback(null, res);
        });
    },
    insertOne: function(burger, callback) {
        console.log("inside orm insertOne function")
        // what does this line do?
        // todo.complete = todo.complete || 0;
        var string = `INSERT INTO ${tableName} (burger_name, devoured) VALUES ("${burger.burger_name}","${burger.devoured}")`;
        console.log(string);
        con.query(string, function(err, res) {
            if (err) throw err;
            console.log("response from con query: ", res);
            callback(null, res);
        });
    },
    updateOne: function(burger, callback) {
        // add code for updating name of burger or whether burger has been devoured?
    },
};

module.exports = orm;