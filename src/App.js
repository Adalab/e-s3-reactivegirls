import React, { Component } from 'react';
import './App.css';
import Cards from './Cards';
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

    this.startLocalStorage = this.startLocalStorage.bind(this);
    this.addSkillorNot = this.addSkillorNot.bind(this);

 }
  //LocalStorage
  startLocalStorage(){
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
    console.log(localStorage.getItem('backup'))
    return lastSearch;
  }

 
  //Name
  handleKeyUpN(event) {
    const cardO = this.state.card
    this.setState({ card: {...cardO, name: event.currentTarget.value} });
    this.startLocalStorage()
  }

  //Job
  handleKeyUpJ(event) {
    const cardO = this.state.card
    this.setState({ card: {...cardO, job: event.currentTarget.value} });
    this.startLocalStorage()
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
    this.startLocalStorage()
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
    this.startLocalStorage()
  }

  //Phone
  handleKeyUpP(event) {
    const cardO = this.state.card
    this.setState({ card: {...cardO, phone: event.currentTarget.value} });
    this.startLocalStorage()
  }
  //GitHub
  handleKeyUpG(event) {
    const cardO = this.state.card
    this.setState({ card: {...cardO, github: event.currentTarget.value} });
    this.startLocalStorage()
  }
  //Linkedin
  handleKeyUpL(event) {
    const cardO = this.state.card
    this.setState({ card: {...cardO, linkedin: event.currentTarget.value} });
    this.startLocalStorage();
  }

  //Design

  handleColourChange(e) {
    const cardO = this.state.card
    const radioValue = parseInt(e.currentTarget.value);
    this.setState({ card: {...cardO, paletteValue: radioValue}});
    this.startLocalStorage()
  }

  handleTypoChange(e) {
    const cardO = this.state.card
    const radioValue = parseInt(e.currentTarget.value);
    this.setState({ card: {...cardO, typoValue: radioValue}});
    this.startLocalStorage()
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

   //Checking Only 3 Skills
   addSkillorNot(e){
    const currentSkill = this.state.card.skills.slice(0);
    const check = e.currentTarget;
    const newSkill = e.currentTarget.value;
    const isChecked = check.checked;
   
      if(currentSkill.length < 3 && isChecked){
        currentSkill.push(newSkill);
        const newCard = {...this.state.card, skills: currentSkill}
        this.setState({
          card: newCard
        });
      } else {
        check.checked = false;
        if(currentSkill.indexOf(newSkill) > -1){
          currentSkill.splice(currentSkill.indexOf(newSkill), 1);
        } else {
          
        }
      } 
  }


  render() {
    this.getSkillsApi();

    return (
         
     <Cards  

     //user info
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
    
     addSkillorNot = {this.addSkillorNot}
     />


     
    );
  }
}

export default App;
