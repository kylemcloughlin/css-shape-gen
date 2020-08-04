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
      <h1>CSS Shape Generator</h1>
    <form>
      <label>Shape Size</label>
      <input 
      type='number' 
      className="size-input"  
      // value={size}
      placeholder={`${size}`}
      onChange={e => props.updateSize(e.target.value)}
      />
    
     </form>
    </div>
  );
}

