/* eslint-disable*/
import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';
import './App.css';
import SearchForm from './SearchForm';
import LoginForm from './LoginForm';
import Header from './Header';
import Footer from './Footer';
import Homepage from './Homepage';
import ShowOne from './ShowOne';
// import MovieModal from './MovieModal'; used in HomePage
import RegisterForm from './UserRegistrationForm';

import {
  fetchMovies,
  fetchReviews,
  saveReview,
  updateReview,
  destroyReview,
  registerUser,
  login,
} from './services/api';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMovie: null,
      selectedReviews: [],
      movies: null,
      reviews: null,
      show: false,
      username: null,
      email: null,
      editShow: false,
      editThisReview: null,
      currentPane: 'left',
      currentPage: 'home',
    };
    this.showModal = this.showModal.bind(this);
    this.showEditForm = this.showEditForm.bind(this);
    // this.showMovie = this.showMovie.bind(this);
    // this.showReviews = this.showReviews.bind(this);
    this.createReview = this.createReview.bind(this);
    this.editReview = this.editReview.bind(this);
    this.deleteReview = this.deleteReview.bind(this);
    this.createUser = this.createUser.bind(this);
    this.loginUser = this.loginUser.bind(this);
    this.logUser = this.logUser.bind(this);
    this.toggleCurrentPane = this.toggleCurrentPane.bind(this);
    this.toggleCurrentPage = this.toggleCurrentPage.bind(this);
    this.showTargetMovie = this.showTargetMovie.bind(this);
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

  // used in show one to change panes
  toggleCurrentPane(evt) {
    const name = evt.target.name;
    this.setState((prevState) => {
      prevState.currentPane = name;
      return prevState;
    });
  }

  // changes what page we are on based on button clicks
  toggleCurrentPage(evt) {
    const name = evt.target.name;
    this.setState((prevState) => {
      prevState.currentPage = name;
      return prevState;
    });
  }

  // when you click a movie on the Homepage this sets the state for showone and modal
  showTargetMovie(evt) {
    debugger;
    const movieId = parseInt(evt.target.name, 10);
    const movie = this.state.movies[movieId-1]
    this.setState((prevState) => {
      prevState.currentMovie = movie;
      return prevState;
    });
  }

  showEditForm(evt) {
    const name = parseInt(evt.target.name, 10);
    this.setState((prevState) => {
      prevState.editShow = !prevState.editShow;
      prevState.editThisReview = name;
      return prevState;
    });
  }

  // showMovie(movie) {
  //   this.setState({
  //     selectedMovie: movie,
  //     currentView: '', /* show one page containing forms */
  //   });
  // }

  // showReviews(reviews) {
  //   this.setState({
  //     selectedReviews: reviews,
  //     currentView: '', /* show one page containing reviews for selected movie */
  //   });
  // }

  populateStorage() {
    localStorage.setItem('user', this.state.username);
  }

  logUser(userToken) {
    debugger;
    const userData = jwtDecode(userToken.token);
    debugger;
    this.setState({
      username: userData.username,
      email: userData.email,
    });
    this.populateStorage();
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
    debugger;
    const userToken = await registerUser(user);
    debugger;
    this.logUser(userToken);
  }

  async loginUser(user) {
    debugger;
    const userToken = await login(user);
    debugger;
    this.logUser(userToken);
  }

  choosePage() {
    const { currentPage } = this.state;
    switch (currentPage) {
      case 'home':
        return <Homepage 
          movies={this.state.movies} 
          show={this.state.show} 
          toggle={this.showModal} 
          toShowOne={this.toggleCurrentPage}
          showTargetMovie={this.showTargetMovie}
          selectedMovie={this.state.selectedMovie}
        />
      case 'one':
        return (this.state.movies ? <ShowOne
          showEditForm={this.showEditForm}
          editShow={this.state.editShow}
          editThisReview={this.state.editThisReview}
          movie={this.state.movies[0]} 
          reviews={this.state.reviews} 
          onCreate={this.createReview}
          onDelete={this.deleteReview}
          onUpdate={this.editReview}
          toggleCurrentPane={this.toggleCurrentPane}
          currentPane={this.state.currentPane}
        /> : '')
      }
  }

  render() {
    const { movies, reviews, show } = this.state;

    return (
      <main className="App">
        {/* <RegisterForm onSubmit={this.createUser} />
        <LoginForm onSubmit={this.loginUser} /> */}
        <Header />
        <SearchForm />
        {this.choosePage()}
        <Footer />
      </main>

    );
  }
}

export default App;
