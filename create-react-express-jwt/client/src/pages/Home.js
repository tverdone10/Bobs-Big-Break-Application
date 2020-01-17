// Testing components for homepage
import LevelupButton from '../components/LevelupButton/LevelupButton';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import HustleLevel from '../components/HustleLevel/HustleLevel';
import UnlockHustle from '../components/UnlockHustle/UnlockHustle';

const Home = () => {
    return(
        <div>
            <UnlockHustle />
      <div style={{ backgroundColor: "#999", borderTopLeftRadius: "5px", borderTopRightRadius: "5px", width: "150px", marginTop: "100px"}}>
      <img src="./BBB_logo.png" style={{display: "block", textAlign:"left", width: "150px"}} alt=""/>

      </div>
      <div className="box" style={{ position: "relative", paddingTop: "10px"}}>
        
      <b style={{display:"block", fontWeight: 'bold', textAlign: "right", top: "0"}}>x1</b>
      <b style={{ display: "block", fontFamily: "Shumi", fontSize: '2em', textAlign: "left"}}>Spare Change</b>

        
      <HustleLevel />
      <ProgressBar />
      <LevelupButton />
      </div>
        </div>
    )
}

export default Home;