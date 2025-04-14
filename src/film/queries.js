const getFilm = "SELECT * FROM filmtype";
const getFilmById = "SELECT * FROM filmtype WHERE Id = $1";

const getFilteredFilms = (genre, year) => {
    let query = 'SELECT * FROM filmtype WHERE 1=1';
    const values = [];

    if (genre) {
        values.push(genre);
        query += ` AND LOWER(genre) = LOWER($${values.length})`; // Case-insensitive match for genre
    }

    if (year) {
        values.push(parseInt(year));
        query += ` AND year = $${values.length}`; // Filter by year
    }

    return { query, values };
};

// Add a new film
const addFilm = 'INSERT INTO filmtype (genre, movie, year) VALUES ($1, $2, $3) RETURNING *';

// Update an existing film
const updateFilm = 'UPDATE filmtype SET genre = $1, movie = $2, year = $3 WHERE id = $4 RETURNING *';

// Renamed for clarity
const getDistinctGenres = "SELECT DISTINCT genre FROM filmtype";

module.exports = {
    getFilm,
    getFilmById,
    getFilteredFilms,
    addFilm,
    updateFilm,
    getDistinctGenres // exporting it with the right name
};
