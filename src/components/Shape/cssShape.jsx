import React, { useState, useEffect } from "react";
import seed from '../seed.js';

import ShapeLogic from './ShapeLogic.js';



function Shape(props) {
  let {updateOuterSquare} = ShapeLogic();

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

    props.props.map(e => {
      
      if(e.type === 'imgURL'){
        innerStyle.background = 'pink';

      }
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
        if (e.type === 'imgURL') {
          innerStyle.background = `url(${e.fillCode}) center center`;
          innerStyle.backgroundPosition = 'center';
         
        } else {

          innerStyle.background = e.fillCode;
          seed.innerCssOutput[2].value = e.fillCode;
      
        }
          
      } 

      else if (e.border === true) {
        // setToggleBorderCss(true);

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
          newStyle.boxShadow = `-41px 0px ${e.shadowBlur}px -37px rgba(${e.shadowColor.r},${e.shadowColor.g},${e.shadowColor.b},0.${e.shadowAlpha}), 
                 41px 0px ${e.shadowBlur}px -37px rgba(${e.shadowColor.r},${e.shadowColor.g},${e.shadowColor.b},0.${e.shadowAlpha}),
          0px -41px ${e.shadowBlur}px -37px rgba(${e.shadowColor.r},${e.shadowColor.g},${e.shadowColor.b},0.${e.shadowAlpha}),
          0px 41px ${e.shadowBlur}px -37px rgba(${e.shadowColor.r},${e.shadowColor.g},${e.shadowColor.b},0.${e.shadowAlpha})`;
        
          seed.outerCssOutput[3].value = newStyle.boxShadow;

          if (toggleBorderCss === true) {
            innerStyle.boxShadow = `rgba(${e.shadowColor.r},${e.shadowColor.g},${e.shadowColor.b},0.${e.shadowAlpha}) 0px 0px ${e.shadowBlur}px 6px `;
            seed.innerCssOutput[5].value = `rgba(${e.shadowColor.r},${e.shadowColor.g},${e.shadowColor.b},0.${e.shadowAlpha}) 0px 0px ${e.shadowBlur}px 6px `;

          }
          if (toggleBorderCss === false) {
            innerStyle.boxShadow = `rgba(${e.shadowColor.r},${e.shadowColor.g},${e.shadowColor.b},0.${e.shadowAlpha}) 0px 0px ${e.shadowBlur}px 4px `;
            seed.innerCssOutput[5].value = `rgba(${e.shadowColor.r},${e.shadowColor.g},${e.shadowColor.b},0.${e.shadowAlpha}) 0px 0px ${e.shadowBlur}px 4px `;
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
      }



    });


    setInnerCss(innerStyle);
    setCSS(newStyle);
    setShapeState(props);
    setRightLeft(newRightLeftBorder);
    setTopBottom(newTopBottomBorder);
  }, [props, toggleBorderCss]);
  let copyHTML = (e) => {
 

  }
  return (
    <div className='body'>
      <div className="shape-grid-container">
        <div className="shape-container">
          <div className='octagon' id='outer' style={css}>
            <div className='border-helper' id='t' style={topBottom}></div>
            <div className='border-helper' id='b' style={topBottom}></div>
            <div className='border-helper' id='l' style={rightLeft}></div>
            <div className='border-helper' id='r' style={rightLeft}></div>
            <div className='octagon' id='inner' style={innerCss}>
            </div>
          </div>
        </div>
      </div>


      <div className='output-container'>


        <h4>HTML</h4>
        <div className='html-css-container'>
          {/* <button onClick={ e => copyHTML(e)}>copy</button> */}
          <div className='csshtml'>
            <p className='pseudo-shape-container'>{seed.htmlContainer[0]} </p>
            <p className='pseudo-octagon'> {seed.htmlShape[0]}  </p>
            {
              toggleBorderCss ? (
                seed.htmlBorder.map((el, index ) => {
                  return (
                    <div className='pseudo-border-helper' key={index}>

                      {el}
                    </div>
                  );
                })
              ) : (<div/>)
            }
            <p className='pseudo-octagon'> {seed.htmlShape[1]}</p>
            <p className='pseudo-shape-container'>{seed.htmlContainer[1]}</p>

          </div>
        </div>






        <h4>CSS</h4>
        <div className='html-css-container'>
          <div>.octagon{"{"}</div>
          <div className='pseudo-css-element'> position: absolute; </div>
          <div className='bottom-sign'> {'}'}</div>

          <div>#outer {'{'}</div>
          {seed.outerCssOutput.map((el, index) => {
            if (toggleBorderCss === false && el['style'] === 'border') {



            } else if (turnShadowOn === false && el['style'] === 'shadow') {


            } else {
              return (
                <div key={index}>
                  <span className='pseudo-css-element' >{el['style']}: {el['value']};</span> <br />
                </div>
              )
            }

              
          })
          }
          <div className='bottom-sign'> {'}'}</div>
          <div>#inner {'{'}
          </div>
          {seed.innerCssOutput.map((el, index )=> {
            if (toggleBorderCss === false && el['style'] === 'border') {



            } else if (turnShadowOn === false && el['style'] === 'shadow') {

            } else {
              return (
                <div key={index}>
                  <span className='pseudo-css-element '>{`${el['style']}`}: {`${el['value']}`};</span> <br />
                </div>
              )
            }


          })
          }
          <div className='bottom-sign'> {'}'}</div>
          <div>
         

            {borderArray.map((el, index) => {
              if (toggleBorderCss === true) {
                let names = ['top', 'bottom', 'left', 'right'];
                let position = borderArray.indexOf(el);
                let widthOrHieght = (names[position] === 'top' || names[position] === 'bottom') ? ('width') : ('hieght');
                let hieghtOrWidth = (names[position] === 'right' || names[position] === 'left') ? ('width') : ('hieght');

                return (<div className='pseudo-border-helper-css' key={index}>
                  #{names[position]} {'{'}<br />
                  <span className='pseudo-css-element'>{el[0].style}: {el[0].value};</span><br />
                  <span className='pseudo-css-element'>{el[1].style}: {el[1].value};</span><br />
                  <span className='pseudo-css-element'>{el[2].style}: {el[2].value};</span><br />
                  <span className='pseudo-css-element'> {widthOrHieght}: {topBottom.width};</span><br />
                  <span className='pseudo-css-element'> {hieghtOrWidth}: {topBottom.height};</span><br />
                  <span className='pseudo-css-element'> background-color: {topBottom.backgroundColor};</span><br />




                  <div className='bottom-sign'>{'}'}</div>
                </div>
                )
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shape;
