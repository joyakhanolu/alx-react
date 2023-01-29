import React, { Fragment } from 'react';
import logo from '../assets/Holberton_logo.jpg';
import './Header.css';


function Header() {
  return(
    <Fragment>
      <div className="App-header">
        <img src={logo} alt="logo" />
        <h1>
          School dashboard
        </h1>
      </div>
    </Fragment>
  );
}

export default Header;
