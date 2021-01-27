import React, { Component } from 'react'
import MainContainer from './MainContainer';
import Header from './Header';
import Footer from './Footer';
import './App.css';


class App extends Component{
  render(){
    return (
      <>
      <Header />
      <MainContainer />
      <Footer />
      </>
    )
  }
}

export default App;
