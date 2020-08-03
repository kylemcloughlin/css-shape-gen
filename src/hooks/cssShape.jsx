import React, { useState, useEffect } from "react";
import seed from './seed.js';


function Shape(props) {
  const [shapeState, setShapeState] = useState(props);
  const [css, setCSS] = useState(seed.css);

  let style = seed.css;
  let newStyle = {}
  useEffect(() => {
    console.log("@@@@@", props.toggle);
    // console.log(props === shapeState);
    // console.log(props.props) 
    // console.log(shapeState.props) 
    
    props.props.map(e => {
      if (e.size) {
        for (var x in style) {
          if (x === 'width') {
            newStyle[x] = `${e.size}em`;
            console.log(`${x}: ${e.size}em`);
          } else if (x === 'height') {
            newStyle[x] = `${e.size}em`;
          }
          else {
            newStyle[x] = style[x];

          }

        }
      }
      else if (e.type) {
        console.log('beep beep fill code', e.fillCode);
          newStyle.background = e.fillCode;
      } else {

      }
      setCSS(newStyle);
      // console.log('$$$$$$$$$$$$$$$$$$$$$', newStyle);
      
    })

   

    // props.toggle.map(e => { 
    //   console.log('e', e);
    //   for (var x in props.toggle) {
      
    //     console.log(`tooogle for in ${x}`,props.toggle[x]);
    //   }
    // })
   
    setShapeState(props);
}, [props]);

return (
  <div>
    <div className="shape-container">
      <div className="shape" style={css} />
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
