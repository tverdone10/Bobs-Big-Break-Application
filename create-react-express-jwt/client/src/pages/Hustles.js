import React from "react";
import "./Hustles.css";

const Hustles = ()=> {
    return(
        <div className="container">
      <i className="far fa-window-close fa-4x"></i>
      <h1 className="header">Hustles</h1>
      <p className="header-description">PURCHASE THESE BOOSTERS TO GIVE YOUR HUSTLE AN UPGRADE</p>
      <hr />
      
      <div className="box column">
          <img
            src="./img/BBB_hustles_spare_change.png"
            width="100px"
            alt=""
          />
          <div className="hustleinfo">
          <h1 className="hustletitle">CHANGE IS A’COMIN</h1>
          <p className="description">SPARE CHANGE PROFITS X2</p>
          <b className="hustlecost">$350</b>
          </div>
          <button className="button">
            BUY
          </button>
        </div>

        <div className="box column">
          <img
            src="./img/BBB_hustles_squeegee.png"
            width="100px"
            alt=""
          />
          <div className="hustleinfo">
          <h1 className="hustletitle">WIPE ME DOWN</h1>
          <p className="description">SQUEEGEE PROFITS X2</p>
          <b className="hustlecost">$800</b>
          </div>
          <button className="button">
            BUY
          </button>
        </div>

    </div>
    )
}

export default Hustles;