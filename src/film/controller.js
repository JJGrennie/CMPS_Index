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

// Add a new film
const addFilm = (req, res) => {
    const { genre, movie, year } = req.body;

    if (!genre || !movie || !year) {
        return res.status(400).json({ error: "Missing required fields" });
    }
    console.log("Query:", queries.addFilm); // Log the query string
    console.log("Values:", [genre, movie, year]); // Log the values being passed into the query

    pool.query(queries.addFilm, [genre, movie, year], (error, results) => {
        if (error) {
            console.error("Database Error:", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        res.status(201).json(results.rows[0]); // Return the inserted film
    });
};

// Update an existing film by ID
const updateFilm = (req, res) => {
    const filmId = parseInt(req.params.id);
    const { genre, movie, year } = req.body;

    if (isNaN(filmId)) {
        return res.status(400).json({ error: "Invalid value format" });
    }

    if (!genre || !movie || !year) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    pool.query(queries.updateFilm, [genre, movie, year, filmId], (error, results) => {
        if (error) {
            console.error("Database Error:", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        if (results.rows.length === 0) {
            return res.status(404).json({ error: "Film Not Found" });
        }
        res.status(200).json(results.rows[0]); // Return the updated film
    });
};

module.exports = {
    getFilm,
    getFilmById,
    getFilteredFilms,
    addFilm,
    updateFilm
};