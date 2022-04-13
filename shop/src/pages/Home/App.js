import { func } from "prop-types";
import styles from "./App.module.scss";
import React from "react";
import { Container, Nav, Navbar,Row,Col } from "react-bootstrap";
import {Switch, Route} from "react-router-dom";
import Login from "../topMenu/user/login/login";
import Header from "../../components/Header/Header";
import Scroll from "../../components/Scroll/Scroll"
import JoinUs from "../topMenu/user/joinus/joinus"
import DogFW from "../mainMenu/dog/dogFW/dogFW";
import DogSS from "../mainMenu/dog/dogSS/dogSS";
import Detail from "../mainMenu/dog/detail"
function App() {
  return (
    <div className="App">
      <Container>
        <Switch>
          <Route exact path="/">
            <Scroll></Scroll>
            <Header></Header>
            <Post></Post>
          </Route>

          {/* 탑 페이지  */}
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/joinus">
            <JoinUs></JoinUs>
          </Route>

          {/* 메인페이지 */}
          <Route exact path="/dogFW">
            <DogFW></DogFW>
          </Route>

          <Route exact path="/dogSS">
            <DogSS></DogSS>
          </Route>

          {/* 상세페이지 */}
          <Route exact path="/detail/:id">
            <Detail></Detail>
          </Route>

        </Switch>
      </Container>
    </div>
  );
}

function Post() {
  return (
    <div className={styles.post}>
      <Row>
        <Col sm className={styles.leftPost}>
        <img className={styles.leftImg} src="assets/images/mainpage/dog1.jpeg"></img>
        <img className={styles.leftImg} src="assets/images/mainpage/dog2.jpeg"></img>
        <img className={styles.leftImg} src="assets/images/mainpage/dog3.jpeg"></img>

        </Col>
        <Col sm className={styles.middlePost}>2 of 3</Col>
        <Col sm className={styles.rightPost}>3 of 3</Col>
      </Row>
    </div>
  );
}
export default App;
