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
      card: this.getLastSearch(),
      skillsApi:[]
      
    };

    this.cardData = React.createRef();
    this.fileInput = React.createRef();
    this.contactIcons = React.createRef();
    

    this.handleKeyUpN = this.handleKeyUpN.bind(this);
    this.handleKeyUpJ = this.handleKeyUpJ.bind(this);
    this.handleKeyUpE = this.handleKeyUpE.bind(this);
    this.handleKeyUpP = this.handleKeyUpP.bind(this);
    this.handleKeyUpL = this.handleKeyUpL.bind(this);
    this.handleKeyUpG = this.handleKeyUpG.bind(this);
    

    this.fakeClick = this.fakeClick.bind(this);
    this.writeImage = this.writeImage.bind(this);
    this.handleChangeFile = this.handleChangeFile.bind(this);

    this.handleColourChange = this.handleColourChange.bind(this);
    this.handleTypoChange = this.handleTypoChange.bind(this);

 }
  //LocalStorage
  componentDidMount(){
    const value = this.state.cards;
    this.saveLastSearch(value);
  }

  saveLastSearch(value){
    localStorage.setItem('backup', JSON.stringify(value))
  }

  getLastSearch(){
    const lastSearch = (localStorage.getItem('backup') !== null) ? JSON.parse(localStorage.getItem('backup')) : {
      name: "Nombre y apellidos",
      job: "Front end developer",
      email: "",
      phone: "",
      img: DefaultImage,
      linkedin: "",
      github:"",
      skills:[],
      paletteValue: 1,
      typoValue: 2
    }
    console.log(lastSearch)
    return lastSearch;
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

  //Design

  handleColourChange(e) {
    const cardO = this.state.card
    const radioValue = parseInt(e.currentTarget.value);
    this.setState({ card: {...cardO, paletteValue: radioValue}});
  }

  handleTypoChange(e) {
    const cardO = this.state.card
    const radioValue = parseInt(e.currentTarget.value);
    this.setState({ card: {...cardO, typoValue: radioValue}});
  }

  //Get skills from API(servicefolder)

  getSkillsApi(){
    fetchSkills()
    .then(data => {
        this.setState({
          skillsApi: data.skills
        });
      })
  }


  render() {
    this.getSkillsApi();
   
    return (
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/cards" component={Cards} 
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
          
          //Image
          handleChangeFile={this.handleChangeFile} 
          fakeClick={this.fakeClick} 
          img={this.state.card.img} 
          fileInput={this.fileInput}

          //Design
          cardData = {this.cardData}
          contactIcons ={this.contactIcons}

          paletteValue={this.state.card.paletteValue}
          typoValue={this.state.card.typoValue}

          handleColourChange={this.handleColourChange}
          handleTypoChange={this.handleTypoChange}
          />
      </Switch>

    );
  }
}

export default App;
