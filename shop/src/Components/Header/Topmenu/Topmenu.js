import React from "react";
import styles from "./Topmenu.module.scss";
import {Nav, Navbar} from "react-bootstrap";
import { Link,Route } from "react-router-dom";

function TopMenu() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">
          PetSongWanRyo{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/login" style={{ margin: "0 auto" }}>
              LOGIN{" "}
            </Nav.Link>
            <Nav.Link as={Link} to="/joinus" style={{ margin: "0 auto" }}>
              JOIN US{" "}
            </Nav.Link>
            <Nav.Link as={Link} to="/wish" style={{ margin: "0 auto" }}>
              WISH{" "}
            </Nav.Link>
            <Nav.Link as={Link} to="/cart" style={{ margin: "0 auto" }}>
              CART{" "}
            </Nav.Link>
            <Nav.Link as={Link} to="/orderlist" style={{ margin: "0 auto" }}>
              ORDER LIST{" "}
            </Nav.Link>
            <Nav.Link as={Link} to="/mypage" style={{ margin: "0 auto" }}>
              MY PAGE{" "}
            </Nav.Link>
            <input className={styles.searchInput}></input>
            <button className={styles.searchBtn}>GO</button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default TopMenu;
