import React, { Component } from 'react';
import './App.css';
import SearchForm from './SearchForm';
import LoginForm from './LoginForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchForm />
        <LoginForm />
        <UserProfileForm />
      </div>
    );
  }
}

export default App;
