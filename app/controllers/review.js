const db = require('../models/review');

module.exports = {

  async getAll(req, res, next) {
    try {
      const movies = await db.modelAll();
      res.locals.data = movies;
      next();
    } catch (e) {
      throw (e);
    }
  },

  async getOne(req, res, next) {
    try {
      const movie = await db.modelOne();
      res.locals.data = movie;
      next();
    } catch (e) {
      throw (e);
    }
  },

  async create(req, res, next) {
    try {
      const { review_desc, movie_id } = req.body;
      const newReview = await db.modelSave({ review_desc, movie_id });
      res.locals.data = newReview;
      next();
    } catch (e) {
      throw (e);
    }
  },

  async update(req, res, next) {
    try {
      const { review_desc, movie_id } = req.body;
      const modifiedReview = {
        id: req.params.id,
        review_desc,
        movie_id,
      };
      const updatedReview = await db.modelUpdate(modifiedReview);
      res.locals.data = updatedReview;
      next();
    } catch (e) {
      throw (e);
    }
  },

  async destroy(req, res, next) {
    try {
      await db.modelDestroy(req.params.id);
      next();
    } catch (e) {
      throw (e);
    }
  },

};
