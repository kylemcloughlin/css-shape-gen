import React, { useState, useEffect} from "react";

const BorderLogic = () => {
    const [value, setValue] = useState(false);
    const [width, setWidth] = useState(5);
    const [color, setColor] = useState('#000000');
    const [disabled, setDisabled] = useState(true);
    const [style, setStyle] = useState({ opacity: '.5' });
  const handleWidth = (e) => {
    setWidth(e.target.value)

  }

  const handleColour = (e) => {
    setColor(e.target.value)
  }

  return {value, width, color, disabled, style, setStyle, setDisabled, setValue, handleColour, handleWidth};
}

export default BorderLogic;