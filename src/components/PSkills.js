import React, { Component } from 'react';


class PSkills extends Component {

    constructor(props){
        super(props);

        this.paintSkill = this.paintSkill.bind(this);
        this.visibility = this.visibility.bind(this);
    }

    visibility(){
        const hiddenClass = (this.props.hiddenS === true) ? 'hidden' : 'NO-hidden';
        return hiddenClass;
    }

    paintSkill(){
        const skillsItem = this.props.skills.map((item, index) =>{
            return(<li key={index} className={`card__skills-item card__skills-item__color${this.props.paletteValue} ${this.visibility()}`}>{item}</li>);
        })
        return skillsItem
    }
    
    render(){
        let skillsList = (typeof this.props.skills !== 'undefined')? this.paintSkill() : '';

        return(
            <div className="list__card-skills">
                        <ul className="card__skills">
                            {skillsList}
                        </ul>
                    </div>
            
        );

    }
}
export default PSkills;