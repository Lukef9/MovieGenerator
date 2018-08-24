import React from 'react';
// import Bulma from 'bulma';


function MovieModal({toggle, toShowOne}) {
  return (
    <div id="modal">
      <div type="button" onClick={toggle} className="closeModal">X</div>
      <div className="inner-modal">
        <header className="modal-header">
          <p className="modal-title">Movie Title</p>
        </header>
        <section className="modal-body">
          <figure className="movie-image">
            {/* <img /> */}
          </figure>
          <div className="syn-rev-wrapper">
            <article className="synopsis">
              Synopsis Lorem ipsum dolor, s
              it amet consectetur adipisicing elit. Illum quibusdam magni 
              odio pariatur culpa officiis voluptas.
              {' '}
            </article>
            <review className="reviews">
              Reviews and Ratings veniam maiores quisquam fuga
              dolorum ipsa, cumque, aliquid harum consequatur saepe.
              Ratione, nemo vitae!
            </review>
            <button name="one" onClick={(evt) => toShowOne(evt)}>See More Details</button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default MovieModal;
