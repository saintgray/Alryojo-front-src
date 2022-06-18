import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'mobx-react';
// import {useStrict} from 'mobx';


// 가상 요소를 정의한 JSX 파일 (App.js)
// from 뒤의 경로 jsx 파일을 가져와서 Header (또는 Footer) 라는 값 이름으로 쓰겠다는 말이므로
// 각각의 jsx 가 export 하는 함수 이름과 반드시 일치하지 않아도 된다(메소드와 유사)
import App from './App';
import reportWebVitals from './reportWebVitals';


// import stores
import authStore from './stores/authStore';
import userStore from './stores/userStore'

// mobx 상태관리 state 를 정의한 파일들 정의
const stores={
    authStore:authStore,
    userStore:userStore
}

// useStrict(true);

ReactDOM.render(
    <Provider {...stores}>
        {/* <React.StrictMode > */}
        <App loginInfo={stores.userStore.loginInfo}/ >
        {/* </React.StrictMode> */}
    </Provider>,
    document.getElementById('root')
);
    
reportWebVitals(console.log);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
