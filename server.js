var inquirer = require ("inquirer")
var connection = ("./connection")

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
}