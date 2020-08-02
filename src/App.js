import React, { useState, useEffect, useCallback } from 'react';
import Shape from './hooks/cssShape.jsx';
import Size from './hooks/sizeForm.jsx';
import Colour from './hooks/colourForm.jsx';
import Shadow from './hooks/shadowForm.jsx';
import Border from './hooks/borderForm.jsx';
import './styles/styles.css';

function App() {
  const [shape,setShape] = useState({shape: 'square'});
  const [shapeSize, setShapeSize] = useState({size: `${10}`});
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
  const [toggleWhat, setToggleWhat] = useState({
    shadow: true,
    border: true,
    fill:   true
  })
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
  const toggle = (x, y) => {
    let prevState = toggleWhat;
    console.log("TOGGLE", x);
    console.log("WHAT", y);
     for (var z in prevState) {
          console.log(z);
          if (z === y) {
            prevState[z] = x;
            console.log('eleleelel', prevState)
          }
     }
  }
 
  const witch = (x) => {
    let  prevState = toggleWhat;
    prevState.fill = x;
    console.log('switch', prevState);
  }


  return (
      <div className="App">
      <header className="App-header">
      <h1>CSS Shape Generator</h1>
      </header>
      <div>
        <Size updateSize={handleSize}/>
        <Colour updateFill={handleFill} switch={witch}/>
        <Border updateBorder={handleBorder} toggleBorder={toggle}/>
        <Shadow updateShadow={handleShadow} toggleShadow={toggle}/>
        <Shape props={[{...shape},{...shapeSize},{...fill},{...bWidth},{...bColor},{...scolor},{...sBlur},{...sAlpha}]} toggle={toggleWhat}/>
      </div> 
      {/* fix this props = it looks bad  */}
    </div>
  );
}

export default App;