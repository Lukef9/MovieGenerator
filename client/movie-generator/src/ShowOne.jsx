import React from 'react';

function ShowOne() {
    return (
        <div className="showOneContainer">
            <div className="thisMoviePosterPane">
              <h1>Movie Poster Here</h1>
            </div>
            <div className="showOneCenterPane">
            <h1 className="thisMovieTitle">Title</h1>
              <div className="thisMovieSynopsis">
                <h3>Movie Summary</h3>
                <p>Four budding developers on an adventure to get CRUD working first before they can add more features.</p>
              </div>
              <div className="thisMovieCast">
                <h3>Cast</h3>
                <ul>
                  <li>John</li>
                  <li>Kenny</li>
                  <li>Luke</li>
                  <li>Tylaine</li>
                </ul>
              </div>
              <div className="thisMovieInfo">
                <h3>Movie Info</h3>
                <p>WDI Lambda</p>
              </div>
            </div>
            <div className="userReviewContainer">
              <h1 className="userReviewHeader">User Reviews</h1>
              <div className="aUserReview">I like this movie!</div>
            </div>
          </div>
    );
}

export default ShowOne;