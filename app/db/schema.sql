DROP DATABASE IF EXISTS movie_dev;
CREATE DATABASE movie_dev;

\c movie_dev

DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS movies;

-- CREATE TABLE users (
--     id SERIAL PRIMARY KEY,
--     username VARCHAR(15) NOT NULL UNIQUE,
--     pass_digest VARCHAR(25) NOT NULL,
--     email VARCHAR(255) NOT NULL UNIQUE,
--     icon VARCHAR(255)
-- );

CREATE TABLE movies (
    movie_id SERIAL PRIMARY KEY NOT NULL,
    title VARCHAR(255) NOT NULL,
    movie_cast VARCHAR(255) NOT NULL,
    genre VARCHAR(255) NOT NULL,
    year INTEGER NOT NULL,
    synopsis TEXT NOT NULL,
    img VARCHAR(255) NOT NULL,
    movie_rating INTEGER,
);

CREATE TABLE reviews (
    review_id SERIAL PRIMARY KEY,
    review_desc VARCHAR(255),
    rating INTEGER,
    -- users_id INTEGER REFERENCES USERS,
    movie_id INTEGER REFERENCES movies(movie_id)
);
