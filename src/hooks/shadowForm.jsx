import React, { useState, useEffect } from "react";
// import { enabled } from "ansi-colors";

function Shadow(props) {
  const [value, setValue] = useState(false);
  const [blur, setBlur] = useState(6);
  const [shadowColor, setShadowColor] = useState('#000000');
  const [toRGB, setToRGB] = useState();
  const [alpha, setAlpha] = useState(5);
  const [style, setStyle] = useState({
    opacity: '.5'
  });
  const [disabled, setDisabled] = useState(true);
  const hexToRgb = (hex) => {
    setShadowColor(hex);
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    let output = result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
    setToRGB(output);
    // console.log('!!!!!!!!!!!', output);
  };
  useEffect(() => {
    hexToRgb(shadowColor);
    if (value === true) {
      setDisabled(false);
      setStyle({ opacity: '1' });
      props.updateShadow(blur, toRGB, alpha);
    } else {
      setStyle({ opacity: '.5' });
      // props.toggleShadow(value);
      setDisabled(true);

    }
  }, [value, blur, shadowColor, alpha]);

  const handleToggle = (e) => {
    setValue(e);
    props.toggleShadow(value);
  }
  return (
    <div className='grid-item-4'>
      <form>
        {/* <div className='underline'> */}
        <h3 className='box-title'>Shadow</h3>
        <input className='checkbox' type="checkbox" onClick={e => { handleToggle(e.target.checked) }} />
        {/* </div> */}
      </form>
      <form style={style} >
        <div className='underline' id='blur-underline'>
          <label id='blur-label'>Blur</label>
          <input type='number' id='blur' className='number-selector' value={blur} onChange={e => { setBlur(e.target.value) }} disabled={disabled} />
        </div>
        <div className='underline' id='shadow-clr-underline'>
          <label id='shadow-clr-label'>Colour</label>
          <input id='shadow-clr' className='color-picker' type='color' value={shadowColor} disabled={disabled} onChange={e => { hexToRgb(e.target.value) }} />
        </div>
        <div className='underline' id='alpha-underline'>
          <label id='alpha-label'>Alpha</label>
          <input id='alpha' type='range' max='99' min='11' value={alpha} disabled={disabled} onChange={e => { setAlpha(e.target.value) }} />
        </div>

      </form>
    </div>
  );
}

export default Shadow;