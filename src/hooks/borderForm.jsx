import React, { useState, useEffect } from "react";


function Border(props) {
  const [value, setValue] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [style, setStyle] = useState({
    opacity: '.5' 
  });
  useEffect(() => {
    if (value === true) {
      console.log('if', value);
      setDisabled(false);
      props.toggleBorder(value);
      setStyle({
        opacity: '1'
      });
    } else {
      console.log('else', value);
      setStyle({
        opacity: '.5'
      });
      setDisabled(true);
      props.toggleBorder(value);


    }
  }, [value]);
  return (
    <div className="grid-item-3">
      <form>
        <h3 class='box-title'>Border</h3>
        <input class='checkbox' type="checkbox" onClick={e => { setValue(e.target.checked) }} value='border' />
      </form>
      <form>
        <div class='underline' id='border-w-underline'>
        <label id='border-width-label'>Width</label>
        <input class='number-selector' type='number' id='border-width' style={style} disabled={disabled} onChange={e => { props.updateBorder(1, e.target.value) }}/>
        </div>
       <div class='underline' id='border-c-underline'>
        <label id='border-color-label'>Colour</label>
        <input class='color-picker' id='border-color' class='color-picker' type='color' style={style} disabled={disabled} onChange={e => { props.updateBorder(2, e.target.value) }}/>
       </div>
      </form>
    </div>
  );
}

export default Border;