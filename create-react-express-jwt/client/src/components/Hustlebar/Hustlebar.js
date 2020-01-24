import React, {useState} from 'react';
import './style.css';
import HustleLevel from '../HustleLevel/HustleLevel';
import LevelupButton from '../LevelupButton/LevelupButton';
import ProgressBar from '../ProgressBar/ProgressBar';



function HustleBar() {
  const [progressValue, setProgressValue] = useState(0)
  const { state, dispatch } = useGlobalState();

  function SpareChangeProgress() {

      let seconds = 0
      const intervalId = setInterval(() => {
        {dispatch({ type: USE_HUSTLE, hustle: "coinJar" })}
        if (seconds < 9) {
          seconds += 1
          setProgressValue(seconds * 10)
        } else {
          clearInterval(intervalId)
          setProgressValue(0)
        }
      }, 1000)
  
      return () => clearInterval(intervalId)


  }
    return (
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
    )
}

export default HustleBar;