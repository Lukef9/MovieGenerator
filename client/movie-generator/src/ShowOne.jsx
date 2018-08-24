/* eslint-disable*/
import React from 'react';
import CreateReviewForm from './UserReviewForm';
import EditForm from './EditForm';


function chooseDisplay(review, onUpdate, editShow, evt) {
  const y = evt;
  const x = (editShow && review.review_id=== y? <EditForm review={review} onUpdate={onUpdate} /> : review.review_desc);
  return x;
}

function showLeft(movie) {
    return (
      <div>
      <div className="thisMovieSynopsis">
      <h2>Synopsis</h2>
      {movie.synopsis}
    </div>
    <div className="thisMovieCast">
      <h2>Cast</h2>
        {movie.movie_cast}
    </div>
    </div>
    )
  }

  function showCenter(movie) {
    return (
      <div className="thisMovieInfo">
        <p>Genre: {movie.genre}</p>
        <p>Rating: {movie.movie_rating}5</p>
        <p>Year: {movie.year}</p>
      </div>
    )
  }


{/* this is where the user review container info starts */}
  function showRight(showEditForm, editShow, editThisReview, movie, reviews, onCreate, onDelete, onUpdate) {
    return (
<div className="userReviewContainer">
            {
              reviews.filter(review => review.movie_id === movie.movie_id).map((review) => (
                <div key={review.review_id}>
                  <div className="aUserReview">
                  {chooseDisplay(review, onUpdate, editShow, editThisReview)}
                  </div>
                  <button className="makes-changes-to-review-form" onClick={() => onDelete(review.review_id)}>Delete Review</button>
                  <button className="makes-changes-to-review-form" onClick={(evt) => showEditForm(evt)} name={review.review_id} >edit</button>
                  
                </div>
              ))
            }
            <CreateReviewForm movie={movie.movie_id} onCreate={onCreate} />
          </div>
    )
  }

function choosePane(showEditForm, editShow, editThisReview, movie, reviews, onCreate, onDelete, onUpdate, currentPane) {
  switch (currentPane) {
    case 'left':
      return showLeft(movie);
    case 'center':
      return showCenter(movie);
    case 'right':
      return showRight(showEditForm, editShow, editThisReview, movie, reviews, onCreate, onDelete, onUpdate);

  }
  
}

function ShowOne({ showEditForm, editShow, editThisReview, movie, reviews, onCreate, onDelete, onUpdate, toggleCurrentPane, currentPane }) {
  return (
    // outside div for the whole show one page
        <div className="showOneContainer">
            <div className="thisMoviePosterPane">
              <img className="posters" src={movie.img} alt={movie.title} height={ '400vh' } />
            </div>

{/* this div contains the cast and summary info */}
            <div className="showOneCenterPane">
            <div className="H1-div-container">
              <div ><button className="thisMovieTitle" name="left" onClick={(evt) => toggleCurrentPane(evt)}> Movie Title </button></div>
              
              <div><button className="movieInfo" name="center" onClick={(evt) => toggleCurrentPane(evt)}>Info</button></div>
              <div><button className="userReviewHeader" name="right" onClick={(evt) => toggleCurrentPane(evt)}>Reviews</button></div>

              </div>
              {/* left */}
              {choosePane(showEditForm, editShow, editThisReview, movie, reviews, onCreate, onDelete, onUpdate, currentPane)}

{/* the movie info div */}
              {/* center */}
              

{/* this is where the user review container info starts */}
            {/* right */}
            
            



        </div>
    </div>
    );
}

export default ShowOne;