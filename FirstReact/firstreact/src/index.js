import React from 'react';
import ReactDOM from 'react-dom';


// 가상 요소를 정의한 JSX 파일 (App.js)
// from 뒤의 경로 jsx 파일을 가져와서 Header (또는 Footer) 라는 값 이름으로 쓰겠다는 말이므로
// 각각의 jsx 가 export 하는 함수 이름과 반드시 일치하지 않아도 된다(메소드와 유사)
import Header from './layout/headerComponent';
import Footer from './layout/footerComponent';


import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>,
  document.getElementById('footer')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
