import React, { useState, useEffect } from "react";
import seed from './seed.js';

let updateOuterSquare = (size, borderWidth) => {
  let newSize = [];
  let add = borderWidth * 2;
  let output = size.split('');
  for (let x of output) {
    console.log(isNaN(x));
    if (isNaN(x)) {
   

    } else {
      newSize.push(x);
    }
  }
  newSize = newSize.join("")
  return `${Number(newSize) + add}px `;
}

function Shape(props) {
  const [shapeState, setShapeState] = useState(props.props);
  const [css, setCSS] = useState(seed.css);
  const [innerCss, setInnerCss] = useState(seed.css);
  const [bottomCss, setBottomCSS] = useState({
    width: '60px',
    bottom: '100px',
  });

  const [toggleBorderCss, setToggleBorderCss] = useState(true);
  const [toggleShadowCss, setToggleShadowCss] = useState(true);


  let style = seed.css;
  useEffect(() => {
    let newStyle = {};
    let innerStyle = {};
    let bottomStyle = {};
    props.props.map(e => {
      // console.log('mapmapmap', e)
      if (e.size) {
        for (var x in style) {
          if (x === 'width') {
            newStyle[x] = `${e.size}px`;
            innerStyle[x] = `${e.size}px`;

          } else if (x === 'height') {
            newStyle[x] = `${e.size}px`;
            innerStyle[x] = `${e.size}px`;

          }
          else {
            newStyle[x] = style[x];

          }

        }
      }
      else if (e.type) {
       console.log('hit', e.type);
        innerStyle.background = e.fillCode;
        seed.cssOutput[0].value = e.fillCode;
      }
      else if (e.border === true) {
        setToggleBorderCss(true);

        if (e.toggleBorder === true) {
          innerStyle.border = 'hidden';
        } else if ((e.toggleBorder === false)) {
          innerStyle.border = `${e.borderWidth}px solid` + e.borderColor;
        
        let withBorderSize = updateOuterSquare(newStyle.width, e.borderWidth);
        // console.log('!!!', e.borderWidth);
        newStyle.width =  withBorderSize;
        newStyle.height = withBorderSize;

        // console. log('</3', newHeight);

          let css = seed.cssOutput;
        for (let x in css) {
          if (css[x].style === 'border') {
            css[x].value = `${e.borderWidth}px solid ${e.borderColor}`;
              } 

        }
          setToggleBorderCss(false);
        } else {

        }
      }
      else if (e.shadow === true) {
     console.log('!!!@@!', e.shadowToggle)
     if (e.shadowToggle === true) {
       newStyle.boxShadow = 'none';
       setToggleShadowCss(true);
     } else if (e.shadowToggle === undefined) {
       let css = seed.cssOutput;
      newStyle.boxShadow = `50px 50px ${e.shadowBlur}px rgba(${e.shadowColor.r},${e.shadowColor.g},${e.shadowColor.b},0.${e.shadowAlpha})`;
       for (let x in css) {
         if (css[x].style === 'shadow') {
           console.log('<3');
           css[x].value = `50px 50px ${e.shadowBlur}px rgba(${e.shadowColor.r},${e.shadowColor.g},${e.shadowColor.b},0.${e.shadowAlpha})`;
         } 
        setToggleShadowCss(false);
        } 
      } else {}
      }

      else {
        // console.log('hit')
      }



    });
    setInnerCss(innerStyle);
    setCSS(newStyle);
    setShapeState(props);
  }, [props]);

  return (
    <div class='body'>
      <div class="shape-grid-container">
        <div class="shape-container">
          <div class='octagon' id='outer' style={css}>
            <div class='border-helper' id='t'></div>
            <div class='border-helper' id='b'></div>
            <div class='border-helper' id='l'></div>
            <div class='border-helper' id='r'></div>
            <div class='octagon' id='inner'style={innerCss}>
            </div>
          </div>
        </div>
      </div>
    
    
      <div className='output-container'>
     
     
        <h4>HTML</h4>
        <div class='html-css-container'>

          <p className='csshtml'>{seed.html}</p>
        </div>
     
        <h4>CSS</h4>
        <p class='html-css-container'>
          {
            seed.cssOutput.map(el => {
              if (toggleBorderCss === true && el['style'] === 'border') {
              
                
                return (<span></span>)
              } else if (toggleShadowCss === true && el['style'] === 'shadow') {
           
                return (<span></span>)
              } else {
                return (
                  <span>{el['style']}: {el['value']};</span>
                )
              }


            })
          }
        </p>
      </div>
    </div>
  );
}

export default Shape;
