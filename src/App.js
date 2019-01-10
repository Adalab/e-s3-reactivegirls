import React, { Component } from 'react';
import './App.css';
import Cards from './Cards';

const skills=['HTML', 'CSS', 'Patata :|'];

class App extends Component {
  render() {

    return (
     <Cards skills={skills}/>
    );
  }
}

export default App;
