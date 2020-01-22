import React from 'react';
import {Link} from 'react-router-dom';
import {useAuth} from '../../utils/auth';

import './style.css';


function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-dark bank">
      <div className="container">
        <p>$143</p>
      </div>
    </nav>
  );
}

export default Navbar;
