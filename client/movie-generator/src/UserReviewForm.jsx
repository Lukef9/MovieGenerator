import React, { Component } from 'react';

class UserReviewForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            review_desc: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState({
            review_desc: evt.target.value,
        });

        const reviewField = document.getElementById('reviewField');
        const charMessage = document.getElementById('charMessage');
        const charLimit = 255;
        const checkLimit = () => { 
            if (reviewField.value.length < charLimit) {
                charMessage.innerHTML = (charLimit - reviewField.value.length) + ' Characters Remaining';
            }
        }
        setInterval(checkLimit, 200);
    }

    handleSubmit(evt) {
        evt.preventDefault();
        alert(this.state.review_desc + ' has been submitted.');
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <textarea 
                        cols="50" rows="8" 
                        maxLength="255" 
                        name="review_desc" 
                        id="reviewField"
                        placeholder="Write a Short Review" 
                        value={this.state.review_desc} 
                        onChange={this.handleChange} 
                    />
                    <label 
                        htmlFor="reviewField" 
                        id="charMessage" 
                        onChange={this.handleChange}
                    >255 Characters Remaining</label>
                    <button type="submit">Add Review</button>

                </form>
            </div>
        );
    }
}

export default UserReviewForm;