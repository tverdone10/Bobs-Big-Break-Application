import React from 'react';
import {Link} from 'react-router-dom';
import {useAuth} from '../../utils/auth';

import {useGlobalState} from '../../useGlobalState';
import './style.css';

function Navbar() {
  const {state, dispatch} = useGlobalState();
  return (
    <nav className="navbar navbar-expand navbar-dark bank">
      <div className="container">
        <img src="./img/coin.png" alt="" width="50px" />
        <p>${state.disposableCoins}</p>
      </div>
    </nav>
  );
}

export default Navbar;
