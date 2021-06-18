import './App.css';
import React from 'react';
import Search from './components/Search'
import Navbar from './components/Navbar/Navbar'


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
      
    </body>

  );

}

export default App;
