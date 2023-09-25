import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './componentes/Card';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Exercicios React-redux</h1>
        <div className='linha'>
        <Card title="Card 1" red>
          Mostrando cores no card atraves de: 
        
            Card title="Card 2" blue
          Mostrando cores no card
        Card
        </Card>
        </div>
        <div className='linha'>
        <Card title="Card 2" green>
          Mostrando cores no card atraves de: 
        
            Card title="Card 3" greem
          Mostrando cores no card
        Card
        </Card>
        <Card title="Card 3" blue>
          Mostrando cores no card atraves de: 
        
            Card title="Card 3" blue
          Mostrando cores no card
        Card
        </Card>
        <Card title="Card 4" purple>
          Mostrando cores no card atraves de: 
        
            Card title="Card 4" purple
          Mostrando cores no card
        Card
        </Card>
        </div>
      </div>
    );
  }
}

export default App;
