import React, { useState, useEffect } from "react";
import API from "./../utils/API";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/auth";
import { useGlobalState } from "../useGlobalState";
import {
  USE_HUSTLE,
  USE_PASSIVE_HUSTLE,
  INITIALIZE_PASSIVE_INTERVAL,
  BUY_HUSTLE,
  BUY_HUSTLER
} from "../actions";

import { HUSTLERS, HUSTLES } from "../hustlerConfig";


function Profile() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const { user } = useAuth();
  // const [clickUp, dispatch] = useClickState();
  // const [autoUp, attack] = useAutoState()
  const { state, dispatch } = useGlobalState();

  useEffect(() => {
    API.getUser(user.id).then(res => {
      setUsername(res.data.username);
      setEmail(res.data.email);
    });
  }, [user]);

  useEffect(() =>{

    setTimeout(dispatch({type: USE_PASSIVE_HUSTLE, hustler: "coinHustler"}),1000)

  },[])

  return (
    <div className="container Profile">
      <h1>On the profile page!</h1>
      <h2>Currency: {state.disposableCoins}</h2>
      <button onClick={() => dispatch({ type: USE_HUSTLE, hustle: "coinJar" })}>Increase</button>
      <br></br>
      <br></br>
      <h2>Test Currency: {state.passiveCoins}</h2>
      <button onClick={() => dispatch({ type: USE_PASSIVE_HUSTLE, hustlerType: "coinHustler" })}>
        USEPASSIVEHUSTLE BUTTON
      </button>
      <h2>buy coinJar hustler</h2>
      <button onClick={() => dispatch({ type: BUY_HUSTLER, hustler: "coinHustler" })}>buy</button>
      <br></br>
      <br></br>
      <h2>Master Currency: {state.disposableCoins}</h2>
      <br>
      </br>
      <br></br>
      <br></br>
      <button className="myBtn">disabled test</button>
      <p>Username: {username}Bob</p>
      <Link to="/">Go home</Link>
    </div>
  );
}

export default Profile;
