DROP DATABASE IF EXISTS movie_dev;
CREATE DATABASE movie_dev;

\c movie_dev

DROP TABLE IF EXISTS movies;

CREATE TABLE movies (
    id SERIAL PRIMARY KEY NOT NULL,
    title VARCHAR(255) NOT NULL,
    movie_cast VARCHAR(255) NOT NULL,
    genre VARCHAR(255) NOT NULL,
    year INTEGER NOT NULL,
    synopsis TEXT NOT NULL,
    img VARCHAR(255) NOT NULL,
);