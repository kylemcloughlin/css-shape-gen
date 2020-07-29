import React, { useState, useEffect }  from "react";
 


function Colour() {
  const [value, setValue] = useState('clr')
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
      
    } else {
      setClrStyle({ opacity: '1' })
      setImgStyle({ opacity: '.5' }) 
      console.log('else', value)

    }
  },[value]);
  
  return (
    <form className="shape-container" >
      <input type="checkbox" value="clr" value='clr' onChange={e => setValue(e.target.value)}/>
       <h2 style={clrStyle}>colour</h2> 
         <br/>
      <input type="checkbox" value="img" onChange={e => setValue(e.target.value)} />
      <h2 style={imgStyle}>img</h2>  
      <br/>
    </form>
  );
}

export default Colour;
