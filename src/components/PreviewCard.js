import React, { Component } from 'react';
import PSkills from './PSkills';
import PContact from './PContact';
import PPicture from './PPicture';
import PTitle from './PTitle';

class PreviewCard extends Component {
    render() {
        
        return (
            <div className="card__details">
                <PTitle 
                    name={this.props.name} 
                    job={this.props.job} 
                    cardData = {this.props.cardData}
                    handleColourP ={this.props.handleColourP}
                    paletteValue={this.props.paletteValue}
                    typoValue={this.props.typoValue}
                />
                
                <PPicture img={this.props.img} />
                <PContact
                    hidden={this.props.hidden}
                    email={this.props.email}
                    phone={this.props.phone}
                    linkedin={this.props.linkedin}
                    github={this.props.github} 
                    contactIcons ={this.props.contactIcons}
                    paletteValue={this.props.paletteValue}
                />
                <PSkills
                    skills={this.props.skills}
                    paletteValue={this.props.paletteValue}
                    hiddenS={this.props.hiddenS}
                />
            </div>
        );
    }
}
export default PreviewCard;
