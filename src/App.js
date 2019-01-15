import React, { Component } from 'react';
import './App.css';
import Cards from './Cards';

const skills=['HTML', 'CSS', 'Patata :|'];
const fr = new FileReader();

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
    this.fileInput = React.createRef();

    this.handleKeyUpN = this.handleKeyUpN.bind(this);
    this.handleKeyUpJ = this.handleKeyUpJ.bind(this);
    this.handleKeyUpE = this.handleKeyUpE.bind(this);
    this.fakeClick = this.fakeClick.bind(this);
    this.writeImage = this.writeImage.bind(this);
    this.handleChangeFile = this.handleChangeFile.bind(this);

     
 }
 
  //Name
  handleKeyUpN(event) {
    const cardO = this.state.card
    this.setState({ card: {...cardO, name: event.currentTarget.value} });
  }

  //Job
  handleKeyUpJ(event) {
    const cardO = this.state.card
    this.setState({ card: {...cardO, job: event.currentTarget.value} }); 
  }

  //Loading image
  fakeClick(){
    this.fileInput.current.click();
  }

  writeImage(){
    const url = fr.result;
    const cardO = this.state.card
    this.setState({
      card: {...cardO, img: url}
    });
  }

  handleChangeFile(event){
    const myFile = event.currentTarget.files[0];
    fr.addEventListener('load', this.writeImage);
    fr.readAsDataURL(myFile);
  }

  //Email
  handleKeyUpE(event) {
    const cardO = this.state.card
    this.setState({ card: {...cardO, email: event.currentTarget.value} });
  }

  render() {

    return (
         
     <Cards skills={skills} handleKeyUpN={this.handleKeyUpN} handleKeyUpJ={this.handleKeyUpJ} handleKeyUpE={this.handleKeyUpE} name={this.state.card.name} job={this.state.card.job} email={this.state.card.email} handleChangeFile={this.handleChangeFile} fakeClick={this.fakeClick} img={this.state.card.img} fileInput={this.fileInput}/>
     
    );
  }
}

export default App;
