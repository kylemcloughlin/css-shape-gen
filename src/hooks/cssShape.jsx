import React, { useState, useEffect } from "react";
import seed from './seed.js';

function Shape(props) {
 const [shapeState, setShapeState] = useState(props);
 useEffect(() => {
 console.log(seed);
  shapeState.props.forEach(e => { 
    console.log(e)
  }) 
  setShapeState(props);
  if (shapeState !== props) {

  }
  
    console.log(shapeState);
  }, [props]);

  return (
    <div className="shape-container">
       <div className="shape"/>
     { shapeState.props.map((x, y)=> {
     return (
        <span> x</span>
      )
    })
  }
    </div>
  );
}

export default Shape;
