const prompts = [
	{
		type: 'list',
		name: 'mainChoice',
		message: 'Pick an option',
		choices: [
			new inquirer.Separator('==== DEPARTMENTS ===='),
			'View all departments',
			'Add a department',
			'Delete a department',
			new inquirer.Separator('==== ROLES ===='),
			'View all roles',
			'Add a role',
			'Delete a role',
			new inquirer.Separator('==== EMPLOYEES ===='),
			'View all employees',
			'View employees by manager',
			'View employees by department',
			'Add an employee',
			'Update an employee role',
			'Update an employee manager',
			'Delete an employee',
			new inquirer.Separator('==== BUDGET ===='),
			'View the total utilized budget of a department',
			new inquirer.Separator('==== MENU ===='),
			'Quit',
		],
	},
];

const addDeptPrompts = [
	{
		type: 'input',
		name: 'deptName',
		message: 'Enter the new department name: ',
	},
];

const deleteDeptPrompts = [
	{
		type: 'list',
		name: 'deletedDept',
		message: 'Delete which department? ',
		choices: viewAllDepts(),
	},
];

const addRolePrompts = [
	{
		type: 'input',
		name: 'roleTitle',
		message: "What is the new role's title? ",
	},
	{
		type: 'number',
		name: 'roleSalary',
		message: 'What is the salary of the new role? ',
	},
	{
		type: 'list',
		name: 'roleDept',
		message: 'Which department is the new role in? ',
		choices: viewAllDepts(),
	},
];

const deleteRolePrompts = [
	{
		type: 'list',
		name: 'deletedRole',
		message: 'Delete which role? ',
		choices: viewAllRoles(),
	},
];

const viewEmpsByManagerPrompts = [
	{
		type: 'list',
		name: 'emps',
		message: 'View employees under which manager? ',
		choices: viewAllDepts(),
	},
];

const viewEmpsByDeptPrompts = [
	{
		type: 'list',
		name: 'emps',
		message: 'View employees from which department? ',
		choices: viewAllRoles(),
	},
];

const addEmpPrompts = [
	{
		type: 'input',
		name: 'empFName',
		message: "Enter the new employee's first name: ",
	},
	{
		type: 'input',
		name: 'empNName',
		message: "Enter the new employee's last name: ",
	},
	{
		type: 'list',
		name: 'empRole',
		message: "Selece the new employee's role: ",
		choices: viewAllRoles(),
	},
	{
		type: 'list',
		name: 'empManager',
		message: "Select the new employee's manager: ",
		choices: viewAllManagers(),
	},
];

const updateRolePrompts = [
	{
		type: 'list',
		name: 'employee',
		message: 'Select an employee to update: ',
		choices: viewAllEmployees(),
	},
	{
		type: 'list',
		name: 'empRole',
		message: 'Select a new role for the employee: ',
		choices: viewAllRoles(),
	},
];

const updateManagerPrompts = [
	{
		type: 'list',
		name: 'employee',
		message: 'Select an employee to update: ',
		choices: viewAllEmployees(),
	},
	{
		type: 'list',
		name: 'empManager',
		message: 'Select a new manager for the employee: ',
		choices: viewAllManagers(),
	},
];

const deleteEmpPrompts = [
	{
		type: 'list',
		name: 'deletedEmp',
		message: 'Delete which Employee? ',
		choices: viewAllEmployees(),
	},
];

module.exports = {
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
};
