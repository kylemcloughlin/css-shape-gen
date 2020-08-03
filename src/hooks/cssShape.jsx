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
        console.log('e.type', e.type === 'color')// console.log('beep beep fill code', e.fillCode);
          newStyle.background = e.fillCode;
      } else if (e.borderWidth ) {
            console.log('border-width', e.borderWidth)
      } else if (e.borderWidth) {
        console.log('border-colour', e.borderColour)
     
     
      } else if (e.toggle === 'border') {
      if (e.featureToggle) {
        newStyle.border = '6px solid black';

      } else {
        newStyle.border = 'hidden';

      }
        console.log('hit e.toggle', e.toggle);
        // if (e.toggleType === true ) {
        //     newStyle.border = '6px solild black';
        //     for (let x in newStyle) {
        //       console.log(newStyle)

        //     if (x.background ) {
        //         // x.background = 'gold';
        //       console.log('11111!!!!!!!!!')

        //       }
        //   } 
          // } else {
          //   // newStyle.background = 'gold';
          //   console.log('toggleType----else', e.toggleType);
          // }
        // console.log('toggle', e.toggle)
        // console.log();

      } else {
        // console.log('hit')
      }

      console.log(newStyle)
      // console.log('$$$$$$$$$$$$$$$$$$$$$', newStyle);
      
    })
    
    setCSS(newStyle);
   

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
