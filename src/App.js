import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Intervalo from './components/intervalo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Exercicios React-redux</h1>
        <div className='linha'>
        <Intervalo></Intervalo>
        <Card title="Card 2" green>
          Mostrando cores no card
        </Card>
        </div>
        <div className='linha'>
        <Card title="Card 3" blue>
          Mostrando cores no card
        </Card>
        <Card title="Card 4" purple>
          Mostrando cores no card
        </Card>
        </div>
      </div>
    );
  }
}

export default App;
