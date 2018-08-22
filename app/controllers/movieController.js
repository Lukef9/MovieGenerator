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

  async createMovie(req, res, next) {
    try {
      const {
        title, movie_cast, genre, year, synopsis, img, movie_rating,
      } = req.body;
      const newMovie = await db.insertNewMovie({
        title, movie_cast, genre, year, synopsis, img, movie_rating,
      });
      res.locals.data = newMovie;
      next();
    } catch (e) {
      throw (e);
    }
  },

  async updateMovie(req, res, next) {
    try {
      const {
        title, movie_cast, genre, year, synopsis, img, movie_rating,
      } = req.body;
      const modifiedMovie = {
        movie_id: req.params.id,
        title,
        movie_cast,
        genre,
        year,
        synopsis,
        img,
        movie_rating,
      };
      const updatedMovie = await db.updateThisMovie(modifiedMovie);
      res.locals.data = updatedMovie;
      next();
    } catch (e) {
      throw (e);
    }
  },

  async destroyMovie(req, res, next) {
    try {
      await db.deleteThisMovie(req.params.id);
      next();
    } catch (e) {
      throw (e);
    }
  },

};
