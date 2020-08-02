import React, { useState, useEffect } from "react";
import seed from './seed.js';


function Shape(props) {
  const [shapeState, setShapeState] = useState(props);
  const [css, setCSS] = useState(seed.css);
  let style = seed.css;
  let newStyle = {}
  useEffect(() => {
    console.log("CSS", css);
    shapeState.props.map(e => {
      if (e.size) {
        for (var x in style) {   
          if ( x === 'width') {
            newStyle[x] = `${e.size}em`;
            console.log(`${x}: ${e.size}em`);
          } else if (x === 'height') {
            newStyle[x] = `${e.size}em`;
          }
          else {
            newStyle[x] = style[x];
            
          }
          
        }
        setCSS(newStyle);
        console.log('$$$$$$$$$$$$$$$$$$$$$',newStyle);
     }
    })
    setShapeState(props);
    if (shapeState !== props) {

    } 

    console.log(shapeState);
  }, [props]);

  return (
    <div>
      <div className="shape-container">
        <div className="shape" style={css}/>
      </div>
      <div className='output-container'>
        <p>{seed.shape}</p>
        <p>{seed.html}</p>
        <p>{`${seed.css}`}</p>
      </div>
    </div>
  );
}

export default Shape;
