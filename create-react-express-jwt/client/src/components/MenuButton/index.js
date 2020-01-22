import React from 'react'
import './styles.css'

function Menu (){
    return (
        <div className="container">
            <input id="toggle" type="checkbox"/>
        
        
            <label className="toggle-container" for="toggle">
                <span className="button button-toggle"></span>
            </label>
        
            <nav className="nav">
                <a className="nav-item" style={{fontFamily:'shumi'}}>Go to Profile</a>
                <a className="nav-item" style={{fontFamily:'shumi'}} >Contact Us</a>
                <a className="nav-item" style={{fontFamily:'shumi'}} >Funds</a>
                <a className="nav-item" style={{fontFamily:'shumi'}} href="Logout.php" target="self">logout</a>
                
            </nav>
        </div>
    )
}

export default Menu