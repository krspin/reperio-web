import React from 'react';
import { Route, Link } from "react-router-dom";

import Search from './components/Search';
import Navbar from './components/Navbar/Navbar';
import About from './containers/About';
import Login from './containers/Login';
import Donate from './containers/Donate';
import Recipe from './containers/Recipe';
import Home from './containers/Home';

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
      <Route exact path="/" component={Home} />
      <Route exact path="/Home" component={Home} />
      <Route exact path="/RecipeLookup" component={Recipe} />
      <Route exact path="/AboutUs" component={About} />
      <Route exact path="/Donate" component={Donate} />
      <Route exact path="/Login" component={Login} />
    </body>
  );
}

export default App;
