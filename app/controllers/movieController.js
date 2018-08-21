const db = require('../models/movieModel');

module.exports = {

  async getAllMovies(req, res, next) {
    try {
      const movies = await db.findAllMovies();
      res.locals.data = movies;
      next();
    } catch (e) {
      throw (e);
    }
  },

  async getOneMovie(req, res, next) {
    try {
      const movie = await db.findOneMovie(req.params.id);
      res.locals.data = movie;
      next();
    } catch (e) {
      throw (e);
    }
  },

};
