import React, { useState,  } from 'react';
const AppLogic = () => {
 const shape = useState({shape: 'square'});
  const [shapeSize, setShapeSize] = useState({size: `${10}`});
  const [fill, setFill] = useState({ type: 'colorCode', fillCode: '#444'});
  const [border, setBorder] = useState({ border: true, borderToggle: false, borderWidth: 5, borderColor: 'none'});
  const [shadow, setShadow] = useState({ shadow: true,  shadowToggle: false, shadowBlur: 1, shadowColor: 'none', shadowAlpha: 2})
    const toggleWhat = useState({ featureToggle: null, toggle: false});

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
 
    let prevState = shadow;
    return setShadow({
      shadow: prevState.shadow,
      shadowToggle: prevState.toggleBorder,
      shadowBlur: x,
      shadowColor: rgb,
      shadowAlpha: z
    })
    
  
  }

  const toggleS = (x) => {
    let prevState = shadow;
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
    //  console.log("toggleB", x);
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
        type: 'imgURL',
        fillCode: 'https://img1.nickiswift.com/img/uploads/2018/03/the-truth-about-what-happened-to-chad-kroeger-780x438_rev1.jpg'
      });

    }
  }

 
 
  return {  shape, shapeSize, fill, border, shadow, toggleWhat, handleSize, handleBorder, handleShadow, handleFill, toggleB, switchFill, toggleS }

}


export default AppLogic;