import React, { Component } from 'react';

class PTitle extends Component {
    render(){
        console.log(this.props.name);

        return(                   
            <div className="card__data card-data__color1">
                <div className="card__data-name typo-1"  value={this.props.name}>{this.props.name}</div>
                <div className="card__data-job typo-1">{this.props.job}</div>
            </div>
        );

    }
}
export default PTitle;
