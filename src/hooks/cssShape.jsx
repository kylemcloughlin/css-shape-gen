import React, { useState, useEffect } from "react";
import seed from './seed.js';


function Shape(props) {
  const [shapeState, setShapeState] = useState(props.props);
  const [css, setCSS] = useState(seed.css);
  const [togglerHelper, setToggleHelper] = useState({ shadow: false, border: false, fill: false });

  let style = seed.css;
  useEffect(() => {
    let newStyle = {};
    console.log("@@@@@", props.props[5]);
    props.props.map(e => {
        // console.log('mapmapmap', e)
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
        // console.log('hit e.border')
    
        if (e.toggleBorder === true ){
          newStyle.border = 'hidden';
        } else  {
          
          // console.log(e.borderColor)
          newStyle.border = `${e.borderWidth}px solid` + e.borderColor;
          // newStyle.borderColor = e.borderColor;
        }
      }
      else if (e.shadow === true) {
        if (e.shadowToggle === true) {
          newStyle.boxShadow = 'none';  
          console.log(`${e.shadowColor.r} ${e.shadowColor.g} ${e.shadowColor.b}`); 
        } else {
          // console.log(e.shadowColor.split(""))
          newStyle.boxShadow = `50px 50px ${e.shadowBlur}px rgba(${e.shadowColor.r},${e.shadowColor.g},${e.shadowColor.b},0.${e.shadowAlpha})`;
          console.log(newStyle.boxShadow)
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
  <div class='body'>
    <div class="shape-grid-container">
      <div class="shape-container">
      <div className="shape" style={css} />
    </div>
    </div>
    <div className='output-container'>
      <h4>HTML</h4>
      <div class='html-css-container'>
       
      <p className='csshtml'>{seed.html}</p>
      </div>
      <h4>CSS</h4>    
      <p class='html-css-container'>
      {
        seed.cssOutput.map(el => {
     return(
      <span>{el['style']}: {el['value']};</span> 

     )
         

        })
      }
      </p>
    </div>
  </div>
);
}

export default Shape;
