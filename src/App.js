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
      card: {},
      skillsApi:[],
      opacity: true
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

    this.addSkillorNot = this.addSkillorNot.bind(this);

 }
 
  componentDidMount(){
    this.setState({
      card: this.getLastSearch()
    });
    this.getSkillsApi();
    
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
      photo: DefaultImage,
      linkedin: "",
      github:"",
      skills:[],
      palette: 1,
      typography: 2
    }
    return lastSearch;
  }

 
  //Name
  handleKeyUpN(event) {

    const {card} = this.state;
    const newCard = {...card, name: event.currentTarget.value};

    this.setState({ card: newCard });
    this.saveLastSearch(newCard);

  }

  //Job
  handleKeyUpJ(event) {
    const {card} = this.state;
    const newCard = {...card, job: event.currentTarget.value};

    this.setState({ card: newCard });
    this.saveLastSearch(newCard);
  }

  //Loading image
  fakeClick(){
    this.fileInput.current.click();
  }

  writeImage(){
    const url = fr.result;
    const {card} = this.state;
    const newCard = {...card, photo: url};
    this.setState({
      card: newCard
    });
    this.saveLastSearch(newCard);
  }

  handleChangeFile(event){
    const myFile = event.currentTarget.files[0];
    fr.addEventListener('load', this.writeImage);
    fr.readAsDataURL(myFile);
  }



  //Email
  handleKeyUpE(event) {
    const {card} = this.state;
    const newCard = {...card, email: event.currentTarget.value};

    this.setState({ card: newCard });
    this.saveLastSearch(newCard);
  }

  //Phone
  handleKeyUpP(event) {
    const {card} = this.state;
    const newCard = {...card, phone: event.currentTarget.value};

    this.setState({ card: newCard });
    this.saveLastSearch(newCard);
  }
  //GitHub
  handleKeyUpG(event) {
    const {card} = this.state;
    const newCard = {...card, github: event.currentTarget.value};

    this.setState({ card: newCard });
    this.saveLastSearch(newCard);
  }
  //Linkedin
  handleKeyUpL(event) {
    const {card} = this.state;
    const newCard = {...card, linkedin: event.currentTarget.value};

    this.setState({ card: newCard });
    this.saveLastSearch(newCard);
  }

  //Design
  handleColourChange(e) {
    const radioValue = parseInt(e.currentTarget.value);
    const {card} = this.state;
    const newCard = {...card, palette: radioValue};

    this.setState({ card: newCard });
    this.saveLastSearch(newCard);
  }

  handleTypoChange(e) {
    const radioValue = parseInt(e.currentTarget.value);
    const {card} = this.state;
    const newCard = {...card, typography: radioValue};

    this.setState({ card: newCard });
    this.saveLastSearch(newCard);
  }

  //Get skills from API(servicefolder)

  getSkillsApi(){
    fetchSkills()
    .then(data => {
      console.log(data.skills);
        this.setState({
          skillsApi: data.skills
        } );
     
      })
  }

   //Checking Only 3 Skills
   addSkillorNot(e){
    const {card} = this.state;
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
        }
      } 

      const newCard = {...card, skills: currentSkill};

      this.setState({
        card: newCard
      });
  }

  render() {
    
    return (
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/cards" render={
          () => <Cards 
                  addSkillorNot={this.addSkillorNot}
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
                  img={this.state.card.photo} 
                  fileInput={this.fileInput}

                  //Design
                  cardData = {this.cardData}
                  contactIcons ={this.contactIcons}

                  paletteValue={this.state.card.palette}
                  typoValue={this.state.card.typography}

                  handleColourChange={this.handleColourChange}
                  handleTypoChange={this.handleTypoChange}
                  />
                } />
      </Switch>

    );
  }
}

export default App;
