const router = require('express')();

const movieController = require('../controllers/movieController');
// const reviewController = require('../controllers/reviewController');


router.get('/',
  movieController.findAllMovies,
  (req, res) => res.json({movies: res.locals.movies})
);
router.get('/',
  movieController.findAllReviews,
  (req, res) => res.json({reviews: res.locals.reviews})
);

router.post('/',
    movieController.createReview,
    (req, res) => res.render(res.locals.reviews)
);

router.put('/:id/edit',
    reviewController.updateReview,
    (req, res) => res.render(res.locals.reviews)
);

router.getone('/:id',
    movieController.getOneMovie,
    (req, res ) => res.json(res.locals.movies)
);

router.getone('/:id',
    reviewController.getOneReview,
    (req, res) => res.json(res.locals.reviews)
);



module.exports = router;