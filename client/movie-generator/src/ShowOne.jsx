import React from 'react';

function ShowOne({movie, reviews}) {
    return (
        <div className="showOneContainer">
            <div className="thisMoviePosterPane">
              <h1>Movie Poster Here</h1>
              <img src={movie.img} alt={movie.titele} />
            </div>
            <div className="showOneCenterPane">
            <h1 className="thisMovieTitle">Title</h1>
              <div className="thisMovieSynopsis">
                <h3>Movie Summary</h3>
                {movie.synopsis}
                {/* <p>Four budding developers on an adventure to get CRUD working first before they can add more features.</p> */}
              </div>
              <div className="thisMovieCast">
                <h3>Cast</h3>
                  {movie.movie_cast}
                {/* <ul>
                  <li>John</li>
                  <li>Kenny</li>
                  <li>Luke</li>
                  <li>Tylaine</li>
                </ul> */}
              </div>
              <div className="thisMovieInfo">
                <h3>Movie Info</h3>
                <p>Genre: {movie.genre}</p>
                <p>Rating: {movie.movie_rating}/5</p>
                <p>Year: {movie.year}</p>
              </div>
            </div>
            <div className="userReviewContainer">
              <h1 className="userReviewHeader">User Reviews</h1>
              {
                reviews.filter(review => review.movie_id === movie.movie_id).map(review => (
                  <div className="aUserReview">{review.review_desc}</div>
                ))
              }

              
            </div>
          </div>
    );
}

export default ShowOne;