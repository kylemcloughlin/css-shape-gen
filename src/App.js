import React, { useState, useEffect, useCallback } from 'react';
import Shape from './hooks/cssShape.jsx';
import Size from './hooks/sizeForm.jsx';
import './App.css';

function App() {
  const [state, setState] = useState({
    size: 'number'
  });
  const handleSize = x => {
    console.log(x);
  }
  
  return (
      <div className="App">
      <header className="App-header">
      <h1>CSS Shape Generator</h1>
      </header>
      <div>
        {/* <Shape/> */}
  
        <Size updateSize={handleSize}/>

      </div>
    </div>
  );
}

export default App;
