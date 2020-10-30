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
  startApp();
  console.log("connected as id " + connection.threadId);
});

// prompt user to choose an option
function startApp(){
    inquirer
    .prompt({
        type: "list",
        name: "options",
        message: "What would you like to do?",
        choices: [
            "Add Department",
            "Add Employee",
            "Add Role",
            "View Departments",
            "View Employees",
            "View Roles",
            "Update Employee Roles",
            "View Total Utilized Budget for Department",
            "Exit"
        ]
    }).then((answer) => {
        switch (answer.options){
            case 'Add Department':
                addDepartment();
                break;
             case 'Add Employee':
                addEmployee();
                break;
             case 'Add Role':
                addRole();
                break;
                case 'View Departments':
                showDepartments();
                break;
             case 'View Employees':
                showEmployees();
                break;
             case 'View Roles':
                showRoles();
                break;
            case 'Update Employee Roles':
                updateRole();
                break;
            case 'Exit':
                connection.end();
                break;
        }
    })
};