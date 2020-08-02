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
      props.toggleBorder(value, "border");
      setStyle({
        opacity: '1'
      });
    } else {
      console.log('else', value);
      setStyle({
        opacity: '.5'
      });
      setDisabled(true);
      props.toggleBorder(value, "border");


    }
  }, [value]);
  return (
    <div className="shape-container-01">
      <form>
        <label>Border</label>
        <input type="checkbox" onClick={e => { setValue(e.target.checked) }} value='border' />
      </form>
      <form>
       <label> Border Width</label>
        <input type='number' style={style} disabled={disabled} onChange={e => { props.updateBorder(1, e.target.value) }}/>
        <label> Border Colour</label>
        <input type='color' style={style} disabled={disabled} onChange={e => { props.updateBorder(2, e.target.value) }}/>
      </form>
    </div>
  );
}

export default Border;