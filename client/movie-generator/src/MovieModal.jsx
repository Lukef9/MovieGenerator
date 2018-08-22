import React from 'react';
// import Bulma from 'bulma';

function MovieModal() {
  return (
    <div id="modal">
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Movie Title</p>
          <button className="closeModal" aria-label="close" />
        </header>
        <section className="modal-card-body">
        Reviews...
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success" />
          <button className="button">Cancel</button>
        </footer>
      </div>
    </div>
  );
}

export default MovieModal;
