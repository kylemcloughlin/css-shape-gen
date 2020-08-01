import React, { useState, useEffect } from "react";


function Shape(props) {
 const [shapeState, setShapeState] = useState(props);
 useEffect(() => {
    setShapeState(props);
  if (shapeState !== props) {

  }
  
    console.log(shapeState);
  }, [props]);

  return (
    <div className="shape-container">
       <div className="shape"/>

    </div>
  );
}

export default Shape;
