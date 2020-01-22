// Testing components for homepage
import React, {useState, useEffect} from 'react';
import LevelupButton from '../components/LevelupButton/LevelupButton';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import HustleLevel from '../components/HustleLevel/HustleLevel';
import UnlockHustle from '../components/UnlockHustle/UnlockHustle';
import NavButtons from '../components/NavButtons/NavButtons';
import Navbar from '../components/Navbar/Navbar';

const Home = () => {
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    let seconds = 0;
    const intervalId = setInterval(() => {
      if (seconds < 10) {
        seconds += 1;
        setProgressValue(seconds * 10);
      } else {
        clearInterval(intervalId);
        // setPregressValue = 0
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p
        style={{
          display: 'block',
          position: 'fixed',
          zIndex: '5',
          fontSize: '2rem',
          fontWeight: 'bold',
          right: '47%',
          color: 'white',
          textShadow: '3px 3px 10px black',
          marginTop: '20px',
        }}
      >
        $143
      </p>
      <UnlockHustle cost={20000} />
      <UnlockHustle cost={5000} />
      <div
        style={{
          textAlign: 'center',
          borderTopLeftRadius: '5px',
          borderTopRightRadius: '5px',
          width: '150px',
          marginTop: '100px',
          marginLeft: '20px',
        }}
      >
        <button
        className="spare-change-button"
          style={{
            borderBottom: '2px',
            borderTopRightRadius: '5px',
            borderTopLeftRadius: '5px',
            boxShadow: '2px 2px 10px black',
          }}
        >
          <img
            src="./img/BBB_hustles_spare_change.png"
            style={{
              display: 'block',
              textAlign: 'left',
              width: '150px',
              borderTopRightRadius: '5px',
              borderTopLeftRadius: '5px',
            }}
            alt=""
          />
        </button>
      </div>
      <div
        className="box"
        style={{position: 'relative', paddingTop: '10px', margin: '0'}}
      >
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
        <ProgressBar value={progressValue} />
        <LevelupButton />
      </div>
      <div style={{textAlign: 'right'}}>
        <img
          src="./img/BBB_character_icon.png"
          width="200px"
          style={{clear: 'both', float: 'right', marginRight: '10px'}}
          alt=""
        />
      </div>
      <NavButtons />
    </div>
  );
};

export default Home;
