const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getFilm);
router.get('/:id', controller.getFilmById);
router.get('/filter/search', controller.getFilteredFilms);



// Add a new film
router.post('/', controller.addFilm);

// Update an existing film by ID
router.put('/:id', controller.updateFilm);

 // Add this new route
router.get('/genre', controller.getDistinctGenres);



module.exports = router; 
