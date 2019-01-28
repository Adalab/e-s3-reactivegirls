import React, { Component } from 'react';
import PropTypes from "prop-types";

import { cardSend } from './../services/CardService';

class Share extends Component {
    constructor(props) {
        super(props);
        this.state = {
            twitter: 'twitter',
            linkTwitter: '',
            linkCard: '',
            hiddenT:true
        }
        this.handleShare = this.handleShare.bind(this);
    };

    handleShare() {
        cardSend(this.props.card)
            .then(url => {
                this.setState({
                    linkCard: url.cardURL,
                    linkTwitter: `https://twitter.com/intent/tweet?text=Esta%20es%20mi%20tarjeta%3A&hashtags=adalab%20${url.cardURL}`
                })
                this.twitterNotHidden();
            });
    }

    twitterNotHidden(){
        if(this.state.linkCard !== ''){
            this.setState({
                hiddenT: false
            });
        }
    }

    render() {
        const hiddenClassT = (this.state.hiddenT ===true) ?'twitter__hidden': 'NO-hidden';

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
                    <button className="btn__create-card" type="button" onClick={this.handleShare}><i className="far fa-id-card share__icon"></i>Crea tarjeta</button>
                    <div className={`${hiddenClassT} share__twitter`}>
                        <div className="share__title">La tarjeta ha sido creada:</div>
                        <a className="twitter-share-button" href={this.state.linkTwitter}
                            target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                            <span className="twitter__text">
                                Compartir en Twitter</span>
                        </a>
                    </div >
                    <div className="twitter__card--url">
                        <a href={this.state.linkCard}>{this.state.linkCard}</a>
                    </div>
                </div>
            </fieldset>
        );
    }
}

Share.propTypes = {
   
    card: PropTypes.object,  
      };

export default Share;