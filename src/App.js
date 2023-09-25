import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Intervalo from './components/intervalo'
import Media from './components/Media';
import Soma from './components/Soma';
import Sorteio from './components/Sorteio';



class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Exercicios React-redux</h1>
        <div className='linha'>
        <Intervalo></Intervalo>
        </div>

        <div className='linha'>
        <Soma></Soma>
        <Media></Media>
        <Sorteio></Sorteio>

        </div>
        
      
      </div>
    );
  }
}

export default App;
