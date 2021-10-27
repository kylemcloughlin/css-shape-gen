import React, {useState, useEffect} from 'react';
import SizeLogic from './SizeLogic.js';

export default function Size({updateSize}) {
  let {handleUpdate, size } = SizeLogic();
  
  useEffect(() => {
    updateSize(size);
  }
  ,[size]);
  return (
    <div className="grid-item-1">
      <h2 className='project-title'>CSS Shape Generator</h2>
    <div className='underline' id='size-underline'>
    <form className='size-input'>
      <input  type='number' id='size' value={size} onChange={handleUpdate}/>
      <label className='size-label'>Shape Size</label>
     </form>
    </div>
    
    </div>
  );
}

