const db = require('../models/movie');

module.exports = {

    async getAll(req, res, next) {
        try {
            const movies = await db.showAll();
            res.locals.data = movies
            next();
        } catch (e) {
            throw (e)
        }
    }

};