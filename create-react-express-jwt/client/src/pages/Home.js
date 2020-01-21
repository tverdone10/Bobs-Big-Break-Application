// Testing components for homepage
import React, { Component, useState, useEffect } from 'react';
import LevelupButton from '../components/LevelupButton/LevelupButton';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import HustleLevel from '../components/HustleLevel/HustleLevel';
import UnlockHustle from '../components/UnlockHustle/UnlockHustle';
import NavButtons from '../components/NavButtons/NavButtons';
import Navbar from '../components/Navbar/Navbar';

import {
  USE_HUSTLE,
  USE_PASSIVE_HUSTLE,
  INITIALIZE_PASSIVE_INTERVAL,
  BUY_HUSTLE,
  BUY_HUSTLER
} from "../actions";

import { useGlobalState } from "../useGlobalState";

import { HUSTLERS, HUSTLES } from "../hustlerConfig";



const Home = () => {
      const [progressValue, setPregressValue] = useState(0)
      const { state, dispatch } = useGlobalState();


      useEffect(() => {
        let seconds = 0
        const intervalId = setInterval(() => {
          if (seconds < 10) {
            seconds += 1
            setPregressValue(seconds * 10)
          } else {
            clearInterval(intervalId)
            // setPregressValue = 0
          }
        }, 1000)
    
        return () => clearInterval(intervalId)
      }, [])




        return (
          <div>
            <p
              style={{
                position: 'fixed',
                zIndex: '5',
                fontSize: '2rem',
                fontWeight: 'bold',
                right: '40vw',
                color: 'white',
                textShadow: '3px 3px 10px black',
                marginTop: '20px'
              }}
            >
              ${state.disposableCoins}
            </p>
            <UnlockHustle cost={20000}/>
            <UnlockHustle cost={1500}/>
            <div
              style={{
                textAlign: 'center',
                borderTopLeftRadius: '5px',
                borderTopRightRadius: '5px',
                width: '150px',
                marginTop: '100px',
                marginLeft: '20px'
              }}
            >
              <img
                src="./img/BBB_hustles_spare_change.png"
                style={{display: 'block', textAlign: 'left', width: '150px', boxShadow: "5px 5px 10px 5px rgba(0, 0, 0, 0.3)", borderTopRightRadius: "5px", borderTopLeftRadius: "5px"}}
                alt=""
              />
            </div>
            <div className="box" style={{position: 'relative', paddingTop: '10px', margin: "0"}}>
              <b
                style={{
                  display: 'block',
                  fontWeight: 'bold',
                  textAlign: 'right',
                  top: '0'
                }}
              >
                x1
              </b>
              <b
                style={{
                  display: 'block',
                  fontFamily: 'Shumi',
                  fontSize: '2em',
                  textAlign: 'left'
                }}
              >
                Spare Change
              </b>
      
              <HustleLevel />
              <ProgressBar value={progressValue} />
              <LevelupButton />
            </div>
            <div style={{textAlign: 'right'}}
            onClick={() => dispatch({ type: USE_HUSTLE, hustle: "coinJar" })}
            >
              <img
                src="./img/BBB_character_icon.png"
                width="200px"
                style={{ clear:"both", float: "right", marginRight: "10px"}}
                alt=""
                
              />
            </div>
            <button onClick={() => dispatch({ type: USE_HUSTLE, hustle: "coinJar" })}>hello click me</button>
            <NavButtons />
          </div>
        );
    }


export default Home;
