import React, { Component } from 'react';
import Header from './components/Header';
import Collapsibles from './components/Collapsibles';
import CardViewer from './components/CardViewer';
import Footer from './components/Footer';

import './App.css';

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: "Nombre y apellidos",
    };

  }
  render() {
    return (
    <div>
        <Header />
        <main className="page__main">
            <Collapsibles skills={this.props.skills} name={this.state.name}/>
            <CardViewer name={this.state.name}/>
        </main>
        <Footer />
    </div>
    );
  }
}
export default Cards;