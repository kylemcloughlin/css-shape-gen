import React, { useState, useEffect } from "react";


function Border() {
  const [value, setValue] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [style, setStyle] = useState({
    opacity: '.5' 
  });
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
    }
  }, [value]);
  return (
    <div className="shape-container-01">
      <form>
        <label>Border</label>
        <input type="checkbox" onClick={e => { setValue(e.target.checked) }} onSe value='border' />
      </form>
      <form>
       <label> Border Width</label>
        <input type='number' style={style} disabled={disabled}/>
        <label> Border Colour</label>
        <input type='color' style={style} disabled={disabled}/>
      </form>
    </div>
  );
}

export default Border;