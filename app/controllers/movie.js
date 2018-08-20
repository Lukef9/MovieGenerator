const db = require('../models/movie');

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

};
