const db = require('../models/movieReviewModel');

module.exports = {

  async getAllReviews(req, res, next) {
    try {
      // grab all reviews stored in db
      const reviews = await db.findAllReviews();
      // store all reviews in locals to be used by another piece of middleware
      res.locals.data = reviews;
      next();
    } catch (e) {
      throw (e);
    }
  },

  async getOneReview(req, res, next) {
    try {
      // pull one review
      const review = await db.findReviewById(req.params.id);
      // store pulled review
      res.locals.data = review;
      next();
    } catch (e) {
      throw (e);
    }
  },
  // need find by movie id and change to camelCase

  async createReview(req, res, next) {
    try {
      const { review_desc, movie_id, rating } = req.body;
      // take inputted review desc under a specific movie
      const newReview = await db.createMovieReview({ review_desc, movie_id, rating });
      // store review in db and pass it into local storage
      res.locals.data = newReview;
      next();
    } catch (e) {
      throw (e);
    }
  },

  async updateReview(req, res, next) {
    try {
      const {
        review_id,
        review_desc,
        movie_id,
        // rating,
      } = req.body;
      const modifiedReview = {
        review_id,
        review_desc,
        movie_id,
        // rating,
      };
      // take exsisting review data and merge in new changes inputted through the FE
      const updatedReview = await db.updateMoviewReview(modifiedReview);
      // store newly updated review in storage
      res.locals.data = updatedReview;
      next();
    } catch (e) {
      throw (e);
    }
  },

  async destroyReview(req, res, next) {
    try {
      // remove a review from db
      await db.destroyMovieReview(req.params.id);
      next();
    } catch (e) {
      throw (e);
    }
  },

};
