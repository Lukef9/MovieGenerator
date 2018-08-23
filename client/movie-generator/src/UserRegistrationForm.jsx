import React, { Component } from 'react';

class UserRegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      pass_digest: '',
      email: '',
    };

    this.handleUsername = this.handleChange.bind(this, 'username');
    this.handlePassDigest = this.handleChange.bind(this, 'pass_digest');
    this.handleEmail = this.handleChange.bind(this, 'email');
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(input, evt) {
    this.setState({
      [input]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
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
          <label htmlFor="passwordInput">Password</label>
          <input
            type="password"
            id="passwordInput"
            placeholder="Password"
            value={this.state.pass_digest}
            onChange={this.handlePassDigest}
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
