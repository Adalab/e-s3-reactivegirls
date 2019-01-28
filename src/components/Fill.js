import React, { Component } from 'react';
import PropTypes from "prop-types";


class Fill extends Component {
    

  render() {

    return(<fieldset className="form__personal-data form__fieldset">
    <li className="bar__menu-card">
        <div className="wrapper__bar-menu">
            <div className="ico__bar"></div> <i className="card-main__icon far fa-object-ungroup"></i>

            <div className="tex__ico-bar">Rellena</div>
            <div className="ico__arrow-menu"><i className="fas fa-chevron-down"></i>

            </div>
        </div>
    </li>
    <div className="container__fill">
        <div className="fill__title--form fill__full-name">
            <label className="fill__label" htmlFor="fullName">Nombre completo
                <input className="block" id="fullName" type="text" 
                name="fullName" placeholder="Ej: Paquita Salas"  onKeyUp={this.props.handleKeyUpN} defaultValue={this.props.name}/>
            </label>
        </div>
        <div className="fill__title--form">
            <label className="fill__label" htmlFor="job">Puesto
                <input className="block" id="job" type="text" name="job" placeholder="Ej: Front end Developer" defaultValue={this.props.job} onKeyUp={this.props.handleKeyUpJ}/>
            </label>
        </div>
        <div className="event__example"></div>
        <div className="fill__title--form btn__add-img">
            <label className="fill__label" htmlFor="btn__add-img">Imagen de Perfil
                <div className="fill__add-img">
                    <input className="block" id="btn__add-img" type="file" 
                    name="btn__add-img" ref={this.props.fileInput} onChange={this.props.handleChangeFile}/>
                    <button className="btn__img--false" type="button" onClick={this.props.fakeClick}>Añadir imagen</button>
                    <div className="square__img" style={{backgroundImage: `url(${this.props.img})`}}>
                    </div>
                </div>
            </label>
        </div>
        <div className="form__contact-data">
            <div className="fill__title--form">
                <label className="fill__label" htmlFor="email">Email
                    <input className="block info__details" id="email" type="email" 
                    name="email" placeholder="Ej: psmanagement@gmail.com" defaultValue={this.props.email} onKeyUp={this.props.handleKeyUpE}/>
                </label>
            </div>
            <div className="fill__title--form">
                <label className="fill__label"htmlFor="phone__number">Teléfono
                    <input className="block info__details" id="phone__number" type="tel"
                    name="phone__number" placeholder="Ej: 666555666" defaultValue={this.props.phone} onKeyUp={this.props.handleKeyUpP}/>
                </label>
            </div>
            <div className="fill__title--form">
                <label className="fill__label" htmlFor="linkedin__net">Linkedin
                    <input className="block info__details" id="linkedin__net" type="url"
                    name="linkedin__net" placeholder="Ej: linkedin.com/paquita" defaultValue={this.props.linkedin}  onKeyUp={this.props.handleKeyUpL}/>
                </label>
            </div>
            <div className="fill__title--form">
                <label className="fill__label" htmlFor="gitHub__net">GitHub
                    <input className="block info__details" id="gitHub__net" type="text"
                    name="gitHub__net" placeholder="Ej: @paquita-salas" defaultValue={this.props.github} onKeyUp={this.props.handleKeyUpG}/>
                </label>
            </div>
            <div className="form__skills-datacheckbox">
                 <h4 className="fill__label title__skills">Habilidades (máximo 3)</h4>
                 <div className="form__skills">
                 {this.props.skillsApi.map((item, index)=>{
                      const idName=`skills-data-${item}`;
                     return(
                        <label htmlFor={idName} key={index}>
                        <input onClick={this.props.addSkillorNot}
                            id={idName} 
                            className="skills__checkbox" 
                            type="checkbox" 
                            defaultValue={item} 
                            name={item}/>
                            {item}
                        </label>
                     );    
                })}
                   
                </div>

            </div>
        </div>
      </div>
</fieldset>);
  };
};

Fill.propTypes = {
    name: PropTypes.string,
    job: PropTypes.string,
    img: PropTypes.string,
    skillsApi: PropTypes.array,
    email: PropTypes.string,
    phone: PropTypes.string,
    github: PropTypes.string,
    linkedin: PropTypes.string,
    handleKeyUpN: PropTypes.func,
    handleKeyUpJ: PropTypes.func,
    fileInput: PropTypes.object,
    handleChangeFile: PropTypes.func,
    fakeClick: PropTypes.func,
    handleKeyUpE: PropTypes.func,
    handleKeyUpP: PropTypes.func,
    handleKeyUpL: PropTypes.func,
    handleKeyUpG: PropTypes.func,
    addSkillorNot: PropTypes.func
      };

export default Fill;