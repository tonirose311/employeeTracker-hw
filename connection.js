var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,
  user: "root",
  password: "password",
  database: "employeesDB"
});

connection.connect(function(err) {
  if (err) throw err;
  start();
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;