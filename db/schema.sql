-- Drops database nameDB if it already exists -- 
DROP DATABASE IF EXISTS employeesDB; 

-- Creates database and specified it for use --  
CREATE DATABASE employeesDB;

USE employeesDB; 

-- Creates the table name

 CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

 CREATE TABLE role (
  id INT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT NOT NULL
);

 CREATE TABLE employee (
  id INT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT
);

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;