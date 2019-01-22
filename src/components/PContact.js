import React, { Component } from 'react';

class PContact extends Component {
    render() {
        const {email, phone,github,linkedin} = this.props;
        const toEmail = `mailto:${email}`
        const toPhone = `tel:${phone}`
        const toGithub = `https://www.linkedin.com/in/${github}`
        const toLinkedin = `https://github.com/${linkedin}`

        const hiddenClass = (this.props.hidden === true) ? 'hidden' : 'NO-hidden';

        return (
            <div className="list__card-contact">
                <ul className="card__contact">
                    <li id="icon__phone" className={`contact-icons contact-icons__color${this.props.paletteValue} hidden`} ref={this.props.contactIcons}>
                        <a href={toPhone}>
                            <i className="fas fa-mobile-alt"></i>
                        </a>
                    </li>
                    <li id="icon__email" className={`contact-icons contact-icons__color${this.props.paletteValue} ${hiddenClass}`}>
                        <a href={toEmail}>
                            <i className="far fa-envelope"></i>
                        </a>
                    </li>
                    <li id="icon__linkedin" className={`contact-icons contact-icons__color${this.props.paletteValue} hidden`}>
                        <a href={toLinkedin}>
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </li>
                    <li id="icon__github" className={`contact-icons contact-icons__color${this.props.paletteValue} hidden`}>
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