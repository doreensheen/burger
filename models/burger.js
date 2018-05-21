// Inside your burger directory, create a folder named models.


// In models, make a burger.js file.
// Inside burger.js, import orm.js into burger.js
var orm = require("../config/orm.js");

// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.

var burger = {
    create: function(newBurger) {
        console.log("newBurger = ", newBurger);
        orm.insertOne(newBurger, function(err, result) {
            if (err) throw err;
            console.log("result from orm insertOne function: ", result);
        })
    },
    getAll: function(callback) {
        console.log("inside model function");
        orm.selectAll(function(err, result) {
            console.log("inside model callback");
            if (err) throw err;
            console.log("getAll result: ", result);
            callback(result);
        })
    }
}







// Export at the end of the burger.js file.
module.exports = burger;