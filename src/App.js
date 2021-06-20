import './App.css';
import React from 'react';
import Search from './components/Search'
import Navbar from './components/Navbar/Navbar'
import { Route, Link } from "react-router-dom"
import About from './About';
import Login from './Login';
import Donate from './Donate';
import Recipe from './Recipe';
import Home from './Home';

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
