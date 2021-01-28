import React, { Component } from 'react'
import Row from './Row';
import './Board.css';
export class Board extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="board">
        <Row id1="0" id2="1" id3="2" gameState={this.props.gameState} currentPlayer={this.props.currentPlayer} clickedDiv={this.props.clickedDiv} play={this.props.play} />
        <Row id1="3" id2="4" id3="5" gameState={this.props.gameState} currentPlayer={this.props.currentPlayer} clickedDiv={this.props.clickedDiv} play={this.props.play} />
        <Row id1="6" id2="7" id3="8" gameState={this.props.gameState} currentPlayer={this.props.currentPlayer} clickedDiv={this.props.clickedDiv} play={this.props.play} />
      </div>
    )
  }
}

export default Board
