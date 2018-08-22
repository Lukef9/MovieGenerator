const db = require('../models/movieReviewModel');

module.exports = {

  async getAllReviews(req, res, next) {
    try {
      const movies = await db.findAllReviews();
      res.locals.data = movies;
      next();
    } catch (e) {
      throw (e);
    }
  },

  async getOneReview(req, res, next) {
    try {
      const movie = await db.findReviewById(req.params.id);
      res.locals.data = movie;
      next();
    } catch (e) {
      throw (e);
    }
  },
  // need find by movie id and change to camelCase

  async createReview(req, res, next) {
    try {
      const { review_desc, movie_id, rating } = req.body;
      const newReview = await db.createMovieReview({ review_desc, movie_id, rating });
      res.locals.data = newReview;
      next();
    } catch (e) {
      throw (e);
    }
  },

  async updateReview(req, res, next) {
    try {
      const { review_desc, movie_id, rating } = req.body;
      const modifiedReview = {
        review_id: req.params.id,
        review_desc,
        movie_id,
        rating,
      };
      const updatedReview = await db.updateMoviewReview(modifiedReview);
      res.locals.data = updatedReview;
      next();
    } catch (e) {
      throw (e);
    }
  },

  async destroyReview(req, res, next) {
    try {
      await db.destroyMovieReview(req.params.id);
      next();
    } catch (e) {
      throw (e);
    }
  },

};
