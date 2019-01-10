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
            <label className="fill__label" for="fullName">Nombre completo
                <input className="block" id="fullName" type="text" value=""
                name="fullName" placeholder="Ej: Paquita Salas" />
            </label>
        </div>
        <div className="fill__title--form">
            <label className="fill__label" for="job">Puesto
                <input className="block" id="job" type="text" value="" name="job" placeholder="Ej: Front end Developer" />
            </label>
        </div>
        <div className="event__example"></div>
        <div className="fill__title--form btn__add-img">
            <label className="fill__label" for="btn__add-img">Imagen de Perfil
                <div className="fill__add-img">
                    <input className="block" id="btn__add-img" type="file" 
                    name="btn__add-img" />
                    <button className="btn__img--false" type="button">Añadir imagen</button>
                    <div className="square__img">
                        <img src="" className="square__img--content" />
                    </div>
                </div>
            </label>
        </div>
        <div className="form__contact-data">
            <div className="fill__title--form">
                <label className="fill__label" for="email">Email
                    <input className="block info__details" id="email" type="email" value=""
                    name="email" placeholder="Ej: psmanagement@gmail.com" />
                </label>
            </div>
            <div className="fill__title--form">
                <label className="fill__label" for="phone__number">Teléfono
                    <input className="block info__details" id="phone__number" type="tel"
                    value="" name="phone__number" placeholder="Ej: 666555666" />
                </label>
            </div>
            <div className="fill__title--form">
                <label className="fill__label" for="linkedin__net">Linkedin
                    <input className="block info__details" id="linkedin__net" type="url"
                    value="" name="linkedin__net" placeholder="Ej: linkedin.com/paquita" />
                </label>
            </div>
            <div className="fill__title--form">
                <label className="fill__label" for="gitHub__net">GitHub
                    <input className="block info__details" id="gitHub__net" type="text"
                    value="" name="gitHub__net" placeholder="Ej: @paquita-salas" />
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