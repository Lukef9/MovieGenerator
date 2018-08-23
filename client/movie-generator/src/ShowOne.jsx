/* eslint-disable*/
import React from 'react';
import CreateReviewForm from './UserReviewForm';
import EditForm from './EditForm';

function chooseDisplay(review, onUpdate, editShow, evt) {
  const y = evt;
  const x = (editShow && review.review_id=== y? <EditForm review={review} onUpdate={onUpdate} /> : review.review_desc);
  return x;
}

function ShowOne({ showEditForm, editShow, editThisReview, movie, reviews, onCreate, onDelete, onUpdate }) {
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
            <h1 className="userReviewHeader">User Reviews</h1>
            {
              reviews.filter(review => review.movie_id === movie.movie_id).map((review) => (
                <div key={review.review_id}>
                  <div className="aUserReview">
                  {chooseDisplay(review, onUpdate, editShow, editThisReview)}
                  </div>
                  <button onClick={() => onDelete(review.review_id)}>Delete Review</button>
                  <button onClick={(evt) => showEditForm(evt)} name={review.review_id} >edit</button>
                  
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