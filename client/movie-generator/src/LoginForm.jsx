import React, { Component } from 'react';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    // KZ: bind username and password to handleChange
    this.handleUsername = this.handleChange.bind(this, 'username');
    this.handlePassword = this.handleChange.bind(this, 'password');
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // KZ: handleChange requires two parameters because we have two input fields.
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
    const { username, password } = this.state;
    // KZ: deconstruct this.state for convienence
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Login"
            value={username}
            onChange={this.handleUsername}
          />

          {/* KZ: input type password to for privacy */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={this.handlePassword}
          />
          <button type="submit">Sign In</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
