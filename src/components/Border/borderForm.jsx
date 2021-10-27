import React, { useState, useEffect } from "react";
import BorderLogic from './BorderLogic.js'

function Border({ updateBorder, toggleBorder}) {
  let { value, width, color, disabled, style, setStyle, setDisabled, setValue, handleWidth, handleColour } = BorderLogic();


  const handleToggle = (e) => {
    setValue(e);
   toggleBorder(e);
  }
  useEffect(() => {
    if (value) {
      setDisabled(false);
      setStyle({ opacity: '1' });
      updateBorder(width, color);

    } else {
      setStyle({   opacity: '.5' });
      setDisabled(true);
    
      
    }
  }, [value, width, color]);
  
  return (
    <div className="grid-item-3">
      <form>
        <h3 className='box-title'>Border</h3>
        <input className='checkbox' type="checkbox" onClick={e => { handleToggle(e.target.checked) }} value='border' />
      </form>
      <form>
        <div className='underline' id='border-w-underline'>
        <label id='border-width-label'>Width</label>
        <input className='number-selector' type='number' id='border-width' value={width} style={style} disabled={disabled} onChange={handleWidth}/>
        </div>
       <div className='underline' id='border-c-underline'>
        <label id='border-color-label'>Colour</label>
        <input className='color-picker' id='border-color' className='color-picker' type='color' value={color} style={style} disabled={disabled} onChange={handleColour}/>
       </div>
      </form>
    </div>
  );
}

export default Border;