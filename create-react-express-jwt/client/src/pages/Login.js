import React, { useState } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { useAuth } from '../utils/auth';

// Testing components for homepage
import HustleBar from '../components/Hustlebar/HustleBar';
import LevelupButton from '../components/LevelupButton/LevelupButton';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import HustleLevel from '../components/HustleLevel/HustleLevel';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isLoggedIn, login } = useAuth();
  const history = useHistory();

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  const handleFormSubmit = event => {
    event.preventDefault();

    login(email, password)
      // navigate to the profile page
      .then(() => history.push('/profile'))
      .catch(err => {
        alert(err.response.data.message);
      });
  };

  return (
    <div className="container">

      <div className="box" style={{ position: "relative"}}>
      <b style={{ fontFamily: "Shumi", fontSize: '2em'}}>Spare Change</b>
      <b style={{ float: 'right', fontWeight: 'bold'}}>x1</b>
      <HustleLevel />
      <ProgressBar />
      <LevelupButton />
      </div>

      <img className="logo" src="/BBB_logo.png" alt=""/>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="email"></label>
          <input
            className="form-control"
            placeholder="Email"
            name="email"
            type="email"
            id="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pwd"></label>
          <input
            className="form-control"
            placeholder="Password"
            name="password"
            type="password"
            id="pwd"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <p className="paragraph">Forgot your password? <a href="#">Click Here</a></p>
        <hr/>
        <button type="submit" className="btn btn-warning">
          Login
        </button>
      </form>
      <button className="btn btn-secondary">
    <Link to="/signup" style={{color: "white"}}>Go to Signup</Link>
    </button>
    </div>
  );
}

export default Login;
