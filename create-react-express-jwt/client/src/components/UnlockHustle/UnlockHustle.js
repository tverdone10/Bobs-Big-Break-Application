import React from 'react';
import './style.css'

const UnlockHustle = () => {
  return (
    <section
      class="hero is-medium is-danger is-bold"
    >
      <div class="hero-body">
        <div class="container">
          <div className="container">
            <h1 className="unlock-header">
              Next Hustle
            </h1>
            <b className="cost">
              $1500
            </b>
            <br />
            <button
              class="button is-large unlock"
              style={{display: 'block', margin: '0 auto', textAlign: 'center', backgroundColor: "#FEBE40", borderBottom: "#D39C3C solid 5px"}}
            >
              <span class="icon is-medium">
                <i class="fas fa-lock"></i>
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
