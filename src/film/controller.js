const pool = require('../../db');
const queries = require('./queries');

const getFilm = (req, res) => {
	pool.query(queries.getFilm, (error, results) => {
		if (error) throw error;
		res.status(200).json(results.rows);
	});
};

// Controller: Filters on Filmtype Id
// Author: Josh Grenninger

const getFilmById = (req, res) => {
    const filmId = parseInt(req.params.id); // 'filmId' is the correct variable
    if (isNaN(filmId)) {
        return res.status(400).json({ error: "Invalid value format" });
    }
    console.log("Received FilmId");
    
    // Use 'filmId' variable here
    pool.query(queries.getFilmById, [filmId], (error, results) => {
        if (error) {
            console.error("Database Error", error);
            return res.status(500).json({ error: "Film Not Found" });
        }
        res.status(200).json(results.rows);
    });
};

const getFilteredFilms = (req, res) => {
	const { genre, year } = req.query;

	const { query, values } = queries.getFilteredFilms(genre, year);

	pool.query(query, values, (error, results) => {
		if (error) {
			console.error("Database Error:", error);
			return res.status(500).json({ error: "Internal Server Error" });
		}
		res.status(200).json(results.rows);
	});
};

module.exports = {
	getFilm,
	getFilmById,
	getFilteredFilms,
};
