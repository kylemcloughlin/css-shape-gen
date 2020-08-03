import React, { useState, useEffect } from "react";
import seed from './seed.js';


function Shape(props) {
  const [shapeState, setShapeState] = useState(props.props);
  const [css, setCSS] = useState(seed.css);
  const [togglerHelper, setToggleHelper] = useState({ shadow: false, border: false, fill: false });

  let style = seed.css;
  useEffect(() => {
    let newStyle = {};
    // console.log("@@@@@", props.props);
    props.props.map(e => {
        console.log('mapmapmap', e)
      if (e.size) {
        for (var x in style) {
          if (x === 'width') {
            newStyle[x] = `${e.size}em`;
            // console.log(`${x}: ${e.size}em`);
          } else if (x === 'height') {
            newStyle[x] = `${e.size}em`;
          }
          else {
            newStyle[x] = style[x];

          }

        }
      }
      else if (e.type) {
        // console.log('e.type', e.type === 'color')// console.log('beep beep fill code', e.fillCode);
          newStyle.background = e.fillCode;
      } 
      
      else if (e.border === true) {
        console.log('hit e.border')
    
        if (e.toggleBorder === false ){
          newStyle.border = 'hidden';
        } else  {
          
          console.log(e.borderColor)
          newStyle.border = `${e.borderWidth}px solid` + e.borderColor;
          // newStyle.borderColor = e.borderColor;
        }
      }
      else if (e.shadow === true) {
        if (e.shadowToggle === false) {
          newStyle.boxShadow = 'none';   
        } else {
          console.log(e.shadowColor.split(""))
          newStyle.boxShadow = `50px 50px ${e.shadowBlur}px ${e.shadowAlpha}px ${e.shadowColor}`;
          // newStyle.borderColor = e.borderColor;
        }
      }

       else {
        // console.log('hit')
      }


      
    })
    
    setCSS(newStyle);
   
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
