import React, { Component } from 'react';
import PropTypes from "prop-types";


class PContact extends Component {
    render() {
        const {email, phone,github,linkedin} = this.props;
        const toEmail = `mailto:${email}`
        const toPhone = `tel:${phone}`
        const toGithub = `https://www.linkedin.com/in/${github}`
        const toLinkedin = `https://github.com/${linkedin}`

        const hiddenClassE = (this.props.hiddenE === true) ? 'hidden' : 'NO-hidden';
        const hiddenClassP = (this.props.hiddenP === true) ? 'hidden' : 'NO-hidden';
        const hiddenClassL = (this.props.hiddenL === true) ? 'hidden' : 'NO-hidden';
        const hiddenClassG = (this.props.hiddenG === true) ? 'hidden' : 'NO-hidden';

        return (
            <div className="list__card-contact">
                <ul className="card__contact">
                    <li id="icon__phone" className={`contact-icons contact-icons__color${this.props.paletteValue} ${hiddenClassP}`} ref={this.props.contactIcons}>
                        <a href={toPhone}>
                            <i className="fas fa-mobile-alt"></i>
                        </a>
                    </li>
                    <li id="icon__email" className={`contact-icons contact-icons__color${this.props.paletteValue} ${hiddenClassE}`}>
                        <a href={toEmail}>
                            <i className="far fa-envelope"></i>
                        </a>
                    </li>
                    <li id="icon__linkedin" className={`contact-icons contact-icons__color${this.props.paletteValue} ${hiddenClassL}`}>
                        <a href={toLinkedin}>
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </li>
                    <li id="icon__github" className={`contact-icons contact-icons__color${this.props.paletteValue} ${hiddenClassG}`}>
                        <a href={toGithub}>
                            <i className="fab fa-github-alt"></i>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}


PContact.propTypes = {
    email: PropTypes.string,
    phone: PropTypes.string,
    github: PropTypes.string,
    linkedin: PropTypes.string,
    hiddenE: PropTypes.bool.isRequired,
    hiddenP: PropTypes.bool.isRequired,
    hiddenL: PropTypes.bool.isRequired,
    hiddenG: PropTypes.bool.isRequired,
    paletteValue: PropTypes.number
};

export default PContact;
