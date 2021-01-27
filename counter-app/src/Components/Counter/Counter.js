import React, { Component } from 'react'
import './Counter.css';
import Button from './../Button/Button';


class Counter extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
  }
  
  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  }
  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  }
  render() {
    return (
      <div className="container">
        Current Count: {this.state.count}
        <div className="buttons">
        <Button buttonName="Increment" func={this.increment} />
        <Button buttonName="Decrement" func={this.decrement} />
        </div>
      </div>
    )
  }
}

export default Counter;
