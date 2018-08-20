\c movie_dev

INSERT INTO movies (title, movie_cast, genre, year, synopsis, img)
VALUES (
    'Star Trek',
    'Chris Pine, Zachary Quinto, Simon Pegg',
    'Sci-Fi',
    2009,
    'The brash James T. Kirk tries to live up to his fathers legacy with Mr. Spock keeping him in check as a vengeful Romulan from the future creates black holes to destroy the Federation one planet at a time.',
    'https://m.media-amazon.com/images/M/MV5BMjE5NDQ5OTE4Ml5BMl5BanBnXkFtZTcwOTE3NDIzMw@@._V1_UX182_CR0,0,182,268_AL_.jpg'
);

INSERT INTO movies (title, movie_cast, genre, year, synopsis, img) 
VALUES (
    'Birdman',
    'Michael Keaton, Emma Stone, Edward Norton, Naomi Watts, Zach Galifianakis',
    'Drama',
    2014,
    'A washed-up actor, who once played an iconic superhero, attempts to revive his career by writing and starring in his very own Broadway play.',
    'https://www.imdb.com/title/tt2562232/mediaviewer/rm3926180864'
);

INSERT INTO movies (title, movie_cast, genre, year, synopsis, img)
VALUES (
  'The Longest Yard', 
  'Adam Sandler', 
  'Comedy', 
  1995, 
  'A prison football comedy', 
  'http://www.gstatic.com/tv/thumb/movieposters/35823/p35823_p_v8_ae.jpg'
  );

INSERT INTO reviews (review_desc, movie_id)
VALUES ('Perfect example of a re-vamp exectuion', 1);

INSERT INTO reviews (review_desc, movie_id)
 VALUES ('This movie rocks, I loved the idea and the actors', 2);

 INSERT INTO reviews (review_desc, movie_id)
 VALUES ('Funny movie', 3);

