import React, { useState, useEffect } from "react";
import seed from './seed.js';

let updateOuterSquare = (size, borderWidth) => {
  let newSize = [];
  let add = borderWidth;
  let output = size.split('');
  for (let x of output) {

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
  const [toggleBorderCss, setToggleBorderCss] = useState(false);
  const [topBottom, setTopBottom] = useState({
    width: '62px',
    height: '5px',
    backgroundColor: 'black',
    visibility: 'hidden',

  });
  const [rightLeft, setRightLeft] = useState({
    height: '62px',
    width: '5px',
    backgroundColor: 'black',
    visibility: 'hidden',


  })

  const [toggleShadowCss, setToggleShadowCss] = useState(true);


  let style = seed.css;
  useEffect(() => {
    let newStyle = {};
    let innerStyle = {};
    let newRightLeftBorder = {};
    let newTopBottomBorder = {};
    let baseSide = 62;
    props.props.map(e => {
      console.log('e.border', e.border)

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
        if (toggleBorderCss === false) {

          let update = e.size - 150;
          update = update * 0.44;
          baseSide = baseSide + update;
        }
      }
      else if (e.type) {
        console.log('e.type', e.type);
        innerStyle.background = e.fillCode;
        seed.cssOutput[0].value = e.fillCode;
      }
      else if (e.border === true) {
        // setToggleBorderCss(true);
        console.log('e.border === true');

        if (e.toggleBorder === false) {
          setToggleBorderCss(false)
          innerStyle.border = 'hidden';
        } else if ((e.toggleBorder === true)) {
          setToggleBorderCss(true);
          innerStyle.border = `${e.borderWidth}px solid` + e.borderColor;
          let withBorderSize = updateOuterSquare(newStyle.width, e.borderWidth * 2);
          newStyle.width = withBorderSize;
          newStyle.height = withBorderSize;


          let css = seed.cssOutput;
          for (let x in css) {
            if (css[x].style === 'border') {
              css[x].value = `${e.borderWidth}px solid ${e.borderColor}`;
              newRightLeftBorder = {
                height: `${baseSide}px`,
                width: `${e.borderWidth}px`,
                backgroundColor: `${e.borderColor}`,
                visibility: 'visible',
              };
              newTopBottomBorder = {
                width: `${baseSide}px`,
                height: `${e.borderWidth}px`,
                backgroundColor: `${e.borderColor}`,
                visibility: 'visible',
              };

            }

          }
        } else {
          setToggleBorderCss(false);
        }
      }
      else if (e.shadow === true) {
        if (e.shadowToggle === true) {
          newStyle.boxShadow = 'none';
          setToggleShadowCss(true);
        } else if (e.shadowToggle === undefined) {
          let css = seed.cssOutput;
          console.log('hit pre')
          newStyle.boxShadow = `-41px 0px ${e.shadowBlur}px -37px rgba(${e.shadowColor.r},${e.shadowColor.g},${e.shadowColor.b},0.${e.shadowAlpha}), 
          41px 0px ${e.shadowBlur}px -37px rgba(${e.shadowColor.r},${e.shadowColor.g},${e.shadowColor.b},0.${e.shadowAlpha}),
          0px -41px ${e.shadowBlur}px -37px rgba(${e.shadowColor.r},${e.shadowColor.g},${e.shadowColor.b},0.${e.shadowAlpha}),
          0px 41px ${e.shadowBlur}px -37px rgba(${e.shadowColor.r},${e.shadowColor.g},${e.shadowColor.b},0.${e.shadowAlpha})`;
          console.log('toggleBorderCss', toggleBorderCss);

          if (toggleBorderCss === true) {
            console.log('hit 1')
            innerStyle.boxShadow = `rgba(${e.shadowColor.r},${e.shadowColor.g},${e.shadowColor.b},0.${e.shadowAlpha}) 0px 0px ${e.shadowBlur}px 6px `;


          }
          if (toggleBorderCss === false) {
            console.log('hit 2')
            innerStyle.boxShadow = `rgba(${e.shadowColor.r},${e.shadowColor.g},${e.shadowColor.b},0.${e.shadowAlpha}) 0px 0px ${e.shadowBlur}px 4px `;
          }


          for (let x in css) {
            if (css[x].style === 'shadow') {
              css[x].value = `50px 50px ${e.shadowBlur}px rgba(${e.shadowColor.r},${e.shadowColor.g},${e.shadowColor.b},0.${e.shadowAlpha})`;
            }
            setToggleShadowCss(false);
          }
        } else { }
      }

      else {
        // console.log('hit')
      }



    });
    setInnerCss(innerStyle);
    setCSS(newStyle);
    setShapeState(props);
    setRightLeft(newRightLeftBorder);
    setTopBottom(newTopBottomBorder);
  }, [props, toggleBorderCss]);

  return (
    <div class='body'>
      <div class="shape-grid-container">
        <div class="shape-container">
          <div class='octagon' id='outer' style={css}>
            <div className='border-helper' id='t' style={topBottom}></div>
            <div className='border-helper' id='b' style={topBottom}></div>
            <div className='border-helper' id='l' style={rightLeft}></div>
            <div className='border-helper' id='r' style={rightLeft}></div>
            <div class='octagon' id='inner' style={innerCss}>
            </div>
          </div>
        </div>
      </div>


      <div className='output-container'>


        <h4>HTML</h4>
        <div class='html-css-container'>

          <div className='csshtml'>
            <p class='pseudo-shape-container'>{seed.htmlContainer[0]} </p>
            <p class='pseudo-octagon'> {seed.htmlShape[0]}  </p>
            {
              toggleBorderCss ? (
                seed.htmlBorder.map(el => {
                  return (
                    <div class='pseudo-border-helper'>
                      {el}
                    </div>
                  );
                })
              ) : (console.log('html-border-helper ##2', toggleBorderCss))
            }
            <p class='pseudo-octagon'> {seed.htmlShape[1]}</p>
            <p class='pseudo-shape-container'>{seed.htmlContainer[1]}</p>

          </div>
        </div>






        <h4>CSS</h4>
        <p class='html-css-container'>
          {
            seed.cssOutput.map(el => {
              if (toggleBorderCss === false && el['style'] === 'border') {


                
              } else if (toggleShadowCss === true && el['style'] === 'shadow') {

                
              } else {
                return (
               <div>
                 <span class='pseudo-css-element'>{el['style']}: {el['value']};</span> <br/>
               </div>
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
