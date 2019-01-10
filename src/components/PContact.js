import React, { Component } from 'react';

class PContact extends Component {
    render(){
        return(
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
        );

    }
}
export default PContact;