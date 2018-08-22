import React from 'react';
import Movie from './Movie';
import MovieModal from './MovieModal';

function MovieList({ movies, show, toggle }) {
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
          {
            movies.map((movie) => (
              <div className="Top-movies" id="showModal" onClick={toggle}>
                <Movie movie={movie} />
              </div>
            ))
          }
          {show ? <MovieModal toggle={toggle} movies={movies} /> : ''}
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
