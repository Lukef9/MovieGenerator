const db = require('../config/connection');

module.exports = {

  findAllMovies() {
    return db.many(`
        SELECT * 
        FROM movies
    `);
  },

  findOneMovie(id) {
    return db.one(`
        SELECT * 
        FROM movies 
        WHERE movie_id = $1`, id);
  },


  // KZ: keeping consistent with attribute names in our schema for insert and update queries
  insertNewMovie(movie) {
    return db.one(`
        INSERT INTO movies 
        (title, movie_cast, genre, year, synopsis, img, movie_rating) 
        VALUES ($/title/, $/movie_cast/, $/genre/, $/year/, $/synopsis/, $/img/, $/movie_rating/) 
        RETURNING *`, movie);
  },

  updateThisMovie(id, movieData) {
    return db.one(`
        UPDATE movies 
        SET 
        title = $/title/,
        movie_cast = $/movie_cast/,
        genre = $/genre/,
        year = $/year/,
        synopsis = $/synopsis/,
        img = $/img/,
        movie_rating = $/movie_rating/,
        RETURNING *`, movieData);
  },

  deleteThisMovie(id) {
    return db.none(`
        DELETE FROM movies 
        WHERE movie_id = $1`, id);
  },
};
