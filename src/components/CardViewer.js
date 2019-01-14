import React, { Component } from 'react';
import ButtonReset from './ButtonReset';
import PreviewCard from './PreviewCard';

class CardViewer extends Component{
    render(){
        return(
            <div className="container__card-editor">
                <ButtonReset />
                <PreviewCard name={this.props.name}/>
            </div>
        );
    }
}
export default CardViewer;