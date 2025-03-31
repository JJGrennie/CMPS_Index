const Pool = require("pg").Pool;

const pool = new Pool({
	user: "postgres",
	password: "RossBoss",
	host: "localhost",
	database: "film",
	port: 5432,	
});

module.exports = pool;
//test message