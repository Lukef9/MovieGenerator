import React from 'react';

function Movie({ movie, showTargetMovie }) {
  return (
    <div>
      <button className="buttonPoster" style={{backgroundImage:`url(${movie.img})`}} onClick={evt => showTargetMovie(evt)} name={movie.movie_id}></button>
    </div>
  );
}

export default Movie;
