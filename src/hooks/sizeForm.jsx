import React, {useState, useEffect} from 'react';


export default function Size(props) {
  const  [size, setSize] = useState(150);
  useEffect(() => {
    props.updateSize(size);
  }
  ,[size]);
  
  
  return (
    <div className="grid-item-1">
      <h2 className='project-title'>CSS Shape Generator</h2>
    <div className='underline' id='size-underline'>
    <form className='size-input'>
      <input  type='number' className='number-selector' value={size} onChange={e => setSize(e.target.value)}/>
      <label>Shape Size</label>
     </form>
    </div>
    
    </div>
  );
}

