import './App.css';
import React from 'react';
import Search from './components/Search'
import Navbar from './components/Navbar/Navbar'
import { Route, Link } from "react-router-dom"
import About from './About';
import Login from './Login';
import Donate from './Donate';

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
          <Search />
        </div>
      </div>
      <Route exact path="/AboutUs" component={About} />
      <Route exact path="/Donate" component={Donate} />
      <Route exact path="/Login" component={Login} />
      
    </body>

  );

}

export default App;
