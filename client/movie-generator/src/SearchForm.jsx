import React, { Component } from 'react';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      search: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    alert(`Looking up ${this.state.search}...`);
  }

  render() {
    return (
      <div className="Search-bar">
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              className="Search"
              type="text"
              placeholder="What can I suggest for you?"
              value={this.state.search}
              onChange={this.handleChange}
            />
            <button className="Search-submit" type="submit">Search</button>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchForm;
