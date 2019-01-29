import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Header extends Component {
    render () {
        return (
            <header className="card__header"> 
                <Link to="/">
                    <div className="editor__logo">
                        <h1 className="tittle__hiden">Crea tu tarjeta de visita</h1>
                    </div>
                </Link>
                <div className="logo__wild">
                </div>
            </header>
        );
    }
}

export default Header;
