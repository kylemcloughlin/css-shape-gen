import React, { useState, useEffect } from "react";
import ShadowLogic from './ShadowLogic.js';

function Shadow({ toggleShadow, updateShadow}) {
  let { hexToRgb, toRGB, handleBlur, handleAlpha, alpha, blur, disabled, setDisabled, value, setValue, shadowColor, style, setStyle} = ShadowLogic();

  const handleToggle = (e) => {
      setValue(e);
      toggleShadow(value);
     
  }
  useEffect(() => {
    hexToRgb(shadowColor);
    if (value) {
      setDisabled(false);
      setStyle({ opacity: '1' });
      updateShadow(blur, toRGB, alpha);
    } else {
      setStyle({ opacity: '.5' });
      setDisabled(true);
    }

    
  }, [value, blur, shadowColor, alpha]);



  return (
    <div className='grid-item-4'>
      <form>
        <h3 className='box-title'>Shadow</h3>
        <input className='checkbox' type="checkbox" onClick={e => { handleToggle(e.target.checked) }} />
      </form>
      <form style={style} >
        <div className='underline' id='blur-underline'>
          <label id='blur-label'>Blur</label>
          <input type='number' id='blur' className='number-selector' value={blur} onChange={handleBlur} disabled={disabled} />
        </div>
        <div className='underline' id='shadow-clr-underline'>
          <label id='shadow-clr-label'>Colour</label>
          <input id='shadow-clr' className='color-picker' type='color' value={shadowColor} disabled={disabled} onChange={e => {{hexToRgb(e.target.value)}}} />
        </div>
        <div className='underline' id='alpha-underline'>
          <label id='alpha-label'>Alpha</label>
          <input id='alpha' type='range' max='99' min='11' value={alpha} disabled={disabled} onChange={handleAlpha} />
        </div>

      </form>
    </div>
  );
}

export default Shadow;