import React, { Component } from 'react';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';

class Collapsibles extends Component {
  render() {
    return (
      <form action="" method="get" className="container__form">
        <ul className="list__bar-menu">
          <Design />
          <Fill handleKeyUp={this.props.handleKeyUp} skills={this.props.skills} name={this.props.name}/>
          <Share />
        </ul>
      </form>    
    );
  }
}
export default Collapsibles;
