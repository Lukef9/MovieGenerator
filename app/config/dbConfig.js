module.exports = process.env.DATABASE_URL || {
  port: process.env.PORT || 5432,
  host: process.env.HOST || 'localhost',
  database: process.env.DATABASE || 'movie_dev',
};
