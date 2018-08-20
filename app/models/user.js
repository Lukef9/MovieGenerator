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
    return db.one(`
    INSERT INTO users (username, pass_digest, email)
    VALUES ($/username/, $/pass_digest/, $/email/)
    RETURNING *
    `, user);
  },

  findById(id) {
    return db.one(`
    SELECT *
    FROM users
    WHERE id = $1
    `, id);
  },

};
