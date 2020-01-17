import React from 'react';
import './style.css';

const HustleButton = () => {
  return (
    <div style={{textAlign: "right", width: '100%'}}>
      <button class="button is-large">
        <span class="icon is-medium">
          <i class="fas fa-arrow-alt-circle-up"></i>
        </span>
        <span style={{marginRight: '10px'}}>LevelUp</span>
        <br />
        <small
          style={{
            backgroundColor: '#FEBE40',
            borderRadius: '20px',
            fontSize: '12px',
            padding: '3px',
            fontWeight: 'bold',
            color: '#666666'
          }}
        >
          $500
        </small>
      </button>
    </div>
  );
};

export default HustleButton;
