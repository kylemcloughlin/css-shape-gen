import React, { useState, useEffect } from "react";
import { enabled } from "ansi-colors";


function Shadow(props) {
  const [value, setValue] = useState(false);
  const [style, setStyle] = useState({
    opacity: '.5'
  });
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    if (value === true) {
      console.log('if', value);
      setDisabled(false);
      setStyle({
        opacity: '1'
      });
      props.toggleShadow(value, "shadow");

    } else {
      console.log('else', value);
      setStyle({
        opacity: '.5'
      });
      props.toggleShadow(value, "shadow");
      setDisabled(true);

    }
  },[value]);
  return (
    <div class='grid-item-4'>
    <form>
      <h3 class='box-title'>Shadow</h3>
      <input class='checkbox' type="checkbox" onClick={e => { setValue(e.target.checked)}}/>
    </form>
      <form style={style}>
     <label id='blur-label'>Blur</label>
        <input type='number' id='blur' onChange={e => { props.updateShadow( 1, e.target.value) }} disabled={disabled}/>
        <label id='shadow-clr-label'>Colour</label>
        <input id='shadow-clr' type='color' disabled={disabled} onChange={e => { props.updateShadow(2, e.target.value) }}/>
        <label id='alpha-label'>Alpha</label>
        <input id='alpha'type='range' disabled={disabled} onChange={e => {props.updateShadow(3, e.target.value)}}/> 

    </form>
    </div>
  );
}

export default Shadow;