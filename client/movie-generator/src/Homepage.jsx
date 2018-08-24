import React from 'react';
import MovieList from './MovieList';

function Homepage({ movies, show, toggle, toShowOne, showTargetMovie, selectedMovie }) {
  return (
    <section className="Main-section">
      <h2 className="Header-bar">Top Movies</h2>
      <MovieList movies={movies} show={show} 
      toggle={toggle} toShowOne={toShowOne} 
      showTargetMovie={showTargetMovie} 
      selectedMovie={selectedMovie} />
      
    </section>
  );
}

export default Homepage;
