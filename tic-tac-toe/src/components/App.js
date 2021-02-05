import React, { Component } from 'react'
import Board from './Board';
import Header from './Header';
import Footer from './Footer';
import './App.css';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      clicked: false,
      currentPlayer: "X",
      gameStatus: "",
      clickedDiv: "",
      winningConditions: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ],
      gameOver: false,
      gameState: ["", "", "", "", "", "", "", "", ""] 
    }
  }
  componentDidUpdate(prevProps, prevState){
    console.log(prevProps + " --- " + prevState);
  }
  changePlayer = () => {
    if (this.state.currentPlayer === "X"){
      this.setState({
        currentPlayer: "O"
      })
    } 
    else {
      this.setState({
        currentPlayer: "X"
      })
    }
  }

  play = (e) => {
    console.log("Clicked");
    if (this.state.gameOver === false){
        const newState = [...this.state.gameState];
        newState[e.target.id] = this.state.currentPlayer;
        this.setState((state) => ({
          gameState: [...newState]
        }));
        console.log(newState);
        console.log(this.state.gameState);
        this.checkResult();
    }
  }
  message = (msg) =>{
    if (msg === "win") return "Player " + this.state.currentPlayer + " Wins!";
    else return "The Match resulted in a Draw!"
  }
  checkResult = () => {
    let roundWon = false;
    for (let i = 0; i < this.state.winningConditions.length; i++) {
      const condition = this.state.winningConditions[i];

      let a = this.state.gameState[condition[0]];
      let b = this.state.gameState[condition[1]];
      let c = this.state.gameState[condition[2]];

      if (a === "" || b === "" || c === "") {
        continue;
      }

      if (a === b && b === c) {
        roundWon = true;
        break;
      }
    }

    if (roundWon) {
      this.setState({
        gameStatus: this.message("win"),
        gameOver: true
      });
      return;
    }
    if (this.state.gameState.includes("") === false){
      console.log("Game is Over");
      this.setState({
        gameStatus: this.message("draw"),
        gameOver: true
      });
    }   
    this.changePlayer();
  }
  
  
  reset = () => {
    this.gameState = ["", "", "", "", "", "", "", "", ""];
    var cells = document.querySelectorAll(".cell");
    for (const cell of cells) {
        cell.innerText = "";
    }
    this.setState({
      gameStatus: ""
    });
  }
  render(){
    
    return (
      <div className="container">
      <Header currentPlayer={this.state.currentPlayer}  />
      <Board play={this.play} gameState={this.state.gameState} clickedDiv={this.state.clicked} currentPlayer={this.state.currentPlayer} />
      <Footer gameStatus={this.state.gameStatus}  reset={this.reset} />
      </div>
    )
  }
}

export default App;
