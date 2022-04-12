import { func } from "prop-types";
import styles from "./App.module.scss";
import React from "react";
import { Container, Nav, Navbar,Row,Col } from "react-bootstrap";
import {Switch, Route} from "react-router-dom";
import Login from "../../pages/Topmenu/user/Login";
import Header from "../../Components/Header/Header";
import Scroll from "../../Components/Scroll/Scroll"
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

        <Route exact path="/login">
        <Login></Login>
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
