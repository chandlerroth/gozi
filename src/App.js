import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  generateBoard(gridSize) {
    let columns = [...Array(gridSize)].map((column, index) => <div key={index} className={`column column-${index}`}></div>);
    let grid = [...Array(gridSize)].map((row, index) => <div key={index} className={`row row-${index}`}>{columns}</div>);
    return grid;
  }

  render() {
    return (
      <div className="game">
        <div className="board">
          {this.generateBoard(19)}
        </div>
      </div>
    );
  }
}

export default App;
