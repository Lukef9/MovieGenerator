import React from 'react';
import Movie from './Movie';
import MovieModal from './MovieModal';

function MovieList({ movies, show, toggle, toShowOne, showTargetMovie, selectedMovie }) {
  let stuff;
  if (!movies) {
    stuff =(
    <p>
      ROOOOAR
    </p>
    )
  }
  else {
    stuff = (
      movies.length ? (
        <div className="collected-divs">
          {// add a key
            movies.map((movie) => (
              <div className="Top-movies" id="showModal" onClick={toggle}>
                <Movie movie={movie} showTargetMovie={showTargetMovie} />
              </div>
            ))
          }
          {show ? <MovieModal toggle={toggle} movie={selectedMovie} toShowOne={toShowOne} /> : ''}
        </div>
      ) : (
        <div>
          you fail at movies
        </div>
          )
        )
      }
    
  return (
    <div>{stuff}</div>
  );
}

export default MovieList;
