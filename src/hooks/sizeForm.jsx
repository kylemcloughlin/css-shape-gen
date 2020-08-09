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
      <h2 class='project-title'>CSS Shape Generator</h2>
    <form className='size-input'>
    <div class='underline'>
      <input  type='number' class='number-selector' placeholder={`${size}`} onChange={e => props.updateSize(e.target.value)}/>
      <label>Shape Size</label>
    </div>
    
     </form>
    </div>
  );
}

