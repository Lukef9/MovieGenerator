import React from 'react';
import MovieList from './MovieList';

function Homepage({ movies, show, toggle, toShowOne }) {
  return (
    <section className="Main-section">
      <h2 className="Header-bar">Top 10 Movies</h2>
      <MovieList movies={movies} show={show} toggle={toggle} toShowOne={toShowOne} />
      
    </section>
  );
}

export default Homepage;
