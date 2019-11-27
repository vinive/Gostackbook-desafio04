import React, { Component } from 'react';

import logo from '../assets/gostack.png';

function Header() {
  return (
    <header>
    <nav>
      <img src={logo} />
      <div>
        <a href="#">Meu Perfil</a>
        <i className="material-icons">account_circle</i>
      </div>
    </nav>
    </header>
  );
} 

export default Header;