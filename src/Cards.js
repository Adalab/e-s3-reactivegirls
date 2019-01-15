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
            <Collapsibles skills={this.props.skills} name={this.props.name} job={this.props.job} handleKeyUpJ={this.props.handleKeyUpJ} handleKeyUpN={this.props.handleKeyUpN} handleKeyUpE={this.handleKeyUpE} email={this.props.email} handleChangeFile={this.props.handleChangeFile} fakeClick={this.props.fakeClick} img={this.props.img} fileInput={this.props.fileInput}/>
            <CardViewer name={this.props.name} job={this.props.job} email={this.props.email} img={this.props.img}/>
        </main>
        <Footer />
    </div>
    );
  }
}
export default Cards;