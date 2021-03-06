import React, { useState, useEffect } from "react";


function Border(props) {
  const [value, setValue] = useState(false);
  const [width, setWidth] = useState(5);
  const [color, setColor] = useState('#000000');
  const [disabled, setDisabled] = useState(true);
  const [style, setStyle] = useState({
    opacity: '.5' 
  });
  useEffect(() => {
    if (value === true) {
      setDisabled(false);
      setStyle({ opacity: '1' });
      props.updateBorder(width, color);
      // props.toggleBorder(value);
      // props.updateBorder(2, color);
      // console.log( width, color);
      // setWidth(5);
    } else {
      setStyle({   opacity: '.5' });
      setDisabled(true);
    
      
    }
  }, [value, width, color]);
  
  const handleToggle = (e) => {
    setValue(e);
      // console.log('handle toggle', e)
    props.toggleBorder(e);
  }
  return (
    <div className="grid-item-3">
      <form>
        <h3 className='box-title'>Border</h3>
        <input className='checkbox' type="checkbox" onClick={e => { handleToggle(e.target.checked) }} value='border' />
      </form>
      <form>
        <div className='underline' id='border-w-underline'>
        <label id='border-width-label'>Width</label>
        <input className='number-selector' type='number' id='border-width' value={width} style={style} disabled={disabled} onChange={e => { setWidth(e.target.value)}}/>
        </div>
       <div className='underline' id='border-c-underline'>
        <label id='border-color-label'>Colour</label>
        <input className='color-picker' id='border-color' className='color-picker' type='color' value={color} style={style} disabled={disabled} onChange={e => { setColor(e.target.value)}}/>
       </div>
      </form>
    </div>
  );
}

export default Border;