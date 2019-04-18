import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Basket extends Component {
  render() {
    return (
      <div className="Basket">
        <header className="Basket">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          Hello this is your basket lmao
          </p>
          
        </header>
      </div>
    );
  }
}

export default Basket;


