import React, { Component } from 'react';


class Design extends Component {

    visibility(){
        const hiddenClass = (this.props.hiddenDesign === true) ? 'hidden' : 'NO-hidden';
        return hiddenClass;
    }

    render (){

        return(
            <fieldset className="form__design form__fieldset">
                <li className="bar__menu-card" onClick={this.props.handleCollapsibles}>
                    <div className="wrapper__bar-menu">
                        <div className="ico__bar"></div> 
                        <i className="card-main__icon far fa-keyboard"></i>
                        <div className="tex__ico-bar">Diseña</div>
                        <div className="ico__arrow-menu">
                            <i className="fas fa-chevron-down"></i>
                        </div>
                    </div>
                </li>
                <div className={`container__radios ${this.visibility()}`} ref={this.props.designCollapsible}>
                    <div className="radio__color">
                        <h4 className="radio__titles">Colores</h4>
                        <div className="container__radio-input">
                            <label htmlFor="palet__color-1" className="input__label">
                                <input id="palet__color-1" type="radio" value="1" name="optionscolor"
                                className="radio__button--color" defaultChecked={(this.props.paletteValue === 1) ? true : false} onChange={  this.props.handleColourChange}/>
                                <div className="palet__color-squares">
                                    <div className="color color-1"></div>
                                    <div className="color color-2"></div>
                                    <div className="color color-3"></div>
                                </div>
                            </label>
                        </div>
                    <div className="container__radio-input">
                        <label htmlFor="palet__color-2" className="input__label">
                            <input id="palet__color-2" type="radio" value="2" name="optionscolor"
                            className="radio__button--color" defaultChecked={(this.props.paletteValue === 2) ? true : false}onChange={  this.props.handleColourChange}/>
                            <div className="palet__color-squares">
                                <div className="color color-4"></div>
                                <div className="color color-5"></div>
                                <div className="color color-6"></div>
                            </div>
                        </label>
                    </div>
                    <div className="container__radio-input">
                        <label htmlFor="palet__color-3" className="input__label">
                            <input id="palet__color-3" type="radio" value="3" name="optionscolor"
                            className="radio__button--color" defaultChecked={(this.props.paletteValue === 3) ? true : false}onChange={  this.props.handleColourChange} />
                            <div className="palet__color-squares">
                                <div className="color color-7"></div>
                                <div className="color color-8"></div>
                                <div className="color color-9"></div>
                            </div>
                        </label>
                    </div>
                    <div className="radio__typo">
                         <h4 className="radio__titles">Fuentes</h4>

                        <div className="container__radio-input">
                            <label htmlFor="option__font-1" className="input__label">
                                <input id="option__font-1" type="radio" className="typo__radio" value="1"
                                name="optionsfont" defaultChecked onChange={  this.props.handleTypoChange}/>
                                <div className="typo-1">Ubuntu</div>
                            </label>
                        </div>
                        <div className="container__radio-input">
                            <label htmlFor="radio__typo-2" className="input__label">
                                <input id="option__font-2" type="radio" className="typo__radio" value="2"
                                name="optionsfont" onChange={this.props.handleTypoChange}/>
                                <div className="typo-2">Comic Sans</div>
                            </label>
                        </div>
                        <div className="container__radio-input">
                            <label htmlFor="radio__typo-3" className="input__label">
                                <input id="option__font-3" type="radio" className="typo__radio" value="3"
                                name="optionsfont" onChange={this.props.handleTypoChange}/>
                                <div className="typo-3">Montserrat</div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </fieldset>
        );
    }
}



export default Design;