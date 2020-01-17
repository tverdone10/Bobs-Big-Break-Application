import React from 'react';

const ProgressBar = () => {
  return (
    <div>
      <progress className="progress is-danger is-large" value="0" max="100" style={{width: "60%", position: "absolute", top: "80px"}}>90%</progress>
    </div>
  );
};

export default ProgressBar;
