import React from 'react';
// import Bulma from 'bulma';


function MovieModal({toggle, movie, toShowOne}) {
  console.log(movie);
  return (
    <div id="modal">
      <div type="button" onClick={toggle} className="closeModal">X</div>
      <div className="inner-modal">
        <header className="modal-header">
          <p className="modal-title">{movie.title}</p>
        </header>
        <section className="modal-body">
          <figure className="movie-image">
            <img className="posters" src={movie.img} alt={movie.title} />
          </figure>
          <div className="syn-rev-wrapper">
            <article className="synopsis">
              {movie.synopsis}
            </article>
            <div className="reviews">
              If you would like to see reviews press see more details below
            </div>
            <input type="button" value="See More Details" name="one" onClick={(evt) => toShowOne(evt)} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default MovieModal;
