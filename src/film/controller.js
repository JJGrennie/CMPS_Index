const pool = require('../../db');
const queries = require('./queries');

const getFilm = (req, res) => {
	pool.query(queries.getFilm, (error, results) => {
		if (error) throw error;
		res.status(200).json(results.rows);
	});
}

module.exports = {
	getFilm,
};