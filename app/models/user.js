const bcrypt = require('bcrypt');
const db = require('../config/connection');

module.exports = {

  findByUsername(username) {
    return db.one(`
    SELECT *
    FROM users
    WHERE username = $1
    `, username);
  },

  create(user) {
    const passDigest = bcrypt.hashSync(user.password, 11);
    return db.one(`
    INSERT INTO users (username, pass_digest, email)
    VALUES ($1, $2, $3)
    RETURNING *
    `, [user.username, passDigest, user.email]);
  },

  login(user) {
    return this.findByUsername(user.username)
      .then((userInfo) => {
        const validAttempt = bcrypt.compareSync(user.password, userInfo.pass_digest);
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
