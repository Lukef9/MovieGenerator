import React, { Component } from 'react';
import './App.css';
import SearchForm from './SearchForm';
import LoginForm from './LoginForm';
import Footer from './Footer';

class App extends Component {


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
        <input className="Search" value="What are you in the mood for?"/>
        <button className="Search-submit">Submit</button>
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
        {/* <SearchForm />
        <LoginForm /> */}
      </main>

    );
  }
}

export default App;
