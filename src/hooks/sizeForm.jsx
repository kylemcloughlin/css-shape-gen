import React, {useState} from 'react';


export default function Size() {
  const  [size, setSize] = useState(0);
  const test = e => {
    e.preventDefault();
    console.log(size);
  }
  
  return (
    <form className="size-form-container" onSubmit={test}>
      <label>em
      <input 
      type='number' 
      className="size-input"  
       value={size}
       placeholder={`${size}`}
       onChange={e => setSize(e.target.value)}/>
      </label>
    </form>
  );
}

