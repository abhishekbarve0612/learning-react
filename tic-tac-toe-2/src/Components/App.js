import React, { Component, useEffect, useState } from 'react'
import Board from './Board';
import Header from './Header';
import Footer from './Footer';
import './App.css';

const App = () => {
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [gameState, setGameState] = useState(Array(9).fill(null));
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);

  const compute = (gameState) => {
    const winningConditions =  [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winningConditions.length; i++) {
      const [a, b, c] = winningConditions[i];
      if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]){
        setGameOver(true);
        setWinner(currentPlayer);
      }
    }
  }
  
  const reset = () => {
    setGameState(Array(9).fill(null));
    setGameOver(false);
    setWinner(null);
    setCurrentPlayer("X");
  }

  const play = (i) => {
    if (gameOver) return;
    const tempGameState = [...gameState];
    tempGameState[i] = currentPlayer;
    setGameState(tempGameState);
    compute(gameState);
    
  }

  useEffect(() => {
    if (currentPlayer == 'X'){
      setCurrentPlayer('O');
    } else {
      setCurrentPlayer('X');
    }
    compute(gameState);
    
  }, [gameState])

  return ( 
    <div className="container">
      <Header currentPlayer={currentPlayer}  />
      <Board gameState={gameState} play={play}  currentPlayer={currentPlayer} />
      <Footer winner={winner} reset={reset}  />
    </div>
   );
}
 
export default App;


