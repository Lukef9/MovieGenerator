import React, { Component } from 'react';
import './App.css';
import SearchForm from './SearchForm';
// import LoginForm from './LoginForm';
import Footer from './Footer';
import { 
  fetchMovies,
  fetchReviews,
  saveReview,
  updateReview,
  } from './services/api';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      reviews: []
    }
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
        <div className="Login">Login</div>
        </div>
        </header>
        <div className="Search-bar">
        <SearchForm/>
        </div>
        <section className="Main-section">
          <h2 className="Header-bar">Top 10 Movies</h2>
            <div className="collected-divs">
            <div className="Top-movies">
            This is you're selected movie
            </div>

            </div>
            <h2 className="Top-selection">Top 10 Genre</h2>
            <div className="more-collected-divs">
            <div className="Top-movies">
            This is you're selected movie
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
