import React, { Component } from 'react';
//import Bulma from 'bulma';

class MovieModal extends Component{
    constructor(props){
    super(props);
    this.state ={
        show: false
    };
}




    render ()   {
    return (
        <div id="modal" >
                <div className="modal-background"></div>
                    <div className="modal-card">
                        <header className="modal-card-head">
                <p className="modal-card-title">Movie Title</p>
                <button className="closeModal" aria-label="close"></button>
             </header>
    <section className="modal-card-body">
        Reviews...
    </section>
    <footer className="modal-card-foot">
      <button class="button is-success"></button>
      <button class="button">Cancel</button>
    </footer>
  </div>
</div>
);
}

    
}

export default MovieModal;