import React, {useState, useEffect} from 'react';
import AppLogic from '../../App/AppLogic.js';

const SizeLogic = () => {
  let {handleSize} = AppLogic();
    const [size, setSize] = useState(150);
  
  
let handleUpdate = (e) => {
  setSize(e.target.value)
}




  return { handleUpdate, size}

}


export default SizeLogic;