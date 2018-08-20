DROP DATABASE IF EXISTS movies_dev;
DROP TABLE IF EXISTS reviews;

\c movie_dev

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    reviews_desc VARCHAR(255),
    users_id REFERENCES USERS,
    movie_id REFERENCES MOVIES
)