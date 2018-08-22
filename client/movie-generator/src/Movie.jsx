import React from 'react';

function Movie({ movie }) {
  return (
    <div>
      <img className="posters" src={movie.img} alt={movie.title} />
    </div>
  );
}

export default Movie;
