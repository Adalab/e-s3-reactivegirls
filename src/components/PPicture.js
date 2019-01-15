import React, { Component } from 'react';

class PPicture extends Component {
    render(){
        return(
            <div className="card__img"><img className="card__img" src={this.props.img} alt="User profile pic"></img></div>
        );
    }
}
export default PPicture;
