import React, { useState, useEffect } from "react";
import { enabled } from "ansi-colors";


function Shadow(props) {
  const [value, setValue] = useState(null);
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
    } else {
      console.log('else', value);
      setStyle({
        opacity: '.5'
      });
      setDisabled(true);

    }
  },[value]);
  return (
    <div className="shape-container">
    <form>
      <h1>Shadow</h1>
      <input type="checkbox" onClick={e => { setValue(e.target.checked)}} value='shadow'/>
    </form>
      <form style={style}>
     <label>Shadow Blur</label>
        <input type='number' onChange={e => { props.updateShadow('shadow-color', e.target.value) }} disabled={disabled}/>
        <label>Shadow Colour</label>
        <input type='color' disabled={disabled} onChange={e => { props.updateShadow('shadow-color', e.target.value) }}/>
        <label>Shadow Alpha</label>
        <input type='range' disabled={disabled} onChange={e => {props.updateShadow('shadow-alpha', e.target.value)}}/> 

    </form>
    </div>
  );
}

export default Shadow;