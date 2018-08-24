/* eslint-disable*/
import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';
import './App.css';
import SearchForm from './SearchForm';
import Header from './Header';
import Footer from './Footer';
import Homepage from './Homepage';
import ShowOne from './ShowOne';
import LoginForm from './LoginForm';                  // coming soon
import RegisterForm from './UserRegistrationForm';    // coming soon

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
    this.createReview = this.createReview.bind(this);
    this.editReview = this.editReview.bind(this);
    this.deleteReview = this.deleteReview.bind(this);
    // this.createUser = this.createUser.bind(this); coming soon
    // this.loginUser = this.loginUser.bind(this);
    // this.logUser = this.logUser.bind(this);
    this.toggleCurrentPane = this.toggleCurrentPane.bind(this);
    this.toggleCurrentPage = this.toggleCurrentPage.bind(this);
    this.showTargetMovie = this.showTargetMovie.bind(this);
  }

    /** @func componentDidMount
  * @desc calls the fetch statments to get data from api
  * @param  - None
  * @return None
  */
 componentDidMount() {
  this.getMovies();
  this.getReviews();
}

/** @func getMovies
* @desc calls fetch movies from api.js and sets the returning data in state as movies
* @param  -none
* @return none just sets state
*/
getMovies() {
  fetchMovies()
    .then(movieData => this.setState({ movies: movieData.movies }));
}

/** @func getReviews
* @desc calls fetch reviews from api.js and sets the returning data in state as reviews
* @param  -none
* @return none just sets state
*/
getReviews() {
  fetchReviews()
    .then(reviewData => this.setState({ reviews: reviewData.reviews }));
}

/** @func showModal
* @desc this is bound and passed to movie list in order to toggle when the modal shows 
* by setting the state to the inverse of itself
* @param  -none
* @return none just sets state
*/
showModal() {
  this.setState((prevState) => {
    prevState.show = !prevState.show;
    return prevState;
  });
}

 /** @func toggleCurrentPane
* @desc this is bound and passed to showOne in order to be able to switch between panes
* by taking the evt.target and sets it into state depending on the name
* @param  evt 
* @return none just sets state
*/
toggleCurrentPane(evt) {
  const name = evt.target.name;
  this.setState((prevState) => {
    prevState.currentPane = name;
    return prevState;
  });
}

 /** @func toggleCurrentPage
  * @desc this is bound and passed to ShowOne, MovieModal and Homepage in order to be able to switch between pages
  * by taking the evt.target and sets it into state depending on the name
  * @param  evt 
  * @return none just sets state
  */
  toggleCurrentPage(evt) {
    const name = evt.target.name;
    this.setState((prevState) => {
      prevState.currentPage = name;
      return prevState;
    });
  }

  /** @func showTargetMovie
  * @desc this is bound and passed to Homepage in order to be able to pass that data to MovieModal/ShowOne
  * by taking the evt.target and sets it into state depending on the name
  * @param  evt 
  * @return none just sets state
  */
  // when you click a movie on the Homepage this sets the state for showone and modal
  showTargetMovie(evt) {
    const movieId = parseInt(evt.target.name, 10);
    const movie = this.state.movies[movieId-1]
    this.setState((prevState) => {
      prevState.selectedMovie = movie;
      return prevState;
    });
  }

  /** @func showEditForm
  * @desc this is bound and passed to ShowOne in order to show the edit form on specific reviews
  * by taking the evt.target and sets it into state depending on the name
  * @param  evt 
  * @return none just sets state
  */
  showEditForm(evt) {
    const name = parseInt(evt.target.name, 10);
    this.setState((prevState) => {
      prevState.editShow = !prevState.editShow;
      prevState.editThisReview = name;
      return prevState;
    });
  }

  // coming soon
  // populateStorage() {
  //   localStorage.setItem('user', this.state.username);
  // }

  // logUser(userToken) {
  //   const userData = jwtDecode(userToken.token);
  //   this.setState({
  //     username: userData.username,
  //     email: userData.email,
  //   });
  //   this.populateStorage();
  // }


  /** @func createReview
  * @desc gets passed a review and sends it to the backend and then fetches new data
  * @param  review  takes a new review
  * @return none just sets state
  */
  async createReview(review) {
    const reviewData = await saveReview(review);
    this.getReviews();
    this.setState({
      selectedReviews: reviewData.reviews,
    });
  }

  /** @func editReview
  * @desc gets passed an edited review and sends it to the backend and then fetches new data
  * @param  review  takes an edited review
  * @return none just sets state
  */
  async editReview(review) {
    const reviewData = await updateReview(review);
    this.getReviews();
    this.setState({
      currentView: '',
      selectedReviews: reviewData.reviews,
    });
  }

  /** @func deleteReview
  * @desc gets passed an id and deletes the the review with that id from the database
  * @param  id  takes review id
  * @return none just sets state
  */
  async deleteReview(id) {
    await destroyReview(id);
    this.getReviews();
  }

  // coming soon
  async createUser(user) {
    debugger;
    const userToken = await registerUser(user);
    debugger;
    this.logUser(userToken);
  }

  // coming soon
  async loginUser(user) {
    debugger;
    const userToken = await login(user);
    debugger;
    this.logUser(userToken);
  }

  /** @func choosePage
  * @desc uses a switch in order to determine which component to show
  * @param  string currentPage  
  * @return a component
  */
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
          movie={this.state.selectedMovie} 
          reviews={this.state.reviews} 
          onCreate={this.createReview}
          onDelete={this.deleteReview}
          onUpdate={this.editReview}
          toggleCurrentPane={this.toggleCurrentPane}
          currentPane={this.state.currentPane}
          toHome={this.toggleCurrentPage}
        /> : '')
      }
  }

  /** @func render
  * @desc renders our homepage
  * @param  none
  * @return our webpage or a bunch of components and htmls tags
  */
  render() {
    return (
      <main className="App">
        <Header />
        <SearchForm />
        {this.choosePage()}
        <Footer />
      </main>

    );
  }
}

export default App;
