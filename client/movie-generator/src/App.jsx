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
      currentView: 'Movie Index',
      selectedMovie: '',
      selectedReviews: [],
      movies: [],
      reviews: [],
    };
    this.showMovie = this.showMovie.bind(this);
    this.showReviews = this.showReviews.bind(this);
    this.createReview = this.createReview.bind(this);
    this.editReview = this.editReview.bind(this);
  }

  componentDidMount() {
    fetchMovies()
      .then(movieData => this.setState({ movies: movieData.movies }));

    fetchReviews()
      .then(reviewData => this.setState({ reviews: reviewData.reviews }));
  }

  showMovie(movie) {
    this.setState({
      selectedMovie: movie,
      currentView: '', /* show one page containing forms */
    });
  }

  showReviews(reviews) {
    this.setState({
      selectedReviews: reviews,
      currentView: '', /* show one page containing reviews for selected movie */
    });
  }

  async createReview(review) {
    const reviewData = await saveReview(review);
    this.fetchReviews();
    this.setState({
      currentView: '', /* show one */
      selectedReviews: reviewData.reviews,
    });
  }

  async editReview(review) {
    const reviewData = await updateReview(review);
    this.fetchReviews();
    this.setState({
      currentView: '',
      selectedReviews: reviewData.reviews,
    });
  }

  renderCurrentView() {
    const { currentView } = this.state;
    const { movies, reviews, selectedMovie, selectedReviews } = this.state;

    switch (currentView) {
      case 'Movie Index':
        return <MovieIndex movies={movies}/>;
      case 'Show One':
        return (<Movie 
          selectedMovie={selectedMovie}
          showMovie={this.showMovie}
          selectedReviews={selectedReviews}
          showReviews={this.showReviews}
          reviews={reviews}
          onCreate={this.createReview}
          onUpdate={this.updateReview} />);
    }
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
          <SearchForm />
        </div>
        <section className="Main-section">
          <h2 className="Header-bar">Top 10 Movies</h2>
          <div className="collected-divs">
            <div className="Top-movies">
            This is your selected movie
            </div>

          </div>
          <h2 className="Top-selection">Top 10 Genre</h2>
          <div className="more-collected-divs">
            <div className="Top-movies">
            This is your selected movie
            </div>
          </div>
        </section>
        <footer className="Footer">
          <Footer />

        </footer>
      </main>

    );
  }
}

export default App;
