import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Basket from './Basket';
import {BrowserRouter, Route, Link} from 'react-router-dom';

const Basket = () => <h2>Basket</h2>

const App = () => {
    return (
      <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1>
          Camille Auclair
          </h1>
          <p>Textile designer & maker. // Basied in Oaxaca, Mexico // Available for custom orders.</p>
        </header>
        <body>
         <Route path ='/Basket' Component = {Basket} /> View your cart
        </body>
      </div>
      </BrowserRouter>
    );
  }

export default App;

