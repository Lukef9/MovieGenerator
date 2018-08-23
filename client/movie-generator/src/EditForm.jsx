import React, { Component } from 'react';

class EditForm extends Component {
  constructor(props) {
    super(props);
    const { review } = props;
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
      review_desc: this.state.review,
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
    const { review } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name="review"
            value={review}
            onChange={this.handleChange}
          />
          <input type="submit" value="Update Review" />
        </form>
      </div>
    );
  }
}

export default EditForm;
