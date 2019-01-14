import React, { Component } from 'react';

class PTitle extends Component {
    render(){
        return(                    
    <div className="card__data card-data__color1">
        <div className="card__data-name typo-1">{this.props.name}</div>
        <div className="card__data-job typo-1">Front end Developer</div>
    </div>
        );

    }
}
export default PTitle;
