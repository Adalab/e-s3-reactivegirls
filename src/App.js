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
    this.formReference = React.createRef();
    this.state = {
      card: {},
      skillsApi:[],
      hiddenE: true,
      hiddenP: true,
      hiddenS: true,
      hiddenG: true,
      hiddenL: true,
      hiddenDesign: true,
      hiddenFill: true,
      hiddenShare: true
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
    this.resetButton=this.resetButton.bind(this);

    this.handleDesignCollapsibles = this.handleDesignCollapsibles.bind(this);
    this.handleShareCollapsibles = this.handleShareCollapsibles.bind(this);
    this.handleFillCollapsibles = this.handleFillCollapsibles.bind(this);

 }
 
  componentDidMount(){
    this.setState({
      card: this.getLastSearch()
    });
    this.getSkillsApi();
    
  }

  resetButton(){
    const resetCard= {
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
   this.setState({
     card: resetCard,
     hiddenE: true,
      hiddenP: true,
      hiddenS: true,
      hiddenG: true,
      hiddenL: true
      
   });
   this.formReference.current.reset();
   const resetStorage = {
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
   };
   localStorage.setItem('backup', JSON.stringify(resetStorage));
  
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
    const hiddenStatus = (event.currentTarget.value === null)? true :
    false;
  
    this.setState({ 
      card: newCard, 
      hiddenE: hiddenStatus });
    this.saveLastSearch(newCard);
  }

  //Phone
  handleKeyUpP(event) {
    const {card} = this.state;
    const newCard = {...card, phone: event.currentTarget.value};
    const hiddenStatus = (event.currentTarget.value === null)? true :
    false;

    this.setState({ card: newCard,
    hiddenP: hiddenStatus  });
    this.saveLastSearch(newCard);
  }
  //GitHub
  handleKeyUpG(event) {
    const {card} = this.state;
    const newCard = {...card, github: event.currentTarget.value};
    const hiddenStatus = (event.currentTarget.value === null)? true :
    false;

    this.setState({ card: newCard,
    hiddenG: hiddenStatus });
    this.saveLastSearch(newCard);
  }
  //Linkedin
  handleKeyUpL(event) {
    const {card} = this.state;
    const newCard = {...card, linkedin: event.currentTarget.value};
    const hiddenStatus = (event.currentTarget.value === null)? true :
    false;

    this.setState({ card: newCard,
    hiddenL: hiddenStatus });
    this.saveLastSearch(newCard);
  }

  //Design
  handleColourChange(e) {
    const radioValue = parseInt(e.currentTarget.value);
    const {card} = this.state;
    const newCard = {...card, palette: radioValue, colorSelected:radioValue};

    this.setState({ card: newCard });
    this.saveLastSearch(newCard);
  }

  handleTypoChange(e) {
    const radioValue = parseInt(e.currentTarget.value);
    const {card} = this.state;
    const newCard = {...card, typography: radioValue, typoSelected: radioValue};

    this.setState({ card: newCard });
    this.saveLastSearch(newCard);
  }

  //Get skills from API(servicefolder)

  getSkillsApi(){
    fetchSkills()
    .then(data => {
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
    const hiddenStatus = (newSkill === null)? true :
    false;
   
      if(currentSkill.length < 3 && isChecked){
        currentSkill.push(newSkill);
        const newCard = {...this.state.card, skills: currentSkill}
        this.setState({
          card: newCard,
          hiddenS: hiddenStatus
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


  handleDesignCollapsibles() {
    const hiddenStatus = (this.state.hiddenDesign === true)? false :
    true;

    this.setState({
    hiddenDesign: hiddenStatus });
  }

  handleFillCollapsibles() {
    const hiddenStatus = (this.state.hiddenFill === true)? false :
    true;

    this.setState({
    hiddenFill: hiddenStatus });
  }

  handleShareCollapsibles() {
    const hiddenStatus = (this.state.hiddenShare === true)? false :
    true;

    this.setState({
    hiddenShare: hiddenStatus });
  }
  
  

  render() {
   
    return (
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/cards" render={
          () => <Cards 
                  formReference={this.formReference} 
                  handleCollapsibles={this.handleDesignCollapsibles}
                  hiddenDesign={this.state.hiddenDesign}
                  hiddenFill={this.state.hiddenFill}
                  hiddenShare={this.state.hiddenShare}
                  handleFillCollapsibles = {this.handleFillCollapsibles}
                  handleShareCollapsibles = {this.handleShareCollapsibles}
                  card = {this.state.card}
                  reset ={this.resetButton}
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

                  colorSelected={this.state.card.colorSelected}
                  typoSelected={this.state.card.typoSelected}
                  paletteValue={this.state.card.palette}
                  typoValue={this.state.card.typography}
                  hiddenE={this.state.hiddenE}
                  hiddenP={this.state.hiddenP}
                  hiddenS={this.state.hiddenS}
                  hiddenL={this.state.hiddenL}
                  hiddenG={this.state.hiddenG}

                  handleColourChange={this.handleColourChange}
                  handleTypoChange={this.handleTypoChange}
                  />
                } />
      </Switch>

    );
  }
}

export default App;
