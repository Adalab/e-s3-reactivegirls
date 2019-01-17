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
            skillsApi={this.props.skillsApi}
            name={this.props.name}
            job={this.props.job}
            email={this.props.email}
            phone={this.props.phone}
            linkedin={this.props.linkedin}
            github={this.props.github}


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
            handleTypoChange={this.props.handleTypoChange}/>

          <CardViewer
            skills={this.props.skills}
            name={this.props.name}
            job={this.props.job}
            email={this.props.email}
            phone={this.props.phone}
            linkedin={this.props.linkedin}
            github={this.props.github}

            img={this.props.img} 
            cardData = {this.props.cardData}
            contactIcons ={this.props.contactIcons}/>
        </main>
        <Footer />
      </div>
    );
  }
}
export default Cards;