import React, { Component } from 'react';
import './App.css';
import Cards from './Cards';

const skills=['HTML', 'CSS', 'Patata :|'];

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      card:{
        name: "Nombre y apellidos",
        job: "Front end developer",
        email: "",
        phone: "",
        img: "",
        linkedin: "",
        github:""
      }
      
    };
     this.handleKeyUpN = this.handleKeyUpN.bind(this);
     this.handleKeyUpJ = this.handleKeyUpJ.bind(this);
     
 }
 
  handleKeyUpN(event) {
    const cardO = this.state.card
     this.setState({ card: {...cardO, name: event.currentTarget.value} });
   }
  handleKeyUpJ(event) {
    const cardO = this.state.card
    this.setState({ card: {...cardO, job: event.currentTarget.value} }); 
  }

  render() {

    return (
         
     <Cards skills={skills} handleKeyUpN={this.handleKeyUpN} handleKeyUpJ={this.handleKeyUpJ} name={this.state.card.name} job={this.state.card.job}/>
     
    );
  }
}

export default App;
