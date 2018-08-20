const pgp = require('pg-promise');
const db = require('./dbConfig');

module.exports = pgp(db);
