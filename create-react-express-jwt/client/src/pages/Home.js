// Testing components for homepage
import React, { useState, useEffect } from "react";
import LevelupButton from "../components/LevelupButton/LevelupButton";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import HustleLevel from "../components/HustleLevel/HustleLevel";
import UnlockHustle from "../components/UnlockHustle/UnlockHustle";
import UnlockHustleTwo from "../components/UnlockHustleTwo/UnlockHustleTwo";
import NavButtons from "../components/NavButtons/NavButtons";
import Navbar from "../components/Navbar/Navbar";

import {
  USE_HUSTLE,
  USE_PASSIVE_HUSTLE,
  INITIALIZE_PASSIVE_INTERVAL,
  BUY_HUSTLE,
  BUY_HUSTLER,
  INIT_GAME
} from "../actions";

import { useGlobalState } from "../useGlobalState";

import { HUSTLERS, HUSTLES } from "../hustlerConfig";
import { Link } from "react-router-dom";


// import mainTheme from "../assets/music/profile_music.mp3"

import API from "../utils/API";
import { useAuth } from "../utils/auth";

// {coins: 0, hustles: Array(0), hustlers: Array(0), _id: "5e2a1e94da304e0a6bde249a", username: "tommy", …}
// coins: 0
// hustles: []
// hustlers: []
// _id: "5e2a1e94da304e0a6bde249a"
// username: "tommy"
// email: "tommy@tommy.com"
// password: "$2a$05$VEudXtu6uXW9VCBNXCdHGeVoCvqFdY.4krJA80bPtRDaeaQRjftaS"
// createdAt: "2020-01-23T22:30:44.304Z"
// __v: 0
// __proto__: Object

const getHustlesFromUserData = data => {
  const result = {};
  for (let hustle in data.hustles) {
    result[hustle.id] = {
      cost: hustle.cost,
      rate: hustle.rate
    };
  }
  return result;
};

const getHustlersFromUserData = data => {
  const result = {};
  for (let hustler in data.hustlers) {
    result[hustler.id] = {
      cost: hustler.cost,
      rate: hustler.rate,
      startAt: hustler.startAt
    };
  }
  return result
}

const Home = () => {
  const { user } = useAuth();
  const [progressValue, setProgressValue] = useState(0);
  const { state, dispatch } = useGlobalState();
  const [clicked, setClicked] = useState({ isClicked: false });
 
  // API.logCoins(state.disposableCoins)
  // .then (res => {
  // })
  // .catch(err => alert(err))

  useEffect(() => {
    API.getUser(user.id)
      .then(res => {
        console.log(res)
        // dispatch({
        //   type: INIT_GAME,
        //   disposableCoins: res.data.coins,
        //   hustles: getHustlesFromUserData(res.data),
        //   hustlers: getHustlersFromUserData(res.data)
        // });
        console.log(res)
      })
      .catch(error => console.log(error));
  }, []);

  function SpareChangeProgress() {

    let seconds = 0;
    const intervalId = setInterval(() => {
      {
        dispatch({ type: USE_HUSTLE, hustle: "coinJar" });
      }
      if (seconds < 9) {
        seconds += 1;
        setProgressValue(seconds * 10);
      } else {
        clearInterval(intervalId);
        setProgressValue(0);
        // post coins to db here
        console.log(user)
        console.log(user.id)
        console.log(user.hustles)

        // API.logCoins(state.disposableCoins).then (res => {
        //   console.log(res)
        // }).catch(err => alert(err))
      
    
      }
    }, 1000);

    return () => clearInterval(intervalId);

  }

  function SqueegeeProgress() {
    // useEffect(() => {
    let seconds = 0;
    const intervalId = setInterval(() => {
      {
        dispatch({ type: USE_HUSTLE, hustle: "squeegee" });
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
    // }, [])
  }

  let hide = false;

  function buySqueegee() {
    dispatch({ type: BUY_HUSTLE, hustle: "squeegee" });
    setClicked({ isClicked: true });
  }

  return (
    <div>
      <Navbar />
      <UnlockHustle cost={20000} />
      {/* <UnlockHustleTwo cost={5000} /> */}
      {!state.hustles.squeegee ? (
        <section className="hero is-medium is-danger is-bold squeegeebutton">
          <div className="hero-body">
            <div className="container">
              <div className="container">
                <h1 className="unlock-header">Unlock Squeegee</h1> 
                <h1 className="unlock-header">2500 coins per hustle</h1>
                <b className="cost">$5000</b>
                <br />
                <button
                  className="button is-large unlock"
                  onClick={buySqueegee}
                  style={{
                    display: "block",
                    margin: "0 auto",
                    textAlign: "center",
                    backgroundColor: "#FEBE40",
                    borderBottom: "#D39C3C solid 5px"
                  }}
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
      <div
        style={{
          textAlign: "center",
          borderTopLeftRadius: "5px",
          borderTopRightRadius: "5px",
          width: "150px",
          marginTop: "100px",
          marginLeft: "20px"
        }}
      >
        <button
          onClick={SpareChangeProgress}
          // {() => dispatch({ type: USE_HUSTLE, hustle: "coinJar" })}

          className="spare-change-button"
          style={{
            borderBottom: "2px",
            borderTopRightRadius: "5px",
            borderTopLeftRadius: "5px",
            boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)"
          }}
        >
          <img
            src="./img/BBB_hustles_spare_change.png"
            style={{
              display: "block",
              textAlign: "left",
              width: "150px",
              borderTopRightRadius: "5px",
              borderTopLeftRadius: "5px"
            }}
            alt=""
          />
        </button>
        {clicked.isClicked === true ? (
          <button
            onClick={SqueegeeProgress}
            className="spare-change-button"
            style={{
              borderBottom: "2px",
              borderTopRightRadius: "5px",
              borderTopLeftRadius: "5px",
              boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)"
            }}
          >
            <img
              src="./img/BBB_hustles_squeegee.png"
              style={{
                display: "block",
                textAlign: "right",
                width: "150px",
                borderTopRightRadius: "5px",
                borderTopLeftRadius: "5px"
              }}
              alt=""
            />
          </button>
        ) : null}
      </div>
      <div
        className="box"
        style={{ position: "relative", paddingTop: "10px", margin: "0" }}
      >
        <b
          style={{
            display: "block",
            fontWeight: "bold",
            textAlign: "right",
            top: "0"
          }}
        >
          x1
        </b>
        <b
          style={{
            display: "block",
            fontFamily: "Shumi",
            fontSize: "2em",
            textAlign: "left"
          }}
        >
          Hustle Meter
        </b>

        <HustleLevel />
        <ProgressBar value={progressValue} />
        <LevelupButton />
      </div>
      <div style={{ textAlign: "right" }}>
        <Link to="/inventory">
          <img
            src="./img/BBB_character_icon.png"
            width="200px"
            style={{ clear: "both", float: "right", marginRight: "10px" }}
            alt=""
          />
        </Link>
      </div>
      <NavButtons />
    </div>
  );
};

export default Home;
