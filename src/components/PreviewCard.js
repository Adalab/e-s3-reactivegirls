import React, { Component } from 'react';
import PSkills from './PSkills';
import PContact from './PContact';
import PPicture from './PPicture';
import PTitle from './PTitle';

class PreviewCard extends Component{
    render (){
        return(
            <div className="card__details">
                <PTitle name={this.props.name}/>
                <PPicture />
                <PContact />
                <PSkills />
            </div>
        );
    }
}
export default PreviewCard;