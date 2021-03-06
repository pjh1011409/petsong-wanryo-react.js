import React from "react";
import styles from "./MainMenu.module.scss";
import { Container, Nav, Navbar, NavDropdown, Col, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

function MainMenu(){
    return(
        <div className={styles.mainMenu}>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Toggle
              style={{ margin: "0 auto" }}
              aria-controls="basic-navbar-nav"
            />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto" style={{ margin: "0 auto" }}>
                <NavDropdown title="DOG"  style={{ margin: "0 50px" }}>
                  <NavDropdown.Item  href="/dogSS" style={{ textAlign: "center" }}>
                    S/S
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/dogFW" style={{ textAlign: "center" }}>
                    F/W
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="CAT" id="basic-nav-dropdown" style={{ margin: "0 50px" }}>
                  <NavDropdown.Item href="#action/3.1" style={{ textAlign: "center" }}>
                    S/S
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2" style={{ textAlign: "center" }}>
                    F/W
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="LIVING" id="basic-nav-dropdown" style={{ margin: "0 50px" }}>
                  <NavDropdown.Item href="#action/3.1" style={{ textAlign: "center" }}>
                    TOY
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2" style={{ textAlign: "center" }}>
                    BAG
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2" style={{ textAlign: "center" }}>
                    House
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="FOOD" id="basic-nav-dropdown" style={{ margin: "0 50px" }}>
                  <NavDropdown.Item href="#action/3.1" style={{ textAlign: "center" }}>
                    DOGFEED
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2" style={{ textAlign: "center" }}>
                    CATFEED
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="COMMUNITY" id="basic-nav-dropdown" style={{ margin: "0 50px" }}>
                  <NavDropdown.Item href="#action/3.1" style={{ textAlign: "center" }}>
                    ??????????????????
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2" style={{ textAlign: "center" }}>
                    ???????????????
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <menu></menu>
      </div>
    )
}


export default MainMenu;
