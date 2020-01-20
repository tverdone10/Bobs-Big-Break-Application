import React from "react";
import './style.css'

const NavButtons = ()=> {
    return(
        <div className="navbuttons">
            <button className="button is-large" style={{ width: "25%", height: "100px", borderRadius: "0", borderRight: "1px solid #94143A"}}>Boosters</button>
            <button className="button is-large" style={{ width: "25%", height: "100px", borderRadius: "0", borderRight: "1px solid #94143A"}}>Hustlers</button>
            <button className="button is-large" style={{ width: "25%", height: "100px", borderRadius: "0", borderRight: "1px solid #94143A"}}>Shop</button>
            <button className="button is-large" style={{ width: "25%", height: "100px", borderRadius: "0"}}>Stats</button>
        </div>
    )
}

export default NavButtons;