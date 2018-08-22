import React from 'react';
import MovieModal from './MovieModal';

function Homepage(props) {
  return (
    <section className="Main-section">
      <h2 className="Header-bar">Top 10 Movies</h2>
      <div className="collected-divs">
        {/* this is the div for the movie synopsis */}
        <div className="Top-movies" id="showModal" onClick={props.toggle}>
          This is your selected movie
          {props.show ? <MovieModal /> : ''}
        </div>
      </div>
    </section>
  );
}

export default Homepage;
