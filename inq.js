// prompt.js
const inquirer = require('inquirer');

// Define Inquirer prompts for various actions
const mainMenuPrompt = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        'Exit'
      ],
    },
  ]);
};

const addDepartmentPrompt = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter the name of the department:',
      validate: (input) => {
        if (input.trim() === '') {
          return 'Department name cannot be empty.';
        }
        return true;
      },
    },
  ]);
};

const addRolePrompt = (departments) => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter the title of the role:',
      validate: (input) => {
        if (input.trim() === '') {
          return 'Role title cannot be empty.';
        }
        return true;
      },
    },
    {
      type: 'input',
      name: 'salary',
      message: 'Enter the salary for the role:',
      validate: (input) => {
        if (!/^\d+(\.\d{1,2})?$/.test(input)) {
          return 'Salary must be a valid number with up to 2 decimal places.';
        }
        return true;
      },
    },
    {
      type: 'list',
      name: 'department_id',
      message: 'Select the department for the role:',
      choices: departments.map((department) => ({
        name: department.name,
        value: department.id,
      })),
    },
  ]);
};

const addEmployeePrompt = (roles, employees) => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'first_name',
      message: 'Enter the first name of the employee:',
      validate: (input) => {
        if (input.trim() === '') {
          return 'First name cannot be empty.';
        }
        return true;
      },
    },
    {
      type: 'input',
      name: 'last_name',
      message: 'Enter the last name of the employee:',
      validate: (input) => {
        if (input.trim() === '') {
          return 'Last name cannot be empty.';
        }
        return true;
      },
    },
    {
      type: 'list',
      name: 'role_id',
      message: 'Select the role for the employee:',
      choices: roles.map((role) => ({
        name: role.title,
        value: role.id,
      })),
    },
    {
      type: 'list',
      name: 'manager_id',
      message: 'Select the manager for the employee (optional):',
      choices: [
        { name: 'None', value: null },
        ...employees.map((employee) => ({
          name: `${employee.first_name} ${employee.last_name}`,
          value: employee.id,
        })),
      ],
    },
  ]);
};

const updateEmployeeRolePrompt = (employees, roles) => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'employee_id',
      message: 'Select the employee to update:',
      choices: employees.map((employee) => ({
        name: `${employee.first_name} ${employee.last_name}`,
        value: employee.id,
      })),
    },
    {
      type: 'list',
      name: 'role_id',
      message: 'Select the new role for the employee:',
      choices: roles.map((role) => ({
        name: role.title,
        value: role.id,
      })),
    },
  ]);
};

module.exports = {
  mainMenuPrompt,
  addDepartmentPrompt,
  addRolePrompt,
  addEmployeePrompt,
  updateEmployeeRolePrompt,
};
