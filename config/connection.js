//requiring dotenv to hide my password
require("dotenv").config();
//requiring msql to connect to database
var mysql = require("mysql");
var connection;

// creating the connection to mysql
// the below code was provided regarding how to connect to JAWSDB in Heroku
 if (process.env.JAWSDB_URL) {
     connection = mysql.createConnection(process.env.JAWSDB_URL);
 } else {
     connection = mysql.createConnection ({
        host: "localhost",
        port: process.env.PORT || 3306,
        user: "root",
        //below password code used to import from .env file
        password: process.env.PASS,
        database: "burgers_db"
});
};

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;