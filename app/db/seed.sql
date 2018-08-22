\c movie_dev

INSERT INTO movies (title, movie_cast, genre, year, synopsis, img, movie_rating)
VALUES (
    'Star Trek',
    'Chris Pine, Zachary Quinto, Simon Pegg',
    'Sci-Fi',
    2009,
    'The brash James T. Kirk tries to live up to his fathers legacy with Mr. Spock keeping him in check as a vengeful Romulan from the future creates black holes to destroy the Federation one planet at a time.',
    'https://m.media-amazon.com/images/M/MV5BMjE5NDQ5OTE4Ml5BMl5BanBnXkFtZTcwOTE3NDIzMw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
    1
);

INSERT INTO movies (title, movie_cast, genre, year, synopsis, img, movie_rating) 
VALUES (
    'Birdman',
    'Michael Keaton, Emma Stone, Edward Norton, Naomi Watts, Zach Galifianakis',
    'Drama',
    2014,
    'A washed-up actor, who once played an iconic superhero, attempts to revive his career by writing and starring in his very own Broadway play.',
    'https://www.imdb.com/title/tt2562232/mediaviewer/rm3926180864',
    2
);

INSERT INTO movies (title, movie_cast, genre, year, synopsis, img, movie_rating)
VALUES (
  'The Longest Yard', 
  'Adam Sandler', 
  'Comedy', 
  1995, 
  'A prison football comedy', 
  'http://www.gstatic.com/tv/thumb/movieposters/35823/p35823_p_v8_ae.jpg',
  3
  );

INSERT INTO movies (title, movie_cast, genre, year, synopsis, img, movie_rating) 
VALUES (
    'The Dark Knight',
    'Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine, Maggie Gyllenhaal, Gary Oldman, Morgan Freeman',
    'Action, Crime, Drama',
    2008,
    'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    'https://www.imdb.com/title/tt0468569/mediaviewer/rm4023877632',
    4
);

INSERT INTO movies (title, movie_cast, genre, year, synopsis, img, movie_rating) 
VALUES (
    'Akira',
    'Mitsuo Iwata, Nozomu Sasaki, Mami Koyama, Tessho Genda, Hiroshi Otake, Koichi Kitamura, Michihiro Ikemizu',
    'Animation, Action, Drama',
    1988,
    'A secret military project endangers Neo-Tokyo when it turns a biker gang member into a rampaging psychic psychopath that only two teenagers and a group of psychics can stop.',
    'https://www.imdb.com/title/tt0094625/mediaviewer/rm2245203200',
    5
);

INSERT INTO movies (title, movie_cast, genre, year, synopsis, img, movie_rating) 
VALUES (
    'Forrest Gump',
    'Tom Hanks, Rebecca Williams, Sally Field, Michael Conner Humphreys',
    'Drama, Romance',
    1994,
    'The presidencies of Kennedy and Johnson, Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75.',
    'https://www.imdb.com/title/tt0109830/mediaviewer/rm1954748672',
    6
);

INSERT INTO movies (title, movie_cast, genre, year, synopsis, img, movie_rating) 
VALUES (
    'Interstellar',
    'Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow, Timothee Chalamet, Anne Hathaway',
    'Adventure, Drama, Sci-Fi',
    2014,
    'A team of explorers travel through a wormhole in space in an attempt to ensure humanitys survival.',
    'https://www.imdb.com/title/tt0816692/mediaviewer/rm4043724800',
    7
);

INSERT INTO movies (title, movie_cast, genre, year, synopsis, img, movie_rating) 
VALUES (
    'WALL-E',
    'Ben Burtt, Elissa Knight, Jeff Garlin, Fred Willard',
    'Animation, Adventure, Family',
    2008,
    'In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.',
    'https://www.imdb.com/title/tt0910970/mediaviewer/rm1659211008',
    8
);

INSERT INTO movies (title, movie_cast, genre, year, synopsis, img, movie_rating) 
VALUES (
    'Inglourious Basterds',
    'Brad Pitt, Melanie Laurent, Christoph Waltz, Eli Roth, Michael Fassbender, Diane Kruger, Daniel Bruhl',
    'Adventure, Drama, War',
    2009,
    'In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owners vengeful plans for the same.',
    'https://www.imdb.com/title/tt0361748/mediaviewer/rm3163035648',
    9
);

INSERT INTO movies (title, movie_cast, genre, year, synopsis, img, movie_rating) 
VALUES (
    'Toy Story 3',
    'Tom Hanks, Tim Allen, Joan Cusack, Ned Beatty, Don Rickles, Miachel Keaton, Wallace Shawn, John Ratzenberger, Estelle Harris, John Morris, Jodi Benson, Emily Hahn',
    'Animation, Adventure, Comedy',
    2010,
    'The toys are mistakenly delivered to a day-care center instead of the attic right before Andy leaves for college, and its up to Woody to convince the other toys that they werent abandoned and to return home.',
    'https://www.imdb.com/title/tt0435761/mediaviewer/rm3038678784',
    10
);

INSERT INTO reviews (review_desc, movie_id, rating)
VALUES ('Perfect example of a re-vamp exectuion', 1, 1);

INSERT INTO reviews (review_desc, movie_id, rating)
VALUES ('This movie rocks, I loved the idea and the actors', 2, 2);

INSERT INTO reviews (review_desc, movie_id, rating)
VALUES ('Funny movie', 3, 3);

INSERT INTO reviews (review_desc, movie_id, rating)
VALUES ('Heath Ledger is the BEST Joker, period.', 4, 4);

INSERT INTO reviews (review_desc, movie_id, rating)
VALUES ('A timeless classic animation movie.', 5, 5);

INSERT INTO reviews (review_desc, movie_id, rating)
VALUES ('RUN FORREST RUN', 6, 6);

INSERT INTO reviews (review_desc, movie_id, rating)
VALUES ('Riveting and out of this world.', 7, 7);

INSERT INTO reviews (review_desc, movie_id, rating)
VALUES ('Pixar does it again!', 8, 8);

INSERT INTO reviews (review_desc, movie_id, rating)
VALUES ('Great movie!', 9, 9);

INSERT INTO reviews (review_desc, movie_id, rating)
VALUES ('I almost cried', 10, 10);