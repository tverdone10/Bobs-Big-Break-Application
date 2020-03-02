import React, {useState} from 'react';
import './style.css';
import HustleLevel from '../HustleLevel/HustleLevel';
import LevelupButton from '../LevelupButton/LevelupButton';
import ProgressBar from '../ProgressBar/ProgressBar';
import {
  USE_HUSTLE,
  USE_PASSIVE_HUSTLE,
  INITIALIZE_PASSIVE_INTERVAL,
  BUY_HUSTLE,
  BUY_HUSTLER,
} from '../../actions';

import {useGlobalState} from '../../useGlobalState';



const HustleBar = () => {
  
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
          <div className="box hustle-container">
      {/* spare change container starts here */}
    <div className="spare-change-container columns">
      <div className="column">
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
      <div className="column">
      <b className="hustle-name">Spare Change</b>
      {/* <b className="multiplier">x1</b> */}
      <ProgressBar value={progressValue} />
      <HustleLevel />
      <LevelupButton />

      </div>
    </div>
    </div>
  )


  }


export default HustleBar;