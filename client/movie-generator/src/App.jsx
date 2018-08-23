/* eslint-disable*/
import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';
import './App.css';
// import SearchForm from './SearchForm';
// import LoginForm from './LoginForm';
// import Header from './Header';
// import Footer from './Footer';
// import Homepage from './Homepage';
// import ShowOne from './ShowOne';
// import MovieModal from './MovieModal'; used in HomePage
import RegisterForm from './UserRegistrationForm';
import LoginForm from './LoginForm';

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
      currentPage: 'one',
    };
    this.showModal = this.showModal.bind(this);
    this.showEditForm = this.showEditForm.bind(this);
    this.showMovie = this.showMovie.bind(this);
    this.showReviews = this.showReviews.bind(this);
    this.createReview = this.createReview.bind(this);
    this.editReview = this.editReview.bind(this);
    this.deleteReview = this.deleteReview.bind(this);
    this.createUser = this.createUser.bind(this); //
    this.loginUser = this.loginUser.bind(this);  //
    this.logUser = this.logUser.bind(this);  //
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

  choosePage() {
    const { currentPage } = this.state;
    switch (currentPage) {
      case 'home':
        return <Homepage movies={this.state.movies} show={this.state.show} toggle={this.showModal}  />
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
        <RegisterForm onSubmit={this.createUser} />
        <LoginForm onSubmit={this.loginUser} />
        {/* <Header />
        <SearchForm />
        {this.choosePage()}
        {/* {movies && reviews
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
            /> : ''} */}
        <Footer />
      </main>

    );
  }
}

export default App;
