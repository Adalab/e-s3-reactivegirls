import React, { Component } from 'react';
import './App.css';
import Cards from './Cards';

const skills=['HTML', 'CSS', 'Patata :|'];

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      name: "Nombre y apellidos de KK",
      job: "Front end developer",
      email: "",
      phone: "",
      linkedin: "",
      github:""
    };
     this.handleKeyUp = this.handleKeyUp.bind(this);
 }

 handleKeyUp(event) {
     this.setState({ name: event.target.value });
     console.log(event.target.value);
   }

  render() {

    return (

      <div>
         
     <Cards skills={skills} handleKeyUp={this.handleKeyUp} name={this.state.name}/>
     <div>{this.state.name}</div>
     </div>
    );
  }
}

export default App;
