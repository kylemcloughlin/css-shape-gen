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
  const [border, setBorder] = useState({ border: true, borderToggle: false, borderWidth: '5', borderColor: 'black'});
  const [sBlur, setSBlur] = useState({
    shadowBlue: null
  });
  const [scolor, setSColor] = useState({
    shadowColor: '#444'
  });
  const [sAlpha, setSAlpha] = useState({
    shadowAlpha: 0
  });
  const [toggleWhat, setToggleWhat] = useState({ featureToggle: null, toggle: false});
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
      let prevState = border;
      console.log('prevSTATE.borderWidth', prevState.borderColor)
    console.log(x, y);
    if (x === 1) {
      console.log('1', y);
     return  setBorder({
       border: prevState.border,
       toggleBorder: prevState.toggleBorder,
        borderWidth: y,
        borderColor: prevState.borderColor
        
      });

    } 
    if (x === 2 ) {
      console.log(`${y} !!!!!`, y.toString() === String());
      return  setBorder({
        border: prevState.border,
        toggleBorder: prevState.toggleBorder,
        borderWidth: prevState.borderWidth,
        borderColor: `${y}`
      });
    }
  }
  const handleShadow = (x, y) => {
      console.log('!!!!!!', x);   
    if (x === 1) {
      console.log('1', y);       
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
  const toggleS = (x, y) => {
    // let prevState = toggleWhat;
    console.log("TOGGLE", x);
    console.log("WHAT", y);
    // console.log("prevState", prevState);
    return setToggleWhat({
      featureToggle: x,
      toggle: y
    })
   
  }
 const toggleB = (x, y) => {
     let prevState = border;
     console.log("TOGGLE", x);
    //  console.log("WHAT", y);
     // console.log("prevState", prevState);
     return setBorder({
       border: true,
       toggleBorder: x,
       borderWidth: prevState.borderWidth,
       borderColor: prevState.borderColor
     })
    }
  const witch = (x) => {
    let  prevState = toggleWhat;
    prevState.fill = x;
    console.log(x);
    if (x) {
      return setFill({
        type: 'color',
        fillCode: 'url(http://csshexagon.com/img/meow.jpg)'
      });

    }
    // return setToggleWhat({ toggle: 'fill', toggleType: x});
  }


  return (
      <div className="App">
      <header className="App-header">
      <h1>CSS Shape Generator</h1>
      </header>
      <div>
        <Size updateSize={handleSize}/>
        <Colour updateFill={handleFill} switch={witch}/>
        <Border updateBorder={handleBorder} toggleBorder={toggleB}/>
        <Shadow updateShadow={handleShadow} toggleShadow={toggleS}/>
        <Shape props={[{...shape},{...toggleWhat},{...shapeSize},{...fill},{...border},{...scolor},{...sBlur},{...sAlpha}]} />
      </div> 
      {/* fix this props = it looks bad  */}
    </div>
  );
}

export default App;