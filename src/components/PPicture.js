import React, { Component } from 'react';
import PropTypes from "prop-types";


class PPicture extends Component {
    render(){
        return(
            <div className="card__img"><img className="card__img" src={this.props.img} alt="User profile pic"></img></div>
        );
    }
}

PPicture.propTypes = {
    img: PropTypes.string,  
};

export default PPicture;
