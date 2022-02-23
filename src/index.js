import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// jsx코드가 있는 <App /> c를, babel이 순수 js로 변환을 일단 했다.
// 그럼 이 변환된 컴포넌트 app을 html과 연결시켜야하는데
// 그것이 바로, React-dom.
// 리액트돔 클래스 안 렌더 함수를 활용해 c와 html을 연결한다.
// 즉 렌더 함수 코드를 설명하면, document안 root라는 id를 가진 요소를 찾고,
// 그 안에, 최상위에 있는 < App /> 이라는 컴포넌트와 연결하는 것이다.
