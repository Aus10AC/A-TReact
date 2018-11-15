import React from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="header" role="banner">
      <h1>Header</h1>
        <nav role="navigation">
          <button onclick="myFunction()">Contact us</button>
        </nav>
      </header>
    )
  }
};

export default Header;
