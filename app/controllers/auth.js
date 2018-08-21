const bcrypt = require('bcrypt');
const db = require('../models/user');

module.exports = {

  async register(req, res, next) {
    try {
      const salt = parseInt(process.env.SALT);
      const hash = bcrypt.hashSync(req.body.password, salt);
      const user = {
        username: req.body.username,
        pass_digest: hash,
        email: req.body.email,
      };
      const storeUser = await db.create(user);
      req.session.user = storeUser;
      next();
    } catch (e) {
      throw (e);
    }
  },

  checkPassword(loginAttempt, userInfo) {
    const validPassword = bcrypt.compareSync(loginAttempt.password, userInfo.pass_digest);
    if (!validPassword) { return false; }
    return userInfo;
  },

  checkEmail(loginAttempt, userInfo) {
    let validEmail = false;
    if (loginAttempt.email === userInfo.email) { validEmail = true; }
    return validEmail;
  },

  async login(req, res, next) {
    try {
      const loginAttempt = {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
      };
      const validUserInfo = await db.findByUsername(loginAttempt.username);
      const validEmail = this.checkEmail(loginAttempt, validUserInfo);
      const validAttempt = this.checkPassword(loginAttempt, validUserInfo);
      if (!validEmail) { throw 'Try again'; }
      if (!validAttempt) { throw 'Try again'; } else {
        req.session.user = validAttempt;
        next();
      }
    } catch (e) {
      throw (e);
    }
  },

  logout(req, res, next) {
    req.session.destroy(e => next(e));
  },

  loginRequired = [
      (req, res, next) => next(!req.session.user || null),
      (err, req, res, next) => res.sendStatus(401),
  ];

};
