import React  from 'react';
import Shape from '../components/Shape/cssShape.jsx';
import Size from '../components/Size/sizeForm.jsx';
import Colour from '../components/Colour/colourForm.jsx';
import Shadow from '../components/Shadow/shadowForm.jsx';
import Border from '../components/Border/borderForm.jsx';
import AppLogic from './AppLogic.js';
import '../styles/styles.css';

function App() {
  let { shape, shapeSize, fill, border, shadow, toggleWhat, handleSize, handleBorder, handleShadow, handleFill, toggleB, switchFill, toggleS} = AppLogic();
  return (
      <div className="App">
 

      <header className='grid-container'>
        <Size updateSize={handleSize}/>
        <Colour updateFill={handleFill} switchFill={switchFill}/>
        <Border updateBorder={handleBorder} toggleBorder={toggleB}/>
        <Shadow updateShadow={handleShadow} toggleShadow={toggleS}/>
      </header> 
        <Shape props={[{...shape},{...toggleWhat},{...shapeSize},{...fill},{...border},{...shadow}]} />
    </div>
  );
}

export default App;


