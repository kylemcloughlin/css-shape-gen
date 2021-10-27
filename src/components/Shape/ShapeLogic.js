import React, { useState, useEffect } from "react";
import seed from '../seed.js'; 
const ShapeLogic = () => {
// const [shapeState, setShapeState] = useState(props);
// const [css, setCSS] = useState(seed.css);
// const [innerCss, setInnerCss] = useState(seed.css);
const [toggleBorderCss, setToggleBorderCss] = useState(false);
const [toggleShadowCss, setToggleShadowCss] = useState(true);
const [topBottom, setTopBottom] = useState({
  width: '62px',
  height: '5px',
  backgroundColor: 'black',
  visibility: 'hidden',

});
const [rightLeft, setRightLeft] = useState({
  height: '62px',
  width: '5px',
  backgroundColor: 'black',
  visibility: 'hidden',


})
const [turnShadowOn, setTurnShadowOn] = useState(false);
  let updateOuterSquare = (size, borderWidth) => {
    let newSize = [];
    let add = borderWidth;
    let output = size.split('');
    for (let x of output) {

      if (isNaN(x)) {} else {
        newSize.push(x);
      }
    }
    newSize = newSize.join("")
    return `${Number(newSize) + add}px `;
  }
  



  
  return {
    updateOuterSquare
  };
}


export default ShapeLogic;