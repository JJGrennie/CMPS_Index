const Pool = require("pg").Pool;

const pool = new Pool({
	user: "jjgrennie",
	password: "OWzW6D37ayVUa44UjRGmM9H2BCNQ5C8G",
	host: "dpg-cvlg31ngi27c73fsa7a0",
	database: "film_gwnh",
	port: 5432,	
});

module.exports = pool;

