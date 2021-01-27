import React, { Component } from 'react'
import './Cell.css';
 class Cell extends Component {
   handleClick = (e) => {
    
   };
  render() {
    return (
      <div className="cell" onClick={this.handleClick} >
      </div>
    )
  }
}

export default Cell;