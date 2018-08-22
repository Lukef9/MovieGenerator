const jwt = require('jsonwebtoken');

const secret = process.env.TOKEN_SECRET || 'securesecret';

module.exports = {

  createToken(payload) {
    return new Promise((resolve, reject) => {
      jwt.sign(
        payload,
        secret,
        (err, token) => (err ? reject(err) : resolve(token)),
      );
    });
  },

};
