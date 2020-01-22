import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

const NavButtons = () => {
  return (
    <div className="navbuttons">
      <Link to="/hustles">
        <button className="button is-large nav">Hustles</button>
      </Link>
      <Link to="/hustlers">
        <button className="button is-large nav">Hustlers</button>
      </Link>
      {/* <Link to="/shop"> */}
        <button className="button is-large nav">Shop</button>
      {/* </Link> */}
      <button className="button is-large nav">Stats</button>
    </div>
  );
};

export default NavButtons;
