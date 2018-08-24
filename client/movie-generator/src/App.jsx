import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';
import './App.css';
import SearchForm from './SearchForm';
// import LoginForm from './LoginForm';
import Header from './Header';
import Footer from './Footer';
import Homepage from './Homepage';
import ShowOne from './ShowOne';
//import MovieModal from './MovieModal';

import {
  fetchMovies,
  fetchReviews,
  saveReview,
  updateReview,
  destroyReview,
  registerUser,
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
      username: null,
      email: null,
      editShow: false,
      editThisReview: null,
      currentPane: 'left',
    };
    this.showModal = this.showModal.bind(this);
    this.showEditForm = this.showEditForm.bind(this);
    this.showMovie = this.showMovie.bind(this);
    this.showReviews = this.showReviews.bind(this);
    this.createReview = this.createReview.bind(this);
    this.editReview = this.editReview.bind(this);
    this.deleteReview = this.deleteReview.bind(this);
    this.toggleCurrentPane = this.toggleCurrentPane.bind(this);
  }


  componentDidMount() {
    this.getMovies();
    this.getReviews();
  }

  getMovies() {
    fetchMovies()
      .then(movieData => this.setState({ movies: movieData.movies }));
  }

  getReviews() {
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

  toggleCurrentPane(evt) {
    const name = evt.target.name;
    this.setState((prevState) => {
      prevState.currentPane = name;
      return prevState;
    });
  }

  showEditForm(evt) {
    const name = parseInt(evt.target.name);
    this.setState((prevState) => {
      prevState.editShow = !prevState.editShow;
      prevState.editThisReview = name;
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

  logUser(user) {
    this.setState({
      username: user.username,
      email: user.email,
    });
  }

  async createReview(review) {
    const reviewData = await saveReview(review);
    this.getReviews();
    this.setState({
      currentView: '', /* show one */
      selectedReviews: reviewData.reviews,
    });
  }

  async editReview(review) {
    const reviewData = await updateReview(review);
    this.getReviews();
    this.setState({
      currentView: '',
      selectedReviews: reviewData.reviews,
    });
  }

  async deleteReview(id) {
    await destroyReview(id);
    this.getReviews();
  }

  async createUser(user) {
    const userToken = await registerUser(user);
    const userData = jwtDecode(userToken);
    this.logUser(userData);
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
        {movies && reviews
          ? <ShowOne
            showEditForm={this.showEditForm}
            editShow={this.state.editShow}
            editThisReview={this.state.editThisReview}
            movie={movies[0]} 
            reviews={reviews} 
            onCreate={this.createReview}
            onDelete={this.deleteReview}
            onUpdate={this.editReview}
            toggleCurrentPane={this.toggleCurrentPane}
            currentPane={this.state.currentPane}
            /> : ''}
        <Footer />
      </main>

    );
  }
}

export default App;
