import React, { Component } from 'react';

class Share extends Component {
    render (){
        return (
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
            <div className="share_btn--container">
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
        );
    }
}
export default Share;