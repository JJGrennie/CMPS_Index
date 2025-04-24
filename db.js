const Pool = require("pg").Pool;

//const pool = new Pool({
	//user: "postgres",
	//password: "RossBoss",
	//host: "localhost",
	//database: "film",
	//port: 5432,	
//});


//
//const pool = new Pool({
	//user: "jjgrennie",
	//password: "OWzW6D37ayVUa44UjRGmM9H2BCNQ5C8G",
	//host: "dpg-cvlg31ngi27c73fsa7a0-a.ohio-postgres.render.com",
	//database: "film_gwnh",
	//port: 5432,
	//ssl: true
//});

const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});


module.exports = pool;

