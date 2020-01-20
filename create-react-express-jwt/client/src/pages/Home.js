// Testing components for homepage
import React from 'react';
import LevelupButton from '../components/LevelupButton/LevelupButton';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import HustleLevel from '../components/HustleLevel/HustleLevel';
import UnlockHustle from '../components/UnlockHustle/UnlockHustle';
import NavButtons from '../components/NavButtons/NavButtons';
import Navbar from '../components/Navbar/Navbar';

const Home = () => {
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
          marginTop: '20px',
        }}
      >
        $143
      </p>
      <UnlockHustle />
      <UnlockHustle />
      <div
        style={{
          boxShadow: '0 4px 8px 0 red',
          textAlign: 'center',
          borderTopLeftRadius: '5px',
          borderTopRightRadius: '5px',
          width: '150px',
          marginTop: '100px',
          marginLeft: '20px',
        }}
      >
        <img
          src="./img/BBB_hustles_spare_change.png"
          style={{display: 'block', textAlign: 'left', width: '150px'}}
          alt=""
        />
      </div>
      <div className="box" style={{position: 'relative', paddingTop: '10px'}}>
        <b
          style={{
            display: 'block',
            fontWeight: 'bold',
            textAlign: 'right',
            top: '0',
          }}
        >
          x1
        </b>
        <b
          style={{
            display: 'block',
            fontFamily: 'Shumi',
            fontSize: '2em',
            textAlign: 'left',
          }}
        >
          Spare Change
        </b>

        <HustleLevel />
        <ProgressBar />
        <LevelupButton />
      </div>
      <div style={{textAlign: 'right', backgroundImage: "url(http://rumradio.org/wp-content/uploads/2010/10/card-board-box.jpg)"}}>
        <img
          src="./img/BBB_character_icon.png"
          width="200px"
          style={{ marginRight: "10px"}}
          alt=""
        />
      </div>
      <NavButtons />
    </div>
  );
};

export default Home;
