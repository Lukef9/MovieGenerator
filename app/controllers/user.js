const db = require('../models/user');

module.exports = {

  async getOne(req, res, next) {
    try {
      const user = await db.findByUsername(req.params.user);
      res.locals.data = user;
      next();
    } catch (e) {
      throw (e);
    }
  },

};
