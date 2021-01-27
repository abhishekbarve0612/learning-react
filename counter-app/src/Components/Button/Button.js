import React, { Component } from 'react'
import "./Button.css";

class Button extends Component {
  constructor(props){
    super(props);
  }



  render() {
    return (
      <div>
        <button onClick={this.props.func}>{ this.props.buttonName }</button>
      </div>
    )
  }
}

export default Button
