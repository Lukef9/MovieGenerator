import React, { Component } from 'react';

class EditReview extends Component {
  constructor(props) {
    super(props);
    const { review, movie_id } = props;
    this.state = {
      review: review.review_desc,
      movie_id: review.movie_id,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const reviewData = {
      review: this.state.review,
      movie_id: this.state.movie_id,
      review_id: this.props.review.review_id,
    };
    this.props.onUpdate(reviewData);
  }

  handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { review, movie_id } = this.state;

    return (
      <div>
        <h1>Edit Review</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            name="review"
            value={review}
            onChange={this.handleChange}
          />
          <input
            name="movie_id"
            value={movie_id}
            onChange={this.handleChange}
          />
          <input type="submit" value="Update Review" />
        </form>
      </div>
    );
  }
}

export default EditReview;
