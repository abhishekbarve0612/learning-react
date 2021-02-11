import React, { Component } from 'react'
import './Footer.css';

const Footer = ({winner, reset}) => {
  return ( 
      <div>
        {winner && <h3 id="game-status">{winner} Won! </h3>}
        
        <button onClick={reset} >RESET</button>
      </div>
   );
}
 
export default Footer;
