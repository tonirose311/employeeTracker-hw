-- starting data for department -- 
INSERT INTO department (name) VALUES ("Manufacturing");
INSERT INTO department (name) VALUES ("Research and Development");
INSERT INTO department (name) VALUES ("Sales");
-- starting data for role --  
INSERT INTO role (title, salary, department_id) VALUES ("Technician", 80000, 1);
INSERT INTO role (title, salary, department_id) VALUES ("Scientist", 95000, 2);
INSERT INTO role (title, salary, department_id) VALUES ("Sales Director", 100000, 3);
-- starting data for employee -- 
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Brian", "Choi", 1, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Francis", "Villar", 3, null);