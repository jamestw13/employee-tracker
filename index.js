const inquirer = require('inquirer');
const db = require('./db/connection.js');
const cTable = require('console.table');
const {
	prompts,
	addDeptPrompts,
	deleteDeptPrompts,
	addRolePrompts,
	deleteRolePrompts,
	viewEmpsByManagerPrompts,
	viewEmpsByDeptPrompts,
	addEmpPrompts,
	updateRolePrompts,
	updateManagerPrompts,
	deleteEmpPrompts,
} = require('./prompts.js');

const viewAllDepts = () => {
	const sql = `SELECT * FROM departments;`;
	db.query(sql, (err, rows) => {
		if (err) {
			console.log(err.message);
			return;
		}
		console.table(rows);
	});
};

const addDept = () => {};
const deleteDept = () => {};
const viewAllRoles = () => {
	const sql = `SELECT * FROM roles;`;
	db.query(sql, (err, rows) => {
		if (err) {
			console.log(err.message);
			return;
		}
		console.table(rows);
	});
	main();
};
const addRole = () => {};
const deleteRole = () => {};
const viewAllEmployees = () => {
	const sql = `SELECT * FROM employees;`;
	db.query(sql, (err, rows) => {
		if (err) {
			console.log(err.message);
			return;
		}
		console.table(rows);
	});
};
const viewEmpsByManager = () => {};
const viewEmpsByDept = () => {};
const addEmployee = () => {};
const updateEmpRole = () => {};
const updateEmpManager = () => {};
const deleteEmployee = () => {};
const viewDeptBudget = () => {};

const handleMainChoice = choice => {
	switch (choice) {
		case 'View all departments':
			viewAllDepts();
			break;
		case 'Add a department':
			addDept();
			break;
		case 'Delete a department':
			deleteDept();
			break;
		case 'View all roles':
			viewAllRoles();
			break;
		case 'Add a role':
			addRole();
			break;
		case 'Delete a role':
			deleteRole();
			break;
		case 'View all employees':
			viewAllEmployees();
			break;
		case 'View employees by manager':
			viewEmpsByManager();
			break;
		case 'View employees by department':
			viewEmpsByDept();
			break;
		case 'Add an employee':
			addEmployee();
			break;
		case 'Update an employee role':
			updateEmpRole();
			break;
		case 'Update an employee manager':
			updateEmpManager();
			break;
		case 'Delete an employee':
			deleteEmployee();
			break;
		case 'View the total utilized budget of a department':
			viewDeptBudget();
			break;
		case 'Quit':
			console.log(`
      Good Bye!
      `);
			process.exitCode = 1;
			break;
		default:
			break;
	}
};

const main = () => {
	inquirer
		.prompt(prompts)
		.then(x => handleMainChoice(x.mainChoice))
		.then(main);
};

main();
