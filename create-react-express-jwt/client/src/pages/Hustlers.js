import React from 'react';

import {
  USE_HUSTLE,
  USE_PASSIVE_HUSTLE,
  INITIALIZE_PASSIVE_INTERVAL,
  BUY_HUSTLE,
  BUY_HUSTLER
} from "../actions";

import { useGlobalState } from "../useGlobalState";

import { HUSTLERS, HUSTLES } from "../hustlerConfig";

const Hustlers = () => {

  const { state, dispatch } = useGlobalState();

    return(
        <div className="container">
      <i className="far fa-window-close fa-4x" style={{marginTop: '10px'}}></i>
      <h1 className="header">Hustlers</h1>
      <hr />
      
      <div className="box column" style={{margin: '10px', overflow: "auto", width: '100%'}}>
          <img
            src="./img/BBB_hustlers_01.png"
            width="100px"
            alt=""
            style={{float: 'left'}}
          />
          <div className="hustleinfo">
          <h1 className="hustletitle">JEFF PASOS</h1>
          <p className="description">RUN SPARE CHANGE HUSTLE</p>
          <b className="hustlecost">$2000</b>
          </div>
          <button className="button"
          onClick={() => dispatch({ type: BUY_HUSTLER, hustler: "jeffPasos" })}>
            BUY
          </button>
        </div>

        <div className="box column" style={{margin: '10px', overflow: "auto", width: '100%'}}>
          <img
            src="./img/BBB_hustlers_02.png"
            width="100px"
            alt=""
            style={{float: 'left'}}
          />
          <div className="hustleinfo">
          <h1 className="hustletitle">RUSTY SHACKLEFORD</h1>
          <p className="description">RUN SQUEEGEE HUSTLE</p>
          <b className="hustlecost">$12000</b>
          </div>
          <button className="button"
          onClick={() => dispatch({ type: BUY_HUSTLER, hustler: "rustyShackleford" })}>
          >
            BUY
          </button>
        </div>
      
      
    </div>
    )
}

export default Hustlers;