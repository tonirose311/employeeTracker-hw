const mysql = require("mysql");
const inquirer = require("inquirer");
const init = require("./connection");

// Create Connection
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "employeesDB",
});

connection.connect(function (error) {
  if (error) throw error;
  console.log("connected as id " + connection.threadId + "\n");
  init();
});

module.exports = connection;