import React, { Component } from 'react';

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
                name="fullName" placeholder="Ej: Paquita Salas"  onKeyUp={this.props.handleKeyUp} />
            </label>
        </div>
        <div className="fill__title--form">
            <label className="fill__label" htmlFor="job">Puesto
                <input className="block" id="job" type="text" name="job" placeholder="Ej: Front end Developer" value={this.props.job}  onKeyUp={this.props.handleKeyUp}/>
            </label>
        </div>
        <div className="event__example"></div>
        <div className="fill__title--form btn__add-img">
            <label className="fill__label" htmlFor="btn__add-img">Imagen de Perfil
                <div className="fill__add-img">
                    <input className="block" id="btn__add-img" type="file" 
                    name="btn__add-img" />
                    <button className="btn__img--false" type="button">Añadir imagen</button>
                    <div className="square__img">
                        <img src="" className="square__img--content" alt=""/>
                    </div>
                </div>
            </label>
        </div>
        <div className="form__contact-data">
            <div className="fill__title--form">
                <label className="fill__label" htmlFor="email">Email
                    <input className="block info__details" id="email" type="email" 
                    name="email" placeholder="Ej: psmanagement@gmail.com" value={this.props.email} onKeyUp={this.props.handleKeyUp}/>
                </label>
            </div>
            <div className="fill__title--form">
                <label className="fill__label" htmlFor="phone__number">Teléfono
                    <input className="block info__details" id="phone__number" type="tel"
                    name="phone__number" placeholder="Ej: 666555666" value={this.props.phone} onKeyUp={this.props.handleKeyUp}/>
                </label>
            </div>
            <div className="fill__title--form">
                <label className="fill__label" htmlFor="linkedin__net">Linkedin
                    <input className="block info__details" id="linkedin__net" type="url"
                    name="linkedin__net" placeholder="Ej: linkedin.com/paquita" value={this.props.linkedin}  onKeyUp={this.props.handleKeyUp}/>
                </label>
            </div>
            <div className="fill__title--form">
                <label className="fill__label" htmlFor="gitHub__net">GitHub
                    <input className="block info__details" id="gitHub__net" type="text"
                    name="gitHub__net" placeholder="Ej: @paquita-salas" value={this.props.github} onKeyUp={this.props.handleKeyUp}/>
                </label>
            </div>
            <div className="form__skills-datacheckbox">
                 <h4 className="fill__label title__skills">Habilidades (máximo 3)</h4>

            </div>
        </div>
      </div>
</fieldset>);
  };
};

export default Fill;