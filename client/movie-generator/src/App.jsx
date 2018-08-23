import React, { Component } from 'react';
import './App.css';
import SearchForm from './SearchForm';
// import LoginForm from './LoginForm';
import Header from './Header';
import Footer from './Footer';
import Homepage from './Homepage';
import ShowOne from './ShowOne';
// import MovieModal from './MovieModal'; used in HomePage

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
      movies: null,
      reviews: null,
      show: false,
    };
    this.showModal = this.showModal.bind(this);
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

  // this is the show modal function
  showModal() {
    this.setState((prevState) => {
      prevState.show = !prevState.show;
      return prevState;
    });
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

  // renderCurrentView() {
  //   const { currentView } = this.state;
  //   const { movies, reviews, selectedMovie, selectedReviews } = this.state;

  // switch (currentView) {
  //   case 'Movie Index':
  //     return <MovieIndex movies={movies}/>;
  //   case 'Show One':
  //     return (<Movie
  //       selectedMovie={selectedMovie}
  //       showMovie={this.showMovie}
  //       selectedReviews={selectedReviews}
  //       showReviews={this.showReviews}
  //       reviews={reviews}
  //       onCreate={this.createReview}
  //       onUpdate={this.updateReview} />);
  // }
  // }

  render() {
    const { movies, reviews, show } = this.state;

    return (
      <main className="App">
        <Header />
        <SearchForm />
        {false ? <Homepage movies={movies} show={show} toggle={this.showModal} /> : ''}
        {movies && reviews ? <ShowOne movie={movies[0]} reviews={reviews} /> : ''}
        <Footer />
      </main>

    );
  }
}

export default App;
