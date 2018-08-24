import React, { Component } from 'react';

class UserRegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
    };

    // KZ: bind three separate input fields to handleChange
    this.handleUsername = this.handleChange.bind(this, 'username');
    this.handlePassword = this.handleChange.bind(this, 'password');
    this.handleEmail = this.handleChange.bind(this, 'email');
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    // KZ: targeting input field's value because they're separate
  handleChange(input, evt) {
    this.setState({
      [input]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="usernameInput">Username</label>
          <input
            type="text"
            id="usernameInput"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleUsername}
          />

          {/* KZ: input type password to keep privacy */}
          <label htmlFor="passwordInput">Password</label>
          <input
            type="password"
            id="passwordInput"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handlePassword}
          />
          <label htmlFor="emailInput">Email</label>
          <input
            type="text"
            id="emailInput"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleEmail}
          />
          <button type="submit">Register</button>
        </form>

      </div>
    );
  }
}

export default UserRegistrationForm;
