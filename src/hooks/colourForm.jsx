import React, { useState, useEffect }  from "react";
 


function Colour(props) {
  const [value, setValue] = useState(false);
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
    <form className='grid-item-2'>
      <h3 class='box-title'>Fill</h3> 

      <input class='checkbox' type="checkbox" value="clr" value='clr' onChange={e => setValue(e.target.value)}/>
       <label id='clr-label'style={clrStyle}>colour</label> 
      <input id='clr-input' type='color' class='color-picker' style={clrStyle} disabled={disabled} onChange={e => { props.updateFill('colorCode', e.target.value) }}/> 
      <label id='img-label' style={imgStyle}>img</label> 
      <input type="checkbox" id='img-checkbox' value="img" onChange={e => setValue(e.target.checked)} />
      <label id='url-label' style={imgStyle}>URL</label>  
      <input class='input' id='img-input'  type='text' style={imgStyle} disabled={imgDisabled} onChange={e => { props.updateFill('imgURL', e.target.value) }}/>
      <br/>
    </form>
  );
}

export default Colour;
