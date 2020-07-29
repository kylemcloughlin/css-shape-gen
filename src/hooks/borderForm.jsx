import React, { useState, useEffect } from "react";


function Border() {
  const [value, setValue] = useState(null);
  const [style, setStyle] = useState ({
    opacity: '.5'
  });
  useEffect(() => {
    if (value === true) {
      console.log('if', value);
      setStyle({
        opacity: '1'
      });
    } else {
      console.log('else', value);
      setStyle({
        opacity: '.5'
      });
    }
  },[value]);
  return (
    <form className="shape-container-01">
      <input type="checkbox" onClick={e => {setValue(e.target.checked)}} onSe value='border'/>
      <h1 style={style}>Border</h1>
    </form>
  );
}

export default Border;