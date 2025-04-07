const getFilm = "SELECT * FROM filmtype";
const getFilmById = "select * from filmtype WHERE Id = $1";

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


module.exports = {
	getFilm,
	getFilmById,
    getFilteredFilms,
};