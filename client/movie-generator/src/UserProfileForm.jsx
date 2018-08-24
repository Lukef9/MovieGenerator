import React, { Component } from 'react';

class UserProfileForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            pwDigest: '',
            email: '',
            icon: ''
        }

        // KZ: bind all four input fields to handleChange
        this.handleUsername = this.handleChange.bind(this, 'userName');
        this.handlePwDigest = this.handleChange.bind(this, 'pwDigest');
        this.handleEmail = this.handleChange.bind(this, 'email');
        this.handleIcon = this.handleChange.bind(this, 'icon');
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    // KZ: targeting input's value to distinguish each input field separately
    handleChange(input, evt) {
        this.setState({
            [input]: evt.target.value,
        });
    }

    handleSubmit(evt) {
        evt.preventDefault();
        alert('Updated Pofile For ' + this.state.userName);
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        name="userName" 
                        placeholder="Username" 
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
                    <input 
                        type="text" 
                        name="email" 
                        placeholder="Email" 
                        value={this.state.email} 
                        onChange={this.handleEmail} 
                    />
                    <input 
                        type="text" 
                        name="icon" 
                        placeholder="Giphy Url" 
                        value={this.state.icon} 
                        onChange={this.handleIcon} 
                    />
                    <button type="submit">Update Profile</button>
                </form>
            </div>
        );
    }
}

export default UserProfileForm;