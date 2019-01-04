import React, { Component } from 'react';
import logo from './images/logo-card.svg';
import logoAdalab from './images/logo-adalab.png';
import './App.css';

class Home extends React.Component {
  render() {

    return (
      <div className="page" id="page">
        <div className="home__container">
          <div className="page__wrapper">
            <header className="home__logo">
            <img src={logo} className="App-logo" alt="logo" />
            </header>
            <main className="home__main">
              <h1 className="home__main--title">Crea tu tarjeta de visita</h1>

              <p className="home__main--text">Crea mejores contactos profesionales de forma fácil y cómoda</p>
              <ul className="home__options">
                <li className="home__options--item"> <i className="home__options--icon far fa-object-ungroup"></i>

                  <div className="home__options--text">Diseña</div>
                </li>
                <li className="home__options--item"> <i className="home__options--icon far fa-keyboard"></i>

                  <div className="home__options--text">Rellena</div>
                </li>
                <li className="home__options--item"> <i className="home__options--icon fas fa-share-alt"></i>

                  <div className="home__options--text">Comparte</div>
                </li>
              </ul> <a href="card_editor.html">
                <div className="home__link">Comenzar</div>
              </a>

            </main>
          </div>
        </div>
        <footer className="footer">
          <div className="footer__copyright">Awesome profile-cards @2018</div> <a href="https://adalab.es/">
            <div className="footer__logo">
            <img src={logoAdalab} className="footer__logo-img" alt="logo" />
            </div>
          </a>

        </footer>
      </div>
    );
  }
}

export default Home;