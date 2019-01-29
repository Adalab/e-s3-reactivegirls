import React, { Component } from 'react';
import Header from './components/Header';
import Collapsibles from './components/Collapsibles';
import CardViewer from './components/CardViewer';
import Footer from './components/Footer';

import './App.css';

class Cards extends Component {

  render() {
    
    return (
      <div>
        <Header />
        <main className="page__main">
          <Collapsibles
            formReference={this.props.formReference} 
            designCollapsible={this.props.designCollapsible}
            handleCollapsibles={this.props.handleCollapsibles}
            handleFillCollapsibles = {this.props.handleFillCollapsibles}
            handleShareCollapsibles = {this.props.handleShareCollapsibles}
            hiddenDesign={this.props.hiddenDesign}
            hiddenFill={this.props.hiddenFill}
            hiddenShare={this.props.hiddenShare}
                  
            card = {this.props.card}
            skillsApi={this.props.skillsApi}
            name={this.props.name}
            job={this.props.job}
            email={this.props.email}
            phone={this.props.phone}
            linkedin={this.props.linkedin}
            github={this.props.github}

            colorSelected={this.props.colorSelected}
            typoSelected={this.props.typoSelected}
            handleKeyUpJ={this.props.handleKeyUpJ}
            handleKeyUpN={this.props.handleKeyUpN}
            handleKeyUpE={this.props.handleKeyUpE}
            handleKeyUpP={this.props.handleKeyUpP}
            handleKeyUpL={this.props.handleKeyUpL}
            handleKeyUpG={this.props.handleKeyUpG}


            handleChangeFile={this.props.handleChangeFile}
            fakeClick={this.props.fakeClick}
            img={this.props.img}
            fileInput={this.props.fileInput} 

            handleColourChange={this.props.handleColourChange}
            handleTypoChange={this.props.handleTypoChange}
            paletteValue={this.props.paletteValue}
            typoValue={this.props.typoValue}

            addSkillorNot = {this.props.addSkillorNot}
            />

          <CardViewer
            reset={this.props.reset}
            skills={this.props.skills}
            name={this.props.name}
            job={this.props.job}
            hiddenE={this.props.hiddenE}
            hiddenP={this.props.hiddenP}
            hiddenS={this.props.hiddenS}
            hiddenL={this.props.hiddenL}
            hiddenG={this.props.hiddenG}
            email={this.props.email}
            phone={this.props.phone}
            linkedin={this.props.linkedin}
            github={this.props.github}

            img={this.props.img} 
            cardData = {this.props.cardData}
            contactIcons ={this.props.contactIcons}
            handleColourP ={this.props.handleColourP}


            paletteValue={this.props.paletteValue}
            typoValue={this.props.typoValue}
            />
            
        </main>
        <Footer />
      </div>
    );
  }
}


export default Cards;