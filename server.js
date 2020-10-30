var inquirer = require ("inquirer");
//PROBLEM: getting errors or nothing returned when using connection.js
// var connection = require ("./connection");
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

function start(){
    inquirer
    .prompt({
        type: "list",
        name: "name",
        message: "What would you like to do?",
        choices: [
            "Add Department",
            "Add Employee",
            "Add Role",
            "View Departments",
            "View Employees",
            "View Roles",
            "Update Employee Roles",
            "View Total Utilized Budget for Department"
        ]
    })
};