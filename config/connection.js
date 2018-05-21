var mysql = require("mysql");

var source = 
{
    burgersDatabase: {
        port: 3306,
        host: "localhost",
        user: "root",
        password: "dsheen90",
        database: "burgers_db",
    },
};

var con = mysql.createConnection(source.burgersDatabase);

con.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + con.threadId);
  });
  
  module.exports = con;