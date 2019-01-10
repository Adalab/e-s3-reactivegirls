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
            <Collapsibles />
            <CardViewer />
        </main>
        <Footer />
    </div>
    );
  }
}
export default Cards;