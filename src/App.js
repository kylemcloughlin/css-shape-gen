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
  const [border, setBorder] = useState({ border: true, borderToggle: false, borderWidth: 5, borderColor: 'none'});
  const [shadow, setShadow] = useState({ shadow: true,  shadowToggle: false, shadowBlur: 1, shadowColor: 'none', shadowAlpha: 2})
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
      return setBorder({
        border: prevState.border,
        toggleBorder: prevState.toggleBorder,
        borderWidth: x,
        borderColor: y 
    });
  };
    
  
  const handleShadow = (x, rgb, z) => {
    console.log(rgb);  
    let prevState = shadow;
    return setShadow({
      shadow: prevState.shadow,
      shadowToggle: prevState.toggleBorder,
      shadowBlur: x,
      shadowColor: rgb,
      shadowAlpha: z
    })
    
    
      // if (x === 1) {
    //   // console.log('1', y);       
    //     return setShadow({
    //       shadow: prevState.shadow,
    //       shadowToggle: prevState.shadowToggle,
    //       shadowBlur: y,
    //       shadowColor: prevState.shadowColor,
    //       shadowAlpha: prevState.shadowAlpha
    //      });
    //    }
    //    if (x === 2) {
    //      return setShadow({
    //        shadow: prevState.shadow,
    //        shadowToggle: prevState.shadowToggle,
    //        shadowBlur: prevState.shadowBlur,
    //        shadowColor: y,
    //        shadowAlpha: prevState.shadowAlpha
    //      });

    //    }
    //   if (x === 3) {
    //      return setShadow({
    //        shadow: prevState.shadow,
    //        shadowToggle: prevState.shadowToggle,
    //        shadowBlur: prevState.shadowBlur,
    //        shadowColor: prevState.shadowColor,
    //        shadowAlpha: y
    //      });
  //  }
  }
  const toggleS = (x) => {
    let prevState = shadow;
    console.log('TOGGGLE SHADOW', x);
    return setShadow({
      shadow: true,
      shadowToggle: x,
      shadowBlur: prevState.shadowBlur,
      shadowColor: prevState.shadowColor,
      shadowAlpha: prevState.shadowAlpha
    })
   
  }
 const toggleB = (x) => {
     let prevState = border;
     console.log("TOGGLE", x);
    ;
     return setBorder({
       border: true,
       toggleBorder: x,
       borderWidth: prevState.borderWidth,
       borderColor: prevState.borderColor,
       
     })
    }
  const switchFill = (x) => {
    let  prevState = toggleWhat;
    prevState.fill = x;

    if (x) {
      return setFill({
        type: 'color',
        fillCode: 'url(https://images.freeimages.com/images/small-previews/2ae/bokeh-background-in-light-tan-rose-1635915.jpg)'
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
        <Colour updateFill={handleFill} switch={switchFill}/>
        <Border updateBorder={handleBorder} toggleBorder={toggleB}/>
        <Shadow updateShadow={handleShadow} toggleShadow={toggleS}/>
      </header> 
        <Shape props={[{...shape},{...toggleWhat},{...shapeSize},{...fill},{...border},{...shadow}]} />
      {/* fix this props = it looks bad  */}
    </div>
  );
}

export default App;


