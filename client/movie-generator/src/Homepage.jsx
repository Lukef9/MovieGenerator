import React from 'react';

function Homepage() {
  return (
    <section className="Main-section">
      <h2 className="Header-bar">Top 10 Movies</h2>
      <div className="collected-divs">
        {/* this is the div for the movie synopsis */}
        <div className="Top-movies" id="showModal" onClick={this.showModal}>
          This is your selected movie
          {this.state.show ? <MovieModal /> : ''}
        </div>
      </div>
    </section>
  );
}

export default Homepage;
