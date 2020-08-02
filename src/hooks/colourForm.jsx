import React, { useState, useEffect }  from "react";
 


function Colour(props) {
  const [value, setValue] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [imgDisabled, setImgDisabled] = useState(true);

  const [clrStyle, setClrStyle] = useState({
    opacity: '1' 
  });
  const [imgStyle, setImgStyle] = useState({
    opacity: '.5'
  });
  useEffect(() => {
    console.log(value);
    if (value === true) {
      setClrStyle({   opacity: '.5'  }) 
      setImgStyle({ opacity: '1' }) 
      console.log('if', value)
      setDisabled(true);
      setImgDisabled(false);
      props.switch(value)
      
    } else {
      setClrStyle({ opacity: '1' })
      setImgStyle({ opacity: '.5' }) 
      console.log('else', value)
      setDisabled(false);
      setImgDisabled(true);
      props.switch(value)

    }
  },[value]);
  
  return (
    <form >
       <h2 style={clrStyle}>colour</h2> 
      {/* <input type="checkbox" value="clr" value='clr' onChange={e => setValue(e.target.value)}/> */}
      <input type='color' style={clrStyle} disabled={disabled} onChange={e => { props.updateFill('colorCode', e.target.value) }}/> 
         <br/>
      <h2 style={imgStyle}>img</h2>  
      <input type="checkbox" value="img" onChange={e => setValue(e.target.checked)} />
      <input type='text' style={imgStyle} disabled={imgDisabled} onChange={e => { props.updateFill('imgURL', e.target.value) }}/>
      <br/>
    </form>
  );
}

export default Colour;
