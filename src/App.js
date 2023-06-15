import React, { useState } from 'react';
import './App.css';

function App(props) { //함수형 컴포넌트 생성
  const [backgroundColor, setBackgroundColor] = useState('');

  const handleChangeColor = (e) => {
    setBackgroundColor(e.target.value);
  };

  return ( //배경색 입력란 및 값 받기
    <div id="cell" style={{ backgroundColor }}>
      <span class="color">BackgroundColor: {backgroundColor}</span>
      <input type="text" value={backgroundColor} onChange={handleChangeColor} placeholder="색상을 입력하세요" />
    </div>
  );
};


export default App;
