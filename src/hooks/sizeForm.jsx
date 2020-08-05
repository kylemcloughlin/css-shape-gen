import React, {useState} from 'react';


export default function Size(props) {
  const  [size, setSize] = useState(0);
  // const test = e => {
  // console.log(e);
  // setSize(e);
  //   props.updateSize(e);
  // }
  
  return (
    <div className="grid-item-1">
      <h1 class='project-title'>CSS Shape Generator</h1>
    <form className='size-input'>
      <input 
      type='number' 
      
      // value={size}
      placeholder={`${size}`}
      onChange={e => props.updateSize(e.target.value)}
      />
      <label>Shape Size</label>
    
     </form>
    </div>
  );
}

