import React, { useState, useEffect } from "react";

const ShadowLogic  = (props) => {
  
 const [value, setValue] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [blur, setBlur] = useState(6);
  const [shadowColor, setShadowColor] = useState('#000000');
  const [toRGB, setToRGB] = useState();
  const [alpha, setAlpha] = useState(5);
  const [style, setStyle] = useState({
    opacity: '.5'
  });



  const hexToRgb = (hex) => {
    setShadowColor(hex);
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    let output = result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
    setToRGB(output);
 
  };
  



  let handleBlur = (e) => {
    setBlur(e.target.value)
  }


let handleAlpha = (e) => {
  setAlpha(e.target.value)
}

  
  return {
    hexToRgb,
    handleBlur,
    handleAlpha,
    toRGB,
    alpha,
    blur,
    disabled,
    setDisabled,
    value,
    setValue, 
    shadowColor, 
    style, 
    setStyle
}
}
export default ShadowLogic;