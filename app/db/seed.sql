\c movie_dev

INSERT INTO movies (title, movie_cast, genre, year, synopsis, img)
VALUES (
    'Star Trek',
    'Chris Pine, Zachary Quinto, Simon Pegg',
    'Sci-Fi',
    2009,
    'The brash James T. Kirk tries to 
    live up to his fathers legacy with
    Mr. Spock keeping him in check as a 
    vengeful Romulan from the future creates 
    black holes to destroy the Federation 
    one planet at a time.',
    'https://m.media-amazon.com/images/M/MV5BMjE5NDQ5OTE4Ml5BMl5BanBnXkFtZTcwOTE3NDIzMw@@._V1_UX182_CR0,0,182,268_AL_.jpg'
);

INSERT INTO reviews (review_desc, movie_id)
VALUES ('Perfect example of a re-vamp exectuion',1);