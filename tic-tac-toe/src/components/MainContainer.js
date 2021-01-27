import React, { Component } from 'react'
import Cell from './Cell';
import './MainContainer.css';
export class MainContainer extends Component {
  render() {
    return (
      <div className="game-container">
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />

      </div>
    )
  }
}

export default MainContainer
