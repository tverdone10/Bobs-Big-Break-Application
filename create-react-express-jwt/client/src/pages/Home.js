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
import mainTheme from "../assets/music/profile_music.mp3"
import HustleBar from '../components/HustleBar/HustleBar';



const Home = () => {
  const [progressValue, setProgressValue] = useState(0);
  const {state, dispatch} = useGlobalState();
  const [clicked, setClicked] = useState({isClicked: false});
  
  
//   let playing = false

// let themeSong = new Audio (mainTheme)


// function bobTheme() {

//   playing = true
//   if (!themeSong.playing){
//   themeSong.play()
//   themeSong.volume = 0.5
//   }
// }

// useEffect(() => {

//   bobTheme()

// }, [])


  function buySqueegee() {
    dispatch({type: BUY_HUSTLE, hustle: 'squeegee'});
    setClicked({isClicked: true});
  }

  return (
    <div>
      <Navbar />
    
    <div className="columns">
      <div className="column is-half" style={{marginTop: '170px'}}>
    <HustleBar/>
      <UnlockHustle cost={5000} />
      <UnlockHustle cost={40000} />
      <UnlockHustle cost={150000} />
      <UnlockHustle cost={500000} />
      </div>
      <div className="column is-half" style={{marginTop: '170px'}}>
      <UnlockHustle cost={2500000} />
      <UnlockHustle cost={8000000} />
      <UnlockHustle cost={50000000} />
      <UnlockHustle cost={73000000} />
      </div>
    </div>

      {/* <UnlockHustleTwo cost={5000} /> */}

      {/* this is the statement that unlocks the hustle */}
      {clicked.isClicked === false ? (
        <section className="hero is-medium is-danger is-bold squeegeebutton">
          <div className="hero-body">
            <div className="container">
              <div className="container">
                <h1 className="unlock-header">Next Hustle</h1>
                <b className="cost">$40000</b>
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


      

      {/* Nav for going to Husters and Hustles page  */}
      <NavButtons />
    </div>
  );
};

export default Home;
