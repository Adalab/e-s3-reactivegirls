import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Cards from './Cards';
import './App.css';
import DefaultImage from './images/lobo.jpg';
import {fetchSkills} from './services/GetSkills';
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
        img: DefaultImage,
        linkedin: "",
        github:"",
        skills:[]
      },
      skillsApi:[]
      
    };
    this.fileInput = React.createRef();

    this.handleKeyUpN = this.handleKeyUpN.bind(this);
    this.handleKeyUpJ = this.handleKeyUpJ.bind(this);
    this.handleKeyUpE = this.handleKeyUpE.bind(this);
    this.handleKeyUpP = this.handleKeyUpP.bind(this);
    this.handleKeyUpL = this.handleKeyUpL.bind(this);
    this.handleKeyUpG = this.handleKeyUpG.bind(this);

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

  //Phone
  handleKeyUpP(event) {
    const cardO = this.state.card
    this.setState({ card: {...cardO, phone: event.currentTarget.value} });
  }
  //GitHub
  handleKeyUpG(event) {
    const cardO = this.state.card
    this.setState({ card: {...cardO, github: event.currentTarget.value} });
  }
  //Linkedin
  handleKeyUpL(event) {
    const cardO = this.state.card
    this.setState({ card: {...cardO, linkedin: event.currentTarget.value} });
  }

  // getSkillsApi(){
  //   fetchSkills()
  //   .then(data => {
  //     console.log(data);
  //     this.setState({
  //       skillsApi: data.skills
  //     });
  //     })
  // }


  render() {
    // this.getSkillsApi();

    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cards" component={Cards} />
        </Switch>
        <Cards  
          handleKeyUpN={this.handleKeyUpN} 
          handleKeyUpJ={this.handleKeyUpJ} 
          handleKeyUpE={this.handleKeyUpE} 
          handleKeyUpP={this.handleKeyUpP} 
          handleKeyUpL={this.handleKeyUpL} 
          handleKeyUpG={this.handleKeyUpG} 

          name={this.state.card.name} 
          job={this.state.card.job} 
          email={this.state.card.email} 
          phone={this.state.card.phone} 
          linkedin={this.state.card.linkedin} 
          github={this.state.card.github}
          skills={this.state.card.skills}
          skillsApi={this.state.skillsApi}

          handleChangeFile={this.handleChangeFile} 
          fakeClick={this.fakeClick} 
          img={this.state.card.img} 
          fileInput={this.fileInput}
         />
      </React.Fragment>
     
    );
  }
}

export default App;
