import React from "react";


const Inventory = () => {
    return(
        <div className="container">
            <i className="far fa-window-close fa-4x" style={{marginTop: '10px'}}></i>
            <h1 className='header'>Inventory</h1>
      <hr/>
            <img src="./img/BBB_character_body.png" width="350px"alt="" style={{display: "block", margin: "0 auto"}}/>
            <hr/>
            <div className="columns">
            <div className="box column" style={{ height: "100px", margin: "10px"}}>
                
                </div>
                <div className="box column" style={{ height: "100px", margin: "10px"}}>
                    
                </div>
                <div className="box column" style={{ height: "100px", margin: "10px"}}>
                    
                </div>
                <div className="box column" style={{ height: "100px", margin: "10px"}}>
                
                </div>
                <div className="box column" style={{ height: "100px", margin: "10px"}}>
                    
                </div>
                <div className="box column" style={{ height: "100px", margin: "10px"}}>
                    
                </div>
            </div>
        </div>
    )
}

export default Inventory;