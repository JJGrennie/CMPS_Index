const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/filter/search', controller.getFilteredFilms);
router.get('/:id', controller.getFilmById);
router.get('/', controller.getFilm);



module.exports = router; 