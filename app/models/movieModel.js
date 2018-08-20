const db = require('../config/connection');

module.exports = {
    findAllMovies() {
        return db.many(`
        SELECT * 
        FROM movies 
        JOIN reviews 
        ON reviews.movie_id = movies.movie_id`);
    },
    findOneMovie(id) {
        return db.one(`
        SELECT * 
        FROM movies 
        WHERE movie_id = $1`, id);
    },
    insertNewMovie(movie) {
        return db.one(`
        INSERT INTO movies 
        (title, movie_cast, genre, year, synopsis, img) 
        VALUES ($/title/, $/movie_cast/, $/genre/, $/year/, $/synopsis/, $/img/) 
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
        img = $/img/ 
        RETURNING *`, movieData);
    },
    deleteThisMovie(id) {
        return db.none(`
        DELETE FROM movies 
        WHERE movie_id = $1`, id);
    }
};