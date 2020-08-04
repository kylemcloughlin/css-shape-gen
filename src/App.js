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
  const [border, setBorder] = useState({ border: true, borderToggle: false, borderWidth: '5', borderColor: '#333'});
  const [shadow, setShadow] = useState({ shadow: true,  shadowToggle: false, shadowBlur: 1, shadowColor: '#333', shadowAlpha: 2})
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
      let prevState = shadow;
    if (x === 1) {
      console.log('1', y);       
        return setShadow({
          shadow: prevState.shadow,
          shadowToggle: prevState.shadowToggle,
          shadowBlur: y,
          shadowColor: prevState.shadowColor,
          shadowAlpha: prevState.shadowAlpha
         });
       }
       if (x === 2) {
         return setShadow({
           shadow: prevState.shadow,
           shadowToggle: prevState.shadowToggle,
           shadowBlur: prevState.shadowBlur,
           shadowColor: y,
           shadowAlpha: prevState.shadowAlpha
         });

       }
      if (x === 3) {
         return setShadow({
           shadow: prevState.shadow,
           shadowToggle: prevState.shadowToggle,
           shadowBlur: prevState.shadowBlur,
           shadowColor: prevState.shadowColor,
           shadowAlpha: y
         });
   }
  }
  const toggleS = (x, y) => {
    let prevState = shadow;
    console.log("TOGGLE", x);
    console.log("WHAT", y);
    // console.log("prevState", prevState);
    return setShadow({
      shadow: prevState.shadow,
      shadowToggle: x,
      shadowBlur: prevState.shadowBlur,
      shadowColor: prevState.shadowColor,
      shadowAlpha: prevState.shadowAlpha
    })
   
  }
 const toggleB = (x, y) => {
     let prevState = border;
     console.log("TOGGLE", x);
    ;
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
      {/* <header className="App-header"> */}
      {/* </header> */}
      <header className='grid-container'>
      
        <Size updateSize={handleSize}/>
        <Colour updateFill={handleFill} switch={witch}/>
        <Border updateBorder={handleBorder} toggleBorder={toggleB}/>
        <Shadow updateShadow={handleShadow} toggleShadow={toggleS}/>
      </header> 
        <Shape props={[{...shape},{...toggleWhat},{...shapeSize},{...fill},{...border},{...shadow}]} />
      {/* fix this props = it looks bad  */}
    </div>
  );
}

export default App;