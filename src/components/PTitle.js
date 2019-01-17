import React, { Component } from 'react';

class PTitle extends Component {
    render(){
        const divClass = `${this.props.colourClass} card__data`;
        this.props.handleColourP();
        return(                   
            <div className={divClass} ref={this.props.cardData}>
                <div className="card__data-name typo-1">{this.props.name}</div>
                <div className="card__data-job typo-1">{this.props.job}</div>
            </div>
        );

    }
}
export default PTitle;
