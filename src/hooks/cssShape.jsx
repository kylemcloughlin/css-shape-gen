import React, { useState, useEffect } from "react";
import seed from './seed.js';


function Shape(props) {
  const [shapeState, setShapeState] = useState(props.props);
  const [css, setCSS] = useState(seed.css);
  const [toggleBorderCss, setToggleBorderCss] = useState(true);
  const [toggleShadowCss, setToggleShadowCss] = useState(true);


  let style = seed.css;
  useEffect(() => {
    let newStyle = {};
    props.props.map(e => {
      // console.log('mapmapmap', e)
      if (e.size) {
        for (var x in style) {
          if (x === 'width') {
            newStyle[x] = `${e.size}px`;
            seed.cssOutput[1].value = `${e.size}px`;
          } else if (x === 'height') {
            newStyle[x] = `${e.size}px`;
            seed.cssOutput[2].value = `${e.size}px`;
          }
          else {
            newStyle[x] = style[x];

          }

        }
      }
      else if (e.type) {
        newStyle.background = e.fillCode;
        seed.cssOutput[0].value = e.fillCode;
      }
      else if (e.border === true) {
        setToggleBorderCss(true);

        if (e.toggleBorder === true) {
          newStyle.border = 'hidden';
        } else if ((e.toggleBorder === false)) {
          newStyle.border = `${e.borderWidth}px solid` + e.borderColor;
          let css = seed.cssOutput;
        for (let x in css) {
          if (css[x].style === 'border') {
                console.log('<3');
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



    })

    setCSS(newStyle);

    setShapeState(props);
  }, [props]);

  return (
    <div class='body'>
      <div class="shape-grid-container">
        <div class="shape-container">
          <div style={ {width: '79px', height: '0',
          position: 'absolute',
          top: '101.4px',
          zIndex: 1,
          borderBottom: '50px solid red',
          borderLeft: '40px solid #888',
          borderRight: '40px solid#888',
    }}></div>
          <div className="shape" id="octagon" style={css}/>
             
              <div style={{
                width: '79px', height: '0',
                position: 'absolute',
                bottom: '100.51px',
                zIndex: 1,
                borderTop: '50px solid red',
                borderLeft: '40px solid #888',
                borderRight: '40px solid#888',
              }}/>
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
                console.log('shadow')
                
                return (<span></span>)
              } else if (toggleShadowCss === true && el['style'] === 'shadow') {
                console.log('shadow')
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
