import {useState} from 'react';
import {Container, Button, Table} from "react-bootstrap"
import { useParams } from "react-router-dom"
import {Provider} from "react-redux";
import DetailTop from '../../../components/Detail/DetailTop/DetailTop'
import DetailBottom from '../../../components/Detail/DetailBottom/DetailBottom'
import { createStore } from 'redux';



let arr = [];

//detail.js(상세페이지)에서 상품 주문 시 장바구니 리스트에 상품 리스트 추가하는 수정방법 
function reducer(state = arr, action) { //빈 배열값이 state파라미터에 저장
  if (action.type === "항목추가") { // 항목추가라는 값이 dispatch 올 경우(Detail.js 44)
    let copy = [...state]; // 깊은복사하기
    // 만약 dispatch로 보내진 값의 id와 같은 id를 가진 값이 존재한다면?
    let found = copy.findIndex((a) => { 
      return a.id === action.payload.id;
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
let store = createStore(reducer);


function Detail(props) {
  let { id } = useParams(); //<Route> 컴포넌트에 path속성에서 URL을 파라미터로써 값을 받는 객체를 useParams()를 통해 접근
  // 배열 속 상품의 영구번호와 일치한지 find()가 배열 속에서 찾아준다.(Detail.js 70-72)
  let dataId = props.dogData.find((x) => {
    // (shoesId 는 props화가 되고, 영구번호가 알맞는 상품을 뜻)

    return x.id == id;
  });
  return (
    <div>
      <Container>
        <Provider store={store}>
        <DetailTop dataId={dataId}></DetailTop> 
        </Provider>
      <DetailBottom></DetailBottom>
      </Container>
    </div>
  );
}

  // // 항복추가라는 액션이 오면 알림창 출력  (Detail.js 39)
  // if(액션.type === "항목추가불가"){
  //   alert("해당 상품의 재고가 없습니다.");
  // }

  // // +버튼 누를 시 수량,가격 증가
  // if (액션.type === "수량증가") {
  //   let copy = [...state]; // 초기값 깊은복사하기

  //   if (copy[액션.payload.i].quan >= 5) { //수량이 5이상일 경우
  //     alert("주문 가능 수량은 5개까지 입니다."); // 알림창 출력
  //     copy[액션.payload.i].price = copy[액션.payload.i].price; //현재까지 합산 출력
  //     copy[액션.payload.i].quan = 5; // 수량은 5개까지인 것으로 5를 출력
  //   } else { //5이하일 경우
  //     // 현재상품의 현재가격에 현재가격에서 수량 나눈 값을 누적하여 더하기 (누적가격 구하기)
  //     // 만약 수량을 나누어주지않으면? ex. 수량 2개에, 22000이라면, 22000+11000이 되어야하는데
  //     // 22000+22000이 된다. 즉, 현재 자신의 값을 누적하므로 수량을 나누어준 값을 더해줘야 한다.
  //     copy[액션.payload.i].price += copy[액션.payload.i].price / copy[액션.payload.i].quan;
  //     copy[액션.payload.i].quan++; //수량 1씩 증가
  //     return copy; //초기값에 저장된 배열 속 값 출력
  //   }
  // } 
  // //- 버튼 누를 시 수량,가격 감소
  // else if (액션.type === "수량감소") {
  //   let copy = [...state]; //초기값 깊은복사하기
  //   // 누적합과 같은 원리
  //   copy[액션.payload.i].price -=copy[액션.payload.i].price / copy[액션.payload.i].quan;
  //   copy[액션.payload.i].quan--; //수량 1씩 감소
  //   // 만약 수량이 0이라면 그 값은 삭제
  //   if (copy[액션.payload.i].quan === 0) {
  //     //0이 된 배열 속 값을 추출 후, splice를 통해 그 값을 삭제시키기(배열 속 특정값 삭제시키기 방법)
  //     copy.splice(copy.indexOf(copy[액션.payload.i]), 1); 
  //   }

  //   return copy; //초기값에 저장된 배열 속 값 출력 
  // } else {
  //   return state;
  // }

export default Detail;