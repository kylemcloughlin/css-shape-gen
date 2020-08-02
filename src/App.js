import React, { useState, useEffect, useCallback } from 'react';
import Shape from './hooks/cssShape.jsx';
import Size from './hooks/sizeForm.jsx';
import Colour from './hooks/colourForm.jsx';
import Shadow from './hooks/shadowForm.jsx';
import Border from './hooks/borderForm.jsx';
import './styles/styles.css';

function App() {
  const [shape,setShape] = useState({shape: 'square'});
  const [shapeSize, setShapeSize] = useState({size: `${50}`});
  const [fill, setFill] = useState({ type: 'color', fillCode: '#444'});
  const [bWidth, setBWidth] = useState({ borderWidth: null});
  const [bColor, setBColor] = useState({ borderColor: null});
  const [sBlur, setSBlur] = useState({
    shadowBlue: null
  })
  const [scolor, setSColor] = useState({
    shadowColor: '#444'
  })
  const [sAlpha, setSAlpha] = useState({
    shadowAlpha: 0
  });
  const handleSize = x => {
    
    setShapeSize({size: Number(x)});
  }
  const handleFill = (x, y) => {
  setFill({
    type: x,
    fillCode: y
  });
  };

  const handleBorder = (x, y) => {
    console.log(x, y);
    if (x === 1) {
     return  setBWidth({
        borderWidth: `${y}px`
      });
    } 
    if (x === 2 ) {
     return  setBColor({
        borderColor: y
      });
    }
  }
  const handleShadow = (x, y) => {
       if (x === 1) {
         return setSBlur({
           shadowBlur: `${y}px`
         });
       }
       if (x === 2) {
         return setSColor({
           shadowColor: y
         });

       }
      if (x === 3) {
        return setSAlpha({
          shadowAlpha: y
        });
   }
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
        <Shape props={[{...shape},{...shapeSize},{...fill},{...bWidth},{...bColor},{...scolor},{...sBlur},{...sAlpha}]}/>
      </div>
    </div>
  );
}

export default App;