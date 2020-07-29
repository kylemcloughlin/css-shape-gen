import React from 'react';
import Shape from './hooks/cssShape.jsx';
import Size from './hooks/sizeForm.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>CSS Shape Generator</h1>
      </header>
      <div>
        <Shape/>
      <Size/>
      </div>
    </div>
  );
}

export default App;
