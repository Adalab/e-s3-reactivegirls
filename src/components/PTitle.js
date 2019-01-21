import React, { Component } from 'react';

class PTitle extends Component {
    render(){
        const divClass = `card__data card-data__color${this.props.paletteValue} typo-${this.props.typoValue}`;
     
        return(
            <div className={divClass} ref={this.props.cardData}>
                <div className="card__data-name">{this.props.name}</div>
                <div className="card__data-job">{this.props.job}</div>
            </div>
        );

    }
}
export default PTitle;
