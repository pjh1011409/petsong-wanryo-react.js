import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/home/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import { Provider} from 'react-redux';
import {createStore } from 'redux';

let arr = [];
//detail.js(상세페이지)에서 상품 주문 시 장바구니 리스트에 상품 리스트 추가하는 수정방법 
function reducer(state = arr, action) { //빈 배열값이 state파라미터에 저장
  if (action.type === "항목추가") { // 항목추가라는 값이 dispatch 올 경우(Detail.js 44)
    let copy = [...state]; // 깊은복사하기
    // 만약 dispatch로 보내진 값의 id와 같은 id를 가진 값이 존재한다면?
    let found = copy.findIndex((a) => { 
      return a.size === action.payload.size;
    });
    if (found >= 0) { //만약 존재한다면 수량과 가격만 증가, 중복되는 리스트 추가 X
      copy[found].price += copy[found].price / copy[found].quan; // 가격 수량에 맞게 증가
      copy[found].quan++; //수량증가
      return copy;  
    } else { //그렇지 않을 경우(리스트에 동일 상품 없을 경우) 배열에 새로운 상품정보 추가
      copy.push(action.payload);
      return copy;
    }
  }
}

// 이전 상태에서 새로운 상태로 리턴한 reducer함수들을 합쳐서 store 에 저장
let store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
