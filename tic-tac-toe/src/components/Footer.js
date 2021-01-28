import React, { Component } from 'react'

export class Footer extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <h3 id="game-status">{this.props.gameStatus}</h3>
        <button onclick={this.props.reset}>RESET</button>
      </div>
    )
  }
}

export default Footer;
