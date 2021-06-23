import React from 'react';
import { Route, Link } from "react-router-dom";

import Search from './components/Search';
import Navbar from './components/Navbar/Navbar';
import About from './containers/About';
import Login from './containers/Login';
import Donate from './containers/Donate';
import Recipe from './containers/Recipe';
import Home from './containers/Home';
import Routes from './Routes';

import './App.css';

function App() {
  return (
    <body>
      <div style={{
        backgroundColor: 'green',
      }}>
        <Navbar />
        <div style={{
          backgroundColor: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        </div>
      </div>
      <Routes />
    </body>
  );
}

export default App;
