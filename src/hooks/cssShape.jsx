import React, { useState, useEffect } from "react";
import seed from './seed.js';


function Shape(props) {
  const [shapeState, setShapeState] = useState(props);
  const [css, setCss] =useState(seed.css)
  const style = seed.css;
  useEffect(() => {
    console.log("seed", seed);
    shapeState.props.forEach(e => {
     if (e.size) {
    css.width = e.size;
      console.log("CSS", css.width)
    //   Object.defineProperties(style, 'writeable',{
    //   writeable: true
    // });
      //  seed.css.width = '22em';
        console.log('beep beep', seed.css.width);
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
        <div className="shape" style={style}/>
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
