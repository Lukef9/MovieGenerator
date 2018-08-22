const tokenService = require('../services/token');
const userModel = require('../models/user');

module.exports = {

  async register(req, res, next) {
    try {
      const user = await userModel.create(req.body);
      delete user.pass_digest;
      const token = await tokenService.createToken(user);
      return res.json({ token });
    } catch (e) {
      throw (e);
    }
  },

  async login(req, res, next) {
    try {
      const user = await userModel.login(req.body);
      delete user.pass_digest;
      const token = await tokenService.createToken(user);
      return res.json({ token });
    } catch (e) {
      throw (e);
    }
  },

};
