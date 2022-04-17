import {useState} from 'react';
import {Container, Button, Table} from "react-bootstrap"
import { useParams } from "react-router-dom"
import {Provider, connect} from "react-redux";
import DetailTop from '../../../components/Detail/DetailTop/DetailTop'
import DetailBottom from '../../../components/Detail/DetailBottom/DetailBottom'
import { createStore, reducer } from 'redux';



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
        <DetailTop dataId={dataId}></DetailTop>
        <DetailBottom></DetailBottom>
      </Container>
    </div>
  );
}


// function mapStateToProps(state) {
//   return {
//     state: state.reducer,
//   };
// }
// export default connect(mapStateToProps)(Detail);
export default Detail