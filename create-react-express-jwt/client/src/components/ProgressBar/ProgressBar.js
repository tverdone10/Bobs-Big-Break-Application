import React from 'react';

const ProgressBar = ({value, max = 100 }) => {


  if (typeof value === 'undefined') {
    // ommit the value attribute to render an animated "loding" progress bar
   return  <progress className="progress is-danger is-large" max={max} style={{width: "60%", position: "absolute", top: "80px"}}>90%</progress>
  } 
  return (
    <progress className="progress is-danger is-large" value={value} max={max} style={{width: "60%", position: "absolute", top: "80px"}}>90%</progress>
    
  )
  };
  
  
    

  
export default ProgressBar;
