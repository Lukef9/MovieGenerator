const axios = require('axios');
const instance = axios.create({
    baseURL: 'http://localhost:3001',
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' },
});

module.exports = {

    async fetchMovies() {
        try {
            const movies = await fetch(`${BE_URL}/movies`)
            movies.json();
            return movies;
        } catch (e) {
            throw (e);
        }
    },

    async fetchReviews() {
        try {
            const reviews = await fetch(`${BE_URL}/reviews`)
            reviews.json();
            return reviews;
        } catch (e) {
            throw (e);
        }
    },

    async saveReview() {
        try {

        } catch (e) {
            throw (e)
        }
    },
};