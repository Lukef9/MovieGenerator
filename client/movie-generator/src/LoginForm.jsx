import React, { Component } from 'react';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            pwDigest: ''
        }

        this.handleUsername = this.handleChange.bind(this, 'userName');
        this.handlePwDigest = this.handleChange.bind(this, 'pwDigest');
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(input, evt) {
        this.setState({
            [input]: evt.target.value,
        });
    }

    handleSubmit(evt) {
        evt.preventDefault();
        alert('Welcome Back, ' + this.state.userName + '!');
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        name="userName"
                        placeholder="Login" 
                        value={this.state.userName} 
                        onChange={this.handleUsername} 
                    />
                    <input 
                        type="password" 
                        name="pwDigest"
                        placeholder="Password" 
                        value={this.state.pwDigest} 
                        onChange={this.handlePwDigest} 
                    />
                    <button type="submit">Sign In</button>
                </form>
            </div>
        );
    }
}

export default LoginForm;