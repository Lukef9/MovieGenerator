import React from 'react';
import CreateReviewForm from './UserReviewForm';
import EditForm from './EditForm';

function ShowOne({ movie, reviews, onCreate, onDelete, onUpdate }) {
    return (
        <div className="showOneContainer">
            <div className="thisMoviePosterPane">
              <h1>Movie Poster Here</h1>
              <img src={movie.img} alt={movie.title} />
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
    );
}

export default ShowOne;