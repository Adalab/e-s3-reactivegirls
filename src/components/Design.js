import React, { Component } from 'react';
import PropTypes from "prop-types";


class Design extends Component {
    constructor(props){
        super(props);
        this.palette1 = React.createRef();
        this.palette2 = React.createRef();
        this.palette3 = React.createRef();
        this.typography1 = React.createRef();
        this.typography2 = React.createRef();
        this.typography3 = React.createRef();
    }

    componentDidMount(){
        this.colorChecked();
        this.typoChecked();
    }

    colorChecked(){
    
        const {colorSelected} = this.props;
        const palette1 = this.palette1.current;
        const palette2 = this.palette2.current;
        const palette3 = this.palette3.current;
  
        if(parseInt(palette1.defaultValue) === parseInt(colorSelected)){
            palette1.checked = true;
            console.log(palette1)
        }else if(palette2.defaultValue === colorSelected){
            palette2.checked=true;
            console.log(palette2)
        }else if(palette3.defaultValue === colorSelected){
            palette3.checked=true;
            console.log(palette3)
        }
    }
    
    typoChecked(){
        const {typoSelected} =this.props;
        console.log(typoSelected);
        const typography1= this.typography1.current;
        console.log(typography1);
        const typography2 = this.typography2.current;
        const typography3 = this.typography3.current;
        if(typography1.value === typoSelected){
            typography1.checked=true;
        }else if(typography2.value === typoSelected){
            typography2.checked=true;
        }else if(typography3.value === typoSelected){
            typography3.checked=true;
        }

    }
    

    render (){
      

        return(
            <fieldset className="form__design form__fieldset">
                <li className="bar__menu-card">
                    <div className="wrapper__bar-menu">
                        <div className="ico__bar"></div> 
                        <i className="card-main__icon far fa-keyboard"></i>
                        <div className="tex__ico-bar">Diseña</div>
                        <div className="ico__arrow-menu">
                            <i className="fas fa-chevron-down"></i>
                        </div>
                    </div>
                </li>
                <div className="container__radios">
                    <div className="radio__color">
                        <h4 className="radio__titles">Colores</h4>
                        <div className="container__radio-input">
                            <label htmlFor="palet__color-1" className="input__label">
                                <input id="palet__color-1" type="radio" value="1" name="optionscolor" defaultChecked
                                className="radio__button--color" ref={this.palette1} onChange={this.props.handleColourChange}/>
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
                            className="radio__button--color" ref={this.palette2} onChange={  this.props.handleColourChange}/>
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
                            className="radio__button--color" ref={this.palette3} onChange={  this.props.handleColourChange} />
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
                                name="optionsfont" ref={this.typography1} onChange={  this.props.handleTypoChange}/>
                                <div className="typo-1">Ubuntu</div>
                            </label>
                        </div>
                        <div className="container__radio-input">
                            <label htmlFor="radio__typo-2" className="input__label">
                                <input id="option__font-2" type="radio" className="typo__radio" value="2"
                                name="optionsfont" ref={this.typography2} defaultChecked onChange={this.props.handleTypoChange}/>
                                <div className="typo-2">Comic Sans</div>
                            </label>
                        </div>
                        <div className="container__radio-input">
                            <label htmlFor="radio__typo-3" className="input__label">
                                <input id="option__font-3" type="radio" className="typo__radio" value="3"
                                name="optionsfont" ref={this.typography3} onChange={this.props.handleTypoChange}/>
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

Design.propTypes = {
    colorSelected: PropTypes.number,
    typoSelected: PropTypes.number,
    handleColourChange: PropTypes.func,
    handleTypoChange: PropTypes.func
};
export default Design;