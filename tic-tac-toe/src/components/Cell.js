import React, { Component } from 'react'
import './Cell.css';
 class Cell extends Component {
   constructor(props){
     super(props);
     this.clicked = "";
     this.state = {
       clicked: this.clicked
     }
     this.id = this.props.id;
   }
   checkdiv = () => {
     if (this.props.clickedDiv === this.props.id){
      this.setState({
        clicked: this.props.currentPlayer
      });
   }
  }
  render() {
    return (
      <div className="cell" id={this.props.id} onClick={this.props.play} >
        {this.props.gameState[this.props.id] }
      </div>
    )
  }
}

export default Cell;