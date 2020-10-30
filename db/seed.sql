-- starting data for department -- 
INSERT INTO department (name) VALUES ("Cashier");
INSERT INTO department (name) VALUES ("Customer Service");
-- starting data for role --  
INSERT INTO role (title, salary, department_id) VALUES ("head cashier", 10000, 001);
INSERT INTO role (title, salary, department_id) VALUES ("secondary", 15000, 489);
-- starting data for employee -- 
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Sherry", "Douglas", 123, 007);
INSERT INTO role (first_name, last_name, role_id, manager_id) VALUES ("Darryl", "Sharp", 124, 007);