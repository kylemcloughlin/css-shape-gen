import React, { useState, useEffect }  from "react";
 


function Colour() {
  const [value, setValue] = useState('clr');
  const [disabled, setDisabled] = useState(true);
  const [clrStyle, setClrStyle] = useState({
    opacity: '1' 
  });
  const [imgStyle, setImgStyle] = useState({
    opacity: '.5'
  });
  useEffect(() => {
    if (value === 'img') {
      setClrStyle({   opacity: '.5'  }) 
      setImgStyle({ opacity: '1' }) 
      console.log('if', value)
        setDisabled(false);
      
    } else {
      setClrStyle({ opacity: '1' })
      setImgStyle({ opacity: '.5' }) 
      console.log('else', value)
/// need to finish error handling for this -- so bothe cannot be selected at once and it disable the other while one is selected.
      setDisabled(true);
    }
  },[value]);
  
  return (
    <form className="shape-container" >
       <h2 style={clrStyle}>colour</h2> 
      <input type="checkbox" value="clr" value='clr' onChange={e => setValue(e.target.value)}/>
      <input type='color' style={clrStyle} disabled={disabled}/> 
         <br/>
      <h2 style={imgStyle}>img</h2>  
      <input type="checkbox" value="img" onChange={e => setValue(e.target.value)} />
      <input type='text' style={imgStyle} disabled={disabled}/>
      <br/>
    </form>
  );
}

export default Colour;
