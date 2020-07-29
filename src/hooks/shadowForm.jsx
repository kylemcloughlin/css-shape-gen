import React, { useState, useEffect } from "react";


function Shadow() {
  const [value, setValue] = useState(null);
  const [style, setStyle] = useState({
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
    <form className="shape-container">
      <input type="checkbox"  onClick={e => {console.log('SHADOW',e.target.checked)}} value='shadow'/>
      <h1>Shadow</h1>
    </form>
  );
}

export default Shadow;