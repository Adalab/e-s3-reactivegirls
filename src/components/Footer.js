import React, { Component } from 'react';
import logoAdalab from './../images/logo-adalab.png';

class Footer extends Component {
    render () {
        return (
            <footer className="footer">
                <div className="footer__copyright">Awesome profile-cards @2018
                </div> 
                <a href="https://adalab.es/">
                    <div className="footer__logo">
                        <img src={logoAdalab} className="footer__logo-img" alt="logo" />
                    </div>
                </a>
            </footer>
        );
    }
}

export default Footer;