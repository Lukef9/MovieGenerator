import React, { Component } from 'react';
import './App.css';
import SearchForm from './SearchForm';
//import LoginForm from './LoginForm';
import Footer from './Footer';
import MovieModal from './MovieModal';

import { 
  fetchMovies,
  fetchReviews,
  // saveReview,
  // updateReview,
  } from './services/api';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      reviews: [],
      show: false

    }
     this.showModal = this.showModal.bind(this);
    }
  // this is the show modal function
  showModal(){
    this.setState(prevState=> {
      prevState.show = !prevState.show;
      return prevState;
    });
}

  

  componentDidMount() {
    fetchMovies()
      .then(movieData => this.setState({ movies: movieData.movies, }));

    fetchReviews()
      .then(reviewData => this.setState({ reviews: reviewData.reviews }));
  }

  render() {
    return (
      <main className="App">
        <header className="App-header">
        <div className="App-logo">Logo</div>
        <div className="Flex-div">
        <div className="Register">Register</div>
        <div className="Login">Login </div>
        </div>
        </header>
        <div className="Search-bar">
        <SearchForm/>
        </div>
        <section className="Main-section">
          <h2 className="Header-bar">Top 10 Movies</h2>
            <div className="collected-divs">

            {/* this is the div for the movie synopsis */}
          <div className="Top-movies" id="showModal" onClick ={this.showModal}>
            This is you're selected movie
            {this.state.show ? <MovieModal /> : ''}
            </div>

            </div>
        </section>
        <footer className="Footer">
        <Footer/>

        </footer>
      </main>

    );
  }
}

export default App;
