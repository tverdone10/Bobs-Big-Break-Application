import React, { useState, useEffect } from 'react';
import API from './../utils/API';
import { Link } from 'react-router-dom';
import { useAuth } from '../utils/auth';
import { useGlobalState } from "../useGlobalState" 
import { INCREMENT_COINS, 
        INCREMENT_PASSIVE_COINS} 
        from "../actions"

function Profile() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const { user } = useAuth();
  // const [clickUp, dispatch] = useClickState();
  // const [autoUp, attack] = useAutoState()
  const [countUp, dispatch] = useGlobalState()

  useEffect(() => {
    API.getUser(user.id).then(res => {
      setUsername(res.data.username);
      setEmail(res.data.email);
    });
  }, [user]);



  return (
    <div className="container Profile">
      <h1>On the profile page!</h1>
      <h2>Currency: {countUp.coins}</h2>
      <button onClick={() => dispatch({type: INCREMENT_COINS})}>Increase</button>
     <br></br>
     <br></br>
      <h2>Test Currency: {countUp.passiveCoins}</h2>
      <button onClick={() => dispatch({type: INCREMENT_PASSIVE_COINS})}>Increase</button>
      <br></br>
     <br></br>
      {/* <h2>Master Currency: {countUp.totalCoins}</h2> */}
      
      <p>Username: {username}Bob</p>
      <Link to="/">Go home</Link>
    </div>
  );
}

export default Profile;