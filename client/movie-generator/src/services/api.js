const BE_URL = 'http://localhost:3001';

module.exports = {

  // fetchMovies() {
  //   return fetch(`${BE_URL}/movies`)
  //     .then(resp => resp.json())
  //     .catch((err) => {
  //       throw Error(err);
  //     });
  // },

  async fetchMovies() {
    try {
      const movies = await fetch(`${BE_URL}/movies`);
      movies.json();
      return movies;
    } catch (e) {
      throw (e);
    }
  },

  async fetchReviews() {
    try {
      const reviews = await fetch(`${BE_URL}/reviews`);
      reviews.json();
      return reviews;
    } catch (e) {
      throw (e);
    }
  },

  async saveReview(review) {
    try {
      const opts = {
        method: 'POST',
        body: JSON.stringify(review),
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const reviewData = await fetch(`${BE_URL}/reviews`, opts);
      reviewData.json();
      return reviewData;
    } catch (e) {
      throw (e);
    }
  },

  async updateReview(review) {
    try {
      const opts = {
        method: 'PUT',
        body: JSON.stringify(review),
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const reviewData = await fetch(`${BE_URL}/reviews/${review.id}`, opts);
      reviewData.json();
      return reviewData;
    } catch (e) {
      throw (e);
    }
  },

};
