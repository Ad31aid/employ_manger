-- seeds.sql

-- Insert departments
INSERT INTO department (name) VALUES
  ('HR'),
  ('Sales'),
  ('Engineering');

-- Insert roles
INSERT INTO role (title, salary, department_id) VALUES
  ('HR Manager', 60000.00, 1),
  ('Sales Manager', 70000.00, 2),
  ('Software Engineer', 80000.00, 3);

-- Insert employees
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
  ('John', 'Doe', 1, NULL),
  ('Jane', 'Smith', 2, 1),
  ('Bob', 'Johnson', 3, 1);
