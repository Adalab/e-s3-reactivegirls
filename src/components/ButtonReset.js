import React, { Component } from 'react';

class ButtonReset extends Component{
    render (){
        return(
            <div className="btn__bar">
                <button className="btn__reset" type="button">
                    <div className="ico__reset-img">
                        <i className="far fa-trash-alt"></i>
                    </div>
                    <div className="ico__reset-text">Reset</div>
                </button>
            </div>
        );
    }
}
export default ButtonReset;
