import React, { Component } from 'react';

class PContact extends Component {
    render() {
        const {email, phone,github,linkedin} = this.props;
        const toEmail = `mailto:${email}`
        const toPhone = `tel:${phone}`
        const toGithub = `https://www.linkedin.com/in/${github}`
        const toLinkedin = `https://github.com/${linkedin}`

        return (
            <div className="list__card-contact">
                <ul className="card__contact">
                    <li id="icon__phone" className="contact-icons contact-icons__color1 opacity">
                        <a href={toPhone}>
                            <i className="fas fa-mobile-alt"></i>
                        </a>
                    </li>
                    <li id="icon__email" className="contact-icons contact-icons__color1 opacity">
                        <a href={toEmail}>
                            <i className="far fa-envelope"></i>
                        </a>
                    </li>
                    <li id="icon__linkedin" className="contact-icons contact-icons__color1 opacity">
                        <a href={toLinkedin}>
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </li>
                    <li id="icon__github" className="contact-icons contact-icons__color1 opacity">
                        <a href={toGithub}>
                            <i className="fab fa-github-alt"></i>
                        </a>
                    </li>
                </ul>
            </div>
        );

    }
}
export default PContact;