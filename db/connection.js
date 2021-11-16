const mysql = require('mysql2');

const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'Max8mumEffort',
	database: 'company',
});

module.exports = db;
