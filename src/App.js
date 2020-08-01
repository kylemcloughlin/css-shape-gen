import React, { useState, useEffect, useCallback } from 'react';
import Shape from './hooks/cssShape.jsx';
import Size from './hooks/sizeForm.jsx';
import Colour from './hooks/colourForm.jsx';
import Shadow from './hooks/shadowForm.jsx';
import Border from './hooks/borderForm.jsx';
import './App.css';

function App() {
  const [shapeSize, setShapeSize] = useState(0);
  const [fill, setFill] = useState({ type: 'color', code: '#444'});
  const [border, setBorder] = useState({ borderWidth: null, borderColor: null});
  const [shadow, setShadow] = useState({ shadowBlur: null, ShadowColor: "#444", shadowAlpha: 0});
  const handleSize = x => {
    
    setShapeSize({size: Number(x)});
  }
  const handleFill = (x, y) => {
  setFill({
    type: x,
    code: y
  });
  };

  const handleBorder = (x, y) => {
   setBorder({
     borderWidth: x,
     borderColor: y
   });
  }
  const handleShadow = (x, y) => {
    setShadow({
      x: '233'
    })
  }

  return (
      <div className="App">
      <header className="App-header">
      <h1>CSS Shape Generator</h1>
      </header>
      <div>
        <Size updateSize={handleSize}/>
        <Colour updateFill={handleFill}/>
        <Border updateBorder={handleBorder}/>
        <Shadow updateShadow={handleShadow}/>
        <Shape {...shapeSize} {...fill} {...border} {...shadow}/>
      </div>
    </div>
  );
}

export default App;