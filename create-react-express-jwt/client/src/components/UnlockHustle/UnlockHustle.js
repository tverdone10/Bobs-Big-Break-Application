import React from 'react';
import './style.css'

const UnlockHustle = () => {
  return (
    <section
      className="hero is-medium is-danger is-bold"
    >
      <div className="hero-body">
        <div className="container">
          <div className="container">
            <h1 className="unlock-header">
              Next Hustle
            </h1>
            <b className="cost">
              $1500
            </b>
            <br />
            <button
              className="button is-large unlock"
              style={{display: 'block', margin: '0 auto', textAlign: 'center', backgroundColor: "#FEBE40", borderBottom: "#D39C3C solid 5px"}}
            >
              <span className="icon is-medium">
                <i className="fas fa-lock"></i>
              </span>
              <span>Unlock</span>
              <br />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnlockHustle;
