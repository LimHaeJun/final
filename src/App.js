import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState('');

  const handleChangeColor = (e) => {
    setBackgroundColor(e.target.value);
  };

  return (
    <div style={{ backgroundColor }}>
      <p>BackgroundColor</p>
      <input type="text" value={backgroundColor} onChange={handleChangeColor} placeholder="색상을 입력하세요" />
    </div>
  );
};


export default App;
