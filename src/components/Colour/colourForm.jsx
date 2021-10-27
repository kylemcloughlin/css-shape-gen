import React, { useState, useEffect} from "react";
import ColourLogic from  './ColourLogic.js';


function Colour({switchFill, updateFill}) {
  let  {handleSwitch, handleColour, value, disabled, imgDisabled, color, clrStyle, imgStyle} = ColourLogic();

  
 
  useEffect(() => {
    if (value) {  
      switchFill(value);
    } else {
      updateFill('colorCode', color);
      switchFill(value);

    }
  }, [value, color]);
  return (
    <form className='grid-item-2'>
      <h3 className='box-title'>Fill</h3>
      <input className='checkbox' type="checkbox" checked={!disabled} onChange={e => handleSwitch('clr', e.target.checked)} />


      <div className='underline' id='clr-underline'>
        <label id='clr-label' style={clrStyle}>colour</label>
        <input id='clr-input' type='color' className='color-picker' value={color} style={clrStyle} disabled={disabled} onChange={handleColour} />
      </div>

      <div className='underline' id='img-underline'>
        <label id='img-label' style={imgStyle}>img</label>
        <input type="checkbox" id='img-checkbox' checked={!imgDisabled} onChange={e => handleSwitch('img', e.target.checked)} />
      </div>

      <div className='underline' id='url-underline'>
        <label id='url-label' style={imgStyle}>URL</label>
        <input className='input' id='img-input' type='text' style={imgStyle} disabled={imgDisabled} onChange={e => { updateFill('imgURL', e.target.value) }} placeholder='absolute url only pls'/>
      </div>


    </form>
  );
}

export default Colour;
