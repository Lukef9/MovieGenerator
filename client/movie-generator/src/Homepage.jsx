import React from 'react';
import MovieList from './MovieList';

function Homepage({ movies, show, toggle }) {
  return (
    <section className="Main-section">
      <h2 className="Header-bar">Top 10 Movies</h2>
      <MovieList movies={movies} show={show} toggle={toggle} />
      
    </section>
  );
}

export default Homepage;
