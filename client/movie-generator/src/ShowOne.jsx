import React from 'react';
import CreateReviewForm from './UserReviewForm';
import EditForm from './EditForm';

function ShowOne({ movie, reviews, onCreate, onDelete, onUpdate }) {
    return (
    // outside div for the whole show one page
        <div className="showOneContainer">
            <div className="thisMoviePosterPane">
              <img src={movie.img} alt={movie.title} height={ '400vh' } />
            </div>

{/* this div contains the cast and summary info */}
            <div className="showOneCenterPane">
            <div className="H1-div-container">
              <div><h1 className="thisMovieTitle"> Movie Title</h1></div>
              
              <div><h1>Info</h1></div>
              <div><h1 className="userReviewHeader">Reviews</h1></div>

              </div>

              <div className="thisMovieSynopsis">
                <h2>Synopsis</h2>
                {movie.synopsis}
              </div>
              <div className="thisMovieCast">
                <h2>Cast</h2>
                  {movie.movie_cast}
              </div>
{/* the movie info div */}
              <div className="thisMovieInfo">
                <p>Genre: {movie.genre}</p>
                <p>Rating: {movie.movie_rating}5</p>
                <p>Year: {movie.year}</p>
              </div>

{/* this is where the user review container info starts */}
            <div className="userReviewContainer">
              {
                reviews
                .filter(review => 
                  review.movie_id === movie.movie_id)
                .map(review => (
                  <div>
                    <div className="aUserReview">
                      {review.review_desc}
                    </div>
                    <button onClick={() => onDelete(review.review_id)}>Delete Review</button>
                    <EditForm review={review} onUpdate={onUpdate} />
                  </div>
                ))
              }
              <CreateReviewForm movie={movie.movie_id} onCreate={onCreate} />
            </div>

          </div>
    </div>
    );
}

export default ShowOne;