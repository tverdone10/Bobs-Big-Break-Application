import React from 'react';
import { Link } from "react-router-dom"

const Inventory = () => {
  return (
    <div className="container">
      <Link to="/profile">
      <i className="far fa-window-close fa-4x" style={{marginTop: '10px'}}></i>
      </Link>
      <h1 className="header">Inventory</h1>
      <hr />
      <img
        src="./img/BBB_character_body.png"
        width="350px"
        alt=""
        style={{display: 'block', margin: '0 auto'}}
      />
      <hr />
      <div className="columns">
        <div className="box column" style={{height: '100px', margin: '10px'}}>
          <img
            src="./img/BBB_items_hat.png"
            width="100px"
            alt=""
            style={{float: 'left'}}
          />
        </div>
        <div
          className="box column"
          style={{height: '100px', margin: '10px', position: 'relative'}}
        >
          <img
            src="./img/BBB_items_shades.png"
            width="100px"
            alt=""
            style={{float: 'left'}}
          />
        </div>
        <div className="box column" style={{height: '100px', margin: '10px'}}>
          <img
            src="./img/BBB_items_sweater.png"
            width="100px"
            alt=""
            style={{float: 'left'}}
          />
        </div>
        <div className="box column" style={{height: '100px', margin: '10px'}}>
          <img
            src="./img/BBB_items_headband.png"
            width="100px"
            alt=""
            style={{float: 'left'}}
          />
        </div>
        <div className="box column" style={{height: '100px', margin: '10px'}}>
          <img
            src="./img/BBB_items_chef.png"
            width="100px"
            alt=""
            style={{float: 'left'}}
          />
        </div>
        <div className="box column" style={{height: '100px', margin: '10px'}}>
          <img
            src="./img/BBB_items_stunners.png"
            width="100px"
            alt=""
            style={{float: 'left'}}
          />
        </div>
      </div>
    </div>
  );
};

export default Inventory;
