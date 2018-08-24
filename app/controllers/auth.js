const tokenService = require('../services/token');
const userModel = require('../models/user');

module.exports = {
  async register(req, res, next) {
    try {
      // store inputted user info
      const user = await userModel.create(req.body);
      // remove user's password
      delete user.pass_digest;
      // create token for user
      const token = await tokenService.createToken(user);
      // send token to FE server
      return res.json({ token });
    } catch (e) {
      throw (e);
    }
  },

  async login(req, res, next) {
    try {
      // wait for verification
      const user = await userModel.login(req.body);
      // remove password from grabbed user
      delete user.pass_digest;
      // create token for already existing user
      const token = await tokenService.createToken(user);
      // send token wrapped in json object
      return res.json({ token });
    } catch (e) {
      throw (e);
    }
  },

};
