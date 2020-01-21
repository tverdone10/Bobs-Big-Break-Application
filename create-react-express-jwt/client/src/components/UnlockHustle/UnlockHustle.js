import React from 'react';
import './style.css';



// let Cost = props => [
//   {
//     name: 'Squeegee',
//     cost: '20000',
//   },{
//     name: 'Recycling',
//     cost: "50000"
//   }
// ]


const UnlockHustle = ({cost}) => {
  return (
    <section className="hero is-medium is-danger is-bold">
      <div className="hero-body">
        <div className="container">
          <div className="container">
            <h1 className="unlock-header">Next Hustle</h1>
            <b className="cost">{`$${cost}`}</b>
            <br />
            <button
              className="button is-large unlock"
              style={{
                display: 'block',
                margin: '0 auto',
                textAlign: 'center',
                backgroundColor: '#FEBE40',
                borderBottom: '#D39C3C solid 5px',
              }}
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
