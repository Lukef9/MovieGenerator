const router = require('express')();

const reviewController = require('../controllers/reviewController');

router.get('/',
  reviewController.getAllReviews,
  (req, res) => res.json({ reviews: res.locals.data }));

router.post('/',
  reviewController.createReview,
  (req, res) => res.json({ reviews: res.locals.data }));

router.get('/:id',
  reviewController.getOneReview,
  (req, res) => res.json({ reviews: res.locals.data }));

router.put('/:id/edit',
  reviewController.updateReview,
  (req, res) => res.json({ reviews: res.locals.data }));


router.delete('/:id',
  reviewController.destroyReview);

module.exports = router;
