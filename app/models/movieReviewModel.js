const db = require('../config/connection');

module.exports = {
  findAllReviews() {
    return db.many(`
    SELECT * 
    FROM reviews;
    `);
  },

  findReviewById(id) {
    return db.one(`
    SELECT * 
    FROM reviews
    WHERE review_id = $1;
    `, id);
  },

  findReviewsForMovie(id) {
    return db.many(`
    SELECT * 
    FROM reviews
    WHERE movie_id = $1;
    `, id);
  },

  createMovieReview(review) {
    return db.one(`
    INSERT INTO reviews
    (movie_id, review_desc)
    VALUES
    ($/movie_id/, $/review_desc/)
    RETURNING *
    `, review);
  },
  
  destroyMovieReview(id) {
    return db.none(`
    DELETE FROM reviews
    WHERE review_id = $1
    `, id);
  },

  updateMoviewReview(review) {
    return db.one(`
    UPDATE reviews
    SET review_desc = $/review_desc/
    WHERE review_id = $/review_id/
    `, review)
  },
}