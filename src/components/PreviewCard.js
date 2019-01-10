import React, { Component } from 'react';

class PreviewCard extends Component{
    render (){
        return(
            <div className="card__details">
                    <div className="card__data card-data__color1">
                        <div className="card__data-name typo-1">Nombres y Apellido</div>
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
        );
    }
}
export default PreviewCard;