INSERT INTO departments (name)
VALUES
('Sales'),
('Engineering'),
('Finance'),
('Legal');

INSERT INTO roles (title, salary, department_id)
VALUES
('Sales Lead', 100000, 1),
('Salesperson', 80000, 1),
('Lead Engineer', 150000, 2),
('Software Engineer', 120000, 2),
('Accountant', 125000, 3),
('Legal Team Lead', 250000, 4),
('Lawyer', 190000,4);

INSERT INTO employees (first_name, last_name, role_id)
VALUES
('John', 'Doe', 1),
('Mike', 'Chan', 2),
('Ashley', 'Rodriguez', 3),
('Kevin', 'Tupik', 3),
('Jim', 'Hicks', 7),
('Malia', 'Brown',4),
('Sarah', 'Lourd', 5),
('Tom', 'Allen', 4),
('Frank', 'Wiles', 6),
('Tammer', 'Galal', 3);

UPDATE employees
SET manager_id = 1
WHERE id = 2;

UPDATE employees
SET manager_id = 3
WHERE id = 1 OR id = 4;

UPDATE employees
SET manager_id = 7
WHERE id = 8;

UPDATE employees
SET manager_id = 4
WHERE id = 10;