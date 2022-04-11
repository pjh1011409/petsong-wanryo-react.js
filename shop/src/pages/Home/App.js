import { func } from "prop-types";
import styles from "./App.module.scss";
import React from "react";
import { Container, Nav, Navbar,Row,Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import Header from "../../Components/Header/Header";
function App() {
  return (
    <div className="App">
      <Container>
        <Header></Header>
        <Post></Post>
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
