-- Drops database nameDB if it already exists -- 
DROP DATABASE IF EXISTS nameDB; 

-- Creates database and specified it for use --  
CREATE DATABASE nameDB;

USE nameDB; 

-- Creates the table name

 CREATE TABLE departments (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

 CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
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