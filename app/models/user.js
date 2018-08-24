const bcrypt = require('bcrypt');
const db = require('../config/connection');

module.exports = {
  // search users by username
  findByUsername(username) {
    return db.one(`
    SELECT *
    FROM users
    WHERE username = $1
    `, username);
  },
  // save user's info after they register
  create(user) {
    // hash user's clear text password
    const passDigest = bcrypt.hashSync(user.password, 11);
    return db.one(`
    INSERT INTO users (username, pass_digest, email)
    VALUES ($1, $2, $3)
    RETURNING *
    `, [user.username, passDigest, user.email]);
  },
  // verify user info
  login(user) {
    // search for inputted username
    return this.findByUsername(user.username)
      .then((userInfo) => {
        // verify and compare inputted password with hashed password from database
        const validAttempt = bcrypt.compareSync(user.password, userInfo.pass_digest);
        // throw a fit if verification is not completed
        if (!validAttempt) { throw new Error('Invalid Credentials'); }
        return userInfo;
      });
  },

  findById(id) {
    return db.one(`
    SELECT *
    FROM users
    WHERE id = $1
    `, id);
  },

};
