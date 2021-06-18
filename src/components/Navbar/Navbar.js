import React, { Component } from 'react';
import { NavItem } from 'react-bootstrap';
import { MenuItems } from "./Menuitems";
import './Navbar.css';

class Navbar extends React.Component {

  state = { clicked: false }


  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Reperio</h1>
        <div className="menu-icon" onClick={this.handleClick}>
        <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}> </i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active': 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                {item.title}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }
}

export default Navbar