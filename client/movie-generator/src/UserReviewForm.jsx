import React, { Component } from 'react';

class UserReviewForm extends Component {
  constructor(props) {
    super(props);
    const { movie } = props;
    this.state = {
      review_desc: '',
      movie_id: movie,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleMovieId = this.handleChange.bind(this, 'movie_id');
    // this.handleReviewDesc = this.handleChange.bind(this, 'review_desc');
  }

  //   MAKE SURE TO PASS INPUT AS A PARAMETER WHEN USING TWO INPUT FIELDS
  handleChange(evt) {
    this.setState({
      review_desc: evt.target.value,
      // movie_id: evt.target.value
    });

    // THIS IS FOR TWO INPUT FIELDS
    // this.setState({
    //   [input]: evt.target.value,
    // });

    const reviewField = document.getElementById('reviewField');
    const charMessage = document.getElementById('charMessage');
    const charLimit = 255;
    const checkLimit = () => {
      if (reviewField.value.length < charLimit) {
        charMessage.innerHTML = `${charLimit - reviewField.value.length} Characters Remaining`;
      }
    };
    setInterval(checkLimit, 200);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    // alert(this.state.review_desc + ' has been submitted.');
    this.props.onCreate(this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <textarea
          className="takes-the-reviews-input"
            cols="50"
            rows="8"
            maxLength="255"
            name="review_desc"
            id="reviewField"
            placeholder="Write a Short Review"
            value={this.state.review_desc}
            onChange={this.handleChange}
          />

          {/*
          <input
            type="text"
            name="movie_id"
            onChange={this.handleMovieId}
            value={this.state.movie_id}
          />
        */}

          <label
            htmlFor="reviewField"
            id="charMessage"
            onChange={this.handleChange}
          >255 Characters Remaining

          </label>
          <button className="makes-changes-to-review-form" type="submit">Add Review</button>
    {/*<button type="submit" onSubmit={this.props.createReview}>Add Review</button>*/}

        </form>
      </div>
    );
  }
}

export default UserReviewForm;
