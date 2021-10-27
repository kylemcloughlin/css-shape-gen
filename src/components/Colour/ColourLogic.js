import React, { useState, useEffect} from "react";
const ColourLogic = () => {
   const [value, setValue] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [imgDisabled, setImgDisabled] = useState(true);
  const [color, setColor] = useState('#6C6CC7');

  const [clrStyle, setClrStyle] = useState({ opacity: '1' });
  const [imgStyle, setImgStyle] = useState({ opacity: '.5' });
  
  const handleSwitch = (x, y) => {
    // console.log(x, y);
    if (x === 'clr' && y === true) {
      setDisabled(false);
      setImgDisabled(true);
      setClrStyle({ opacity: '1' });
      setImgStyle({ opacity: '.5' });
      setValue(false);
      
    }
    if (x === 'img' && y === true) {
      setDisabled(true);
      setImgDisabled(false);
      setValue(true);
      setClrStyle({ opacity: '.5' });
      setImgStyle({ opacity: '1' });
    }
  }
  
  let handleColour = (e) => {
    setColor(e.target.value)
  }
  return {handleSwitch, handleColour, value, disabled, imgDisabled, color, clrStyle, imgStyle};
};

export default ColourLogic;