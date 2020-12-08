import React, { useState, useEffect} from "react";



function Colour(props) {
  const [value, setValue] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [imgDisabled, setImgDisabled] = useState(true);
  const [color, setColor] = useState('#6C6CC7');

  const [clrStyle, setClrStyle] = useState({ opacity: '1' });
  const [imgStyle, setImgStyle] = useState({ opacity: '.5' });
  useEffect(() => {
    // console.log(value);
    if (value === true) {
    
      props.switch(value);
    } else {
      props.updateFill('colorCode', color);
      props.switch(value);

    }
  }, [value, color]);

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

  return (
    <form className='grid-item-2'>
      <h3 className='box-title'>Fill</h3>
      <input className='checkbox' type="checkbox" checked={!disabled} onChange={e => handleSwitch('clr', e.target.checked)} />


      <div className='underline' id='clr-underline'>
        <label id='clr-label' style={clrStyle}>colour</label>
        <input id='clr-input' type='color' className='color-picker' value={color} style={clrStyle} disabled={disabled} onChange={e => { setColor(e.target.value) }} />
      </div>

      <div className='underline' id='img-underline'>
        <label id='img-label' style={imgStyle}>img</label>
        <input type="checkbox" id='img-checkbox' checked={!imgDisabled} onChange={e => handleSwitch('img', e.target.checked)} />
      </div>

      <div className='underline' id='url-underline'>
        <label id='url-label' style={imgStyle}>URL</label>
        <input className='input' id='img-input' type='text' style={imgStyle} disabled={imgDisabled} onChange={e => { props.updateFill('imgURL', e.target.value) }} placeholder='absolute url only pls'/>
      </div>


    </form>
  );
}

export default Colour;
