const router = require('express')();

const movieController = require('../controllers/movieController');
const reviewController = require('../controllers/reviewController');


router.get('/',
  movieController.getAllMovies,
  (req, res) => res.json({movies: res.locals.data})
);

router.getone('/:id',
    movieController.getOneMovie,
    (req, res ) => res.json(res.locals.data)
);


//this starts the review routes
router.get('/',
  movieController.getAllReviews,
  (req, res) => res.json({reviews: res.locals.data})
);

router.post('/',
    movieController.createReview,
    (req, res) => res.render(res.locals.data)
);

router.getone('/:id',
    reviewController.getOneReview,
    (req, res) => res.json(res.locals.data)
);

router.put('/:id/edit',
    reviewController.updatedReview,
    (req, res) => res.render(res.locals.data)
);


router.delete('/:id',
    reviewController.destroyReview
);




module.exports = router;