// Testing components for homepage
import React, {useState, useEffect} from 'react';
import LevelupButton from '../components/LevelupButton/LevelupButton';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import HustleLevel from '../components/HustleLevel/HustleLevel';
import UnlockHustle from '../components/UnlockHustle/UnlockHustle';
import UnlockHustleTwo from '../components/UnlockHustleTwo/UnlockHustleTwo';
import NavButtons from '../components/NavButtons/NavButtons';
import Navbar from '../components/Navbar/Navbar';
import './Home.css';

import {
  USE_HUSTLE,
  USE_PASSIVE_HUSTLE,
  INITIALIZE_PASSIVE_INTERVAL,
  BUY_HUSTLE,
  BUY_HUSTLER,
} from '../actions';

import {useGlobalState} from '../useGlobalState';

import {HUSTLERS, HUSTLES} from '../hustlerConfig';
import {Link} from 'react-router-dom';

const Home = () => {
  const [progressValue, setProgressValue] = useState(0);
  const {state, dispatch} = useGlobalState();
  const [clicked, setClicked] = useState({isClicked: false});

  function SpareChangeProgress() {

    let seconds = 0;
    const intervalId = setInterval(() => {
      {
        dispatch({type: USE_HUSTLE, hustle: 'spareChange'});
      }
      if (seconds < 9) {
        seconds += 1;
        setProgressValue(seconds * 10);
      } else {
        clearInterval(intervalId);
        setProgressValue(0);
      }
    }, 1000);

    return () => clearInterval(intervalId);

  }

  function SqueegeeProgress() {

    let seconds = 0;
    const intervalId = setInterval(() => {
      {
        dispatch({type: USE_HUSTLE, hustle: 'squeegee'});
      }
      if (seconds < 9) {
        seconds += 1;
        setProgressValue(seconds * 10);
      } else {
        clearInterval(intervalId);
        setProgressValue(0);
      }
    }, 1000);

    return () => clearInterval(intervalId);

  }

  let hide = false;

  function buySqueegee() {
    dispatch({type: BUY_HUSTLE, hustle: 'squeegee'});
    setClicked({isClicked: true});
  }

  return (
    <div>
      <Navbar />
      <UnlockHustle cost={20000} />
      {/* <UnlockHustleTwo cost={5000} /> */}

      {/* this is the statement that unlocks the hustle */}
      {clicked.isClicked === false ? (
        <section className="hero is-medium is-danger is-bold squeegeebutton">
          <div className="hero-body">
            <div className="container">
              <div className="container">
                <h1 className="unlock-header">Next Hustle</h1>
                <b className="cost">$5000</b>
                <br />
                <button
                  className="button is-large unlock"
                  onClick={buySqueegee}
                >
                  <span className="icon is-medium">
                    <i className="fas fa-lock"></i>
                  </span>
                  <span>Unlock</span>
                  <br />
                </button>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {/* spare change container starts here */}
      <div className="spare-change-container">
        <button onClick={SpareChangeProgress} className="hustle-button spare-change-button">
          <img
            className="spare-change-img"
            src="./img/BBB_hustles_spare_change.png"
            alt=""
          />
        </button>
        {clicked.isClicked === true ? (
          <button onClick={SqueegeeProgress} className="hustle-button squeegee-button">
            <img
              className="squeegee-img"
              src="./img/BBB_hustles_squeegee.png"
              alt=""
            />
          </button>
          
        ) : null}
      </div>

      <div className="box">
        <b className="multiplier">x1</b>
        <b className="hustle-name">Spare Change</b>
        <ProgressBar value={progressValue} />
        <HustleLevel />
        <LevelupButton />
      </div>

      {/* Bob icon that connects to inventory page */}
      <div style={{textAlign: 'right'}}>
        <Link to="/inventory">
          <img
            className="bob-icon"
            src="./img/BBB_character_icon.png"
            width="200px"
            alt=""
          />
        </Link>
      </div>

      {/* Nav for going to Husters and Hustles page  */}
      <NavButtons />
    </div>
  );
};

export default Home;
