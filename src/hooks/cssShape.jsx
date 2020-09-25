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
  const [toggleShadowCss, setToggleShadowCss] = useState(true);
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
  const [turnShadowOn, setTurnShadowOn] = useState(false)
  let style = seed.css;
  let borderArray = [seed.top, seed.bottom, seed.right, seed.left]



  useEffect(() => {
    let newStyle = {};
    let innerStyle = {};
    let newRightLeftBorder = {};
    let newTopBottomBorder = {};
    let baseSide = 62;
    // console.log(borderCSSSeed, 'line 52');
    console.log(borderArray, 'line 53');
    props.props.map(e => {
      console.log('e.border', e.border)

      if (e.size) {


        for (var x in style) {
          if (x === 'width') {
            newStyle[x] = `${e.size}px`;
            innerStyle[x] = `${e.size}px`;
            seed.outerCssOutput[0].value = `${e.size}px`;
            seed.innerCssOutput[0].value = `${e.size}px`;

          } else if (x === 'height') {
            newStyle[x] = `${e.size}px`;
            innerStyle[x] = `${e.size}px`;
            seed.outerCssOutput[1].value = `${e.size}px`;
            seed.innerCssOutput[1].value = `${e.size}px`;
          }

          else {
            newStyle[x] = style[x];

          }

        }
        if (toggleBorderCss === true) {

          let update = e.size - 150;
          update = update * 0.44;
          baseSide = baseSide + update;
        }
      }
      else if (e.type) {
        console.log('e.type', e.type);
        innerStyle.background = e.fillCode;
        seed.innerCssOutput[2].value = e.fillCode;
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


          let css = seed.innerCssOutput;
          for (let x in css) {
            console.log("^^^^^^^^^^^^^^^^^^", css);
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
          setTurnShadowOn(false)

        } else if (e.shadowToggle === undefined) {
          setTurnShadowOn(true)
          let css = seed.cssOutput;
          console.log('hit pre')
          newStyle.boxShadow = `-41px 0px ${e.shadowBlur}px -37px rgba(${e.shadowColor.r},${e.shadowColor.g},${e.shadowColor.b},0.${e.shadowAlpha}), 
          41px 0px ${e.shadowBlur}px -37px rgba(${e.shadowColor.r},${e.shadowColor.g},${e.shadowColor.b},0.${e.shadowAlpha}),
          0px -41px ${e.shadowBlur}px -37px rgba(${e.shadowColor.r},${e.shadowColor.g},${e.shadowColor.b},0.${e.shadowAlpha}),
          0px 41px ${e.shadowBlur}px -37px rgba(${e.shadowColor.r},${e.shadowColor.g},${e.shadowColor.b},0.${e.shadowAlpha})`;
          seed.outerCssOutput[3].value = newStyle.boxShadow;

          if (toggleBorderCss === true) {
            console.log('hit 1')
            innerStyle.boxShadow = `rgba(${e.shadowColor.r},${e.shadowColor.g},${e.shadowColor.b},0.${e.shadowAlpha}) 0px 0px ${e.shadowBlur}px 6px `;
            seed.innerCssOutput[5].value = `rgba(${e.shadowColor.r},${e.shadowColor.g},${e.shadowColor.b},0.${e.shadowAlpha}) 0px 0px ${e.shadowBlur}px 6px `;

          }
          if (toggleBorderCss === false) {
            console.log('hit 2')
            innerStyle.boxShadow = `rgba(${e.shadowColor.r},${e.shadowColor.g},${e.shadowColor.b},0.${e.shadowAlpha}) 0px 0px ${e.shadowBlur}px 4px `;
            seed.innerCssOutput[5].value = `rgba(${e.shadowColor.r},${e.shadowColor.g},${e.shadowColor.b},0.${e.shadowAlpha}) 0px 0px ${e.shadowBlur}px 4px `;
            console.log('line 157', seed.innerCssOutput)
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
          <div>.octagon{"{"}</div>
          <div class='pseudo-css-element'> position: absolute; </div>
          <div class='bottom-sign'> {'}'}</div>

          <div>#outer {'{'}</div>
          {seed.outerCssOutput.map(el => {
            if (toggleBorderCss === false && el['style'] === 'border') {



            } else if (turnShadowOn === false && el['style'] === 'shadow') {


            } else {
              return (
                <div>
                  <span class='pseudo-css-element'>{el['style']}: {el['value']};</span> <br />
                </div>
              )
            }


          })
          }
          <div class='bottom-sign'> {'}'}</div>
          <div>#inner {'{'}
          </div>
          {seed.innerCssOutput.map(el => {

            if (toggleBorderCss === false && el['style'] === 'border') {



            } else if (turnShadowOn === false && el['style'] === 'shadow') {
              console.log('hit')

            } else {
              return (
                <div>
                  <span class='pseudo-css-element'>{`${el['style']}`}: {`${el['value']}`};</span> <br />
                </div>
              )
            }


          })
          }
          <div class='bottom-sign'> {'}'}</div>
          <div>
         

            {borderArray.map(el => {
              if (toggleBorderCss === true) {
                let names = ['top', 'bottom', 'left', 'right'];
                let position = borderArray.indexOf(el);
                let widthOrHieght = (names[position] === 'top' || names[position] === 'bottom') ? ('width') : ('hieght');
                let hieghtOrWidth = (names[position] === 'right' || names[position] === 'left') ? ('width') : ('hieght');

                console.log(names[position], widthOrHieght);
                return (<div class='pseudo-border-helper-css'>
                  #{names[position]} {'{'}<br />
                  <span class='pseudo-css-element'>{el[0].style}: {el[0].value};</span><br />
                  <span class='pseudo-css-element'>{el[1].style}: {el[1].value};</span><br />
                  <span class='pseudo-css-element'>{el[2].style}: {el[2].value};</span><br />
                  <span class='pseudo-css-element'> {widthOrHieght}: {topBottom.width};</span><br />
                  <span class='pseudo-css-element'> {hieghtOrWidth}: {topBottom.height};</span><br />
                  <span class='pseudo-css-element'> background-color: {topBottom.backgroundColor};</span><br />




                  <div class='bottom-sign'>{'}'}</div>
                </div>
                )
              }
            })}
          </div>
        </p>
      </div>
    </div>
  );
}

export default Shape;
