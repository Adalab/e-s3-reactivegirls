import React, { Component } from 'react';
import logo from './images/logo-card.svg';
import logoAdalab from './images/logo-adalab.png';
import './App.css';

class Cards extends React.Component {
  render() {

    return (
    <div>
        <header className="card__header"> 
          <a href="index.html">
            <div className="editor__logo">
              <h1 className="tittle__hiden">Crea tu tarjeta de visita</h1>
            </div>
          </a>

          <div className="logo__wild"></div>
        </header>
        <main className="page__main">
            <div className="container__card-editor">
                <div className="btn__bar">
                    <button className="btn__reset" type="button">
                        <div className="ico__reset-img">
                        <i className="far fa-trash-alt"></i>
                        </div>
                        <div className="ico__reset-text">Reset</div>
                    </button>
                </div>
                <div className="card__details">
                    <div className="card__data card-data__color1">
                        <div className="card__data-name typo-1">Nombre y Apellido</div>
                        <div className="card__data-job typo-1">Front end Developer</div>
                    </div>
                    <div className="card__img"></div>
                    <div className="list__card-contact">
                        <ul className="card__contact">
                            <li id="icon__phone" className="contact-icons contact-icons__color1 opacity">
                            <i className="fas fa-mobile-alt"></i>
                            </li>
                            <li id="icon__email" className="contact-icons contact-icons__color1 opacity">
                            <i className="far fa-envelope"></i>
                            </li>
                            <li id="icon__linkedin" className="contact-icons contact-icons__color1 opacity">
                            <i className="fab fa-linkedin-in"></i>
                            </li>
                            <li id="icon__github" className="contact-icons contact-icons__color1 opacity">
                            <i className="fab fa-github-alt"></i>
                            </li>
                        </ul>
                    </div>
                    <div className="list__card-skills">
                        <ul className="card__skills">
                            <li className="card__skills-item card__skills-item__color1 opacity">html</li>
                            <li className="card__skills-item card__skills-item__color1 opacity">css</li>
                            <li className="card__skills-item card__skills-item__color1 opacity">gulp</li>
                        </ul>
                    </div>
                </div>
            </div>
            <form action="" method="get" className="container__form">
                <ul className="list__bar-menu">
                    <fieldset className="form__design form__fieldset">
                        <li className="bar__menu-card">
                            <div className="wrapper__bar-menu">
                                <div className="ico__bar"></div> 
                                <i className="card-main__icon far fa-keyboard"></i>
                                <div className="tex__ico-bar">Diseña</div>
                                <div className="ico__arrow-menu">
                                <i className="fas fa-chevron-down"></i>
                                </div>
                            </div>
                        </li>
                        <div className="container__radios hidden">
                            <div className="radio__color">
                                 <h4 className="radio__titles">Colores</h4>

                                <div className="container__radio-input">
                                    <label for="palet__color-1" className="input__label">
                                        <input id="palet__color-1" type="radio" value="1" name="optionscolor"
                                        className="radio__button--color" checked />
                                        <div className="palet__color-squares">
                                            <div className="color color-1"></div>
                                            <div className="color color-2"></div>
                                            <div className="color color-3"></div>
                                        </div>
                                    </label>
                                </div>
                                <div className="container__radio-input">
                                    <label for="palet__color-2" className="input__label">
                                        <input id="palet__color-2" type="radio" value="2" name="optionscolor"
                                        className="radio__button--color" />
                                        <div className="palet__color-squares">
                                            <div className="color color-4"></div>
                                            <div className="color color-5"></div>
                                            <div className="color color-6"></div>
                                        </div>
                                    </label>
                                </div>
                                <div className="container__radio-input">
                                    <label for="palet__color-3" className="input__label">
                                        <input id="palet__color-3" type="radio" value="3" name="optionscolor"
                                        className="radio__button--color" />
                                        <div className="palet__color-squares">
                                            <div className="color color-7"></div>
                                            <div className="color color-8"></div>
                                            <div className="color color-9"></div>
                                        </div>
                                    </label>
                                </div>
                                <div className="radio__typo">
                                     <h4 className="radio__titles">Fuentes</h4>

                                    <div className="container__radio-input">
                                        <label for="option__font-1" className="input__label">
                                            <input id="option__font-1" type="radio" className="typo__radio" value="1"
                                            name="optionsfont" checked />
                                            <div className="typo-1">Ubuntu</div>
                                        </label>
                                    </div>
                                    <div className="container__radio-input">
                                        <label for="radio__typo-2" className="input__label">
                                            <input id="option__font-2" type="radio" className="typo__radio" value="2"
                                            name="optionsfont" />
                                            <div className="typo-2">Comic Sans</div>
                                        </label>
                                    </div>
                                    <div className="container__radio-input">
                                        <label for="radio__typo-3" className="input__label">
                                            <input id="option__font-3" type="radio" className="typo__radio" value="3"
                                            name="optionsfont"/>
                                            <div className="typo-3">Montserrat</div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className="form__personal-data form__fieldset">
                        <li className="bar__menu-card">
                            <div className="wrapper__bar-menu">
                                <div className="ico__bar"></div> <i className="card-main__icon far fa-object-ungroup"></i>

                                <div className="tex__ico-bar">Rellena</div>
                                <div className="ico__arrow-menu"><i className="fas fa-chevron-down"></i>

                                </div>
                            </div>
                        </li>
                        <div className="container__fill hidden">
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
                    </fieldset>
                    <fieldset className="form__share form__fieldset">
                        <li className="bar__menu-card">
                            <div className="wrapper__bar-menu">
                                <div className="ico__bar"></div> 
                                <i className="fas fa-share-alt card-main__icon"></i>
                                <div className="tex__ico-bar">Comparte</div>
                                <div className="ico__arrow-menu"><i className="fas fa-chevron-down"></i>
                                </div>
                            </div>
                        </li>
                        <div className="share_btn--container hidden">
                            <button className="btn__create-card" type="button"><i className="far fa-id-card share__icon"></i>Crea tarjeta</button>
                            <div className="twitter__hidden share__twitter">
                                <div className="share__title">La tarjeta ha sido creada:</div> 
                                <a className="twitter-share-button" href=""
                                target="_blank">
                                <i className="fab fa-twitter"></i>
                                <span className="twitter__text">
                                Compartir en Twitter</span>
                                </a>
                            </div>
                        </div>
                    </fieldset>
                </ul>
            </form>
        </main>
        <footer className="footer">
            <div className="footer__copyright">Awesome profile-cards @2018</div> <a href="https://adalab.es/">
              <div className="footer__logo"></div>
            </a>
        </footer>
    </div>

    );
  }
}

export default Cards;