import React, { useState } from 'react';
import './App.css';

function App(props) {
  const [backgroundColor, setBackgroundColor] = useState('');

  const handleChangeColor = (e) => {
    setBackgroundColor(e.target.value);
  };

  return (
    <div id="cell" style={{ backgroundColor }}>
      <span class="color">BackgroundColor: {backgroundColor}</span>
      <input type="text" value={backgroundColor} onChange={handleChangeColor} placeholder="색상을 입력하세요" />
    </div>
  );
};


export default App;
