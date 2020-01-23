import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

import {
  USE_HUSTLE,
  USE_PASSIVE_HUSTLE,
  INITIALIZE_PASSIVE_INTERVAL,
  BUY_HUSTLE,
  BUY_HUSTLER,
} from '../actions';

import {useGlobalState} from '../useGlobalState';

import {HUSTLERS, HUSTLES} from '../hustlerConfig';

const Hustlers = () => {
  const {state, dispatch} = useGlobalState();
  const [clicked, setClicked] = useState({isClicked: false}) 

  function buyJeff(){


    dispatch({type: BUY_HUSTLER, hustler: 'rustyShackleford'})    

    setClicked({isClicked: true})  
    dispatch({type: BUY_HUSTLER, hustler: 'rustyShackleford'})    

    let newDisposableCoins = 0;
    console.log("hello");
  //   for (let hustlerType of Object.keys(HUSTLERS)) {
  //     if (state.hustlers[hustlerType]) {
  //       newDisposableCoins += HUSTLERS[hustlerType].rate;
  //     }
  //   }
  //   ...state,
  //   disposableCoins: state.disposableCoins + newDisposableCoins
  // });



  }

  // if clicked(isClicked: true){

  //   dispatch({type: BUY_HUSTLER, hustler: 'rustyShackleford'})    

  // }

  function buyRusty(){


    dispatch({type: BUY_HUSTLER, hustler: 'jeffPasos'})    
    setClicked({isClicked: true})  
  }

  return (
    <div className="container">
      <Navbar style={{position: 'absolute'}} />
      <Link to="/profile">
        <i
          className="far fa-window-close fa-4x"
          style={{marginTop: '10px'}}
        ></i>
      </Link>
      <h1 className="header">Hustlers</h1>
      <hr />

      { clicked.isClicked === false ? 
      <div
        className="box column"
        style={{margin: '10px', overflow: 'auto', width: '100%'}}
      >
        <img
          src="./img/BBB_hustlers_01.png"
          width="100px"
          alt=""
          style={{float: 'left'}}
        />


        <div className="hustleinfo">
          <h1 className="hustletitle">JEFF PESOS</h1>
          <p className="description">RUN SPARE CHANGE HUSTLE</p>
          <b className="hustlecost">$2000</b>
        </div>
        <button
          className="button"
          onClick={buyJeff}
        >
          BUY
        </button>
      </div> : null
  }

      <div
        className="box column"
        style={{margin: '10px', overflow: 'auto', width: '100%'}}
      >
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
        <button
          className="button"
          onClick={() =>
            dispatch({type: BUY_HUSTLER, hustler: 'rustyShackleford'})
          }
        >
          BUY
        </button>
      </div>
    </div>
  );
};

export default Hustlers;
