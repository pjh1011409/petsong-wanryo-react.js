import React from "react";
import styles from "./styles.module.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from '@fortawesome/free-regular-svg-icons'
function Navigation() {
  return (
    <div>
      <Container>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand as={Link} to="/">
            PetSongWanRyo{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                LOGOUT{" "}
              </Nav.Link>
              <Nav.Link as={Link} to="/detail">
                JOIN US{" "}
              </Nav.Link>
              <Nav.Link as={Link} to="/cart">
                WISH{" "}
              </Nav.Link>
              <Nav.Link as={Link} to="/cart">
                CART{" "}
              </Nav.Link>
              <Nav.Link as={Link} to="/cart">
                ORDER LIST{" "}
              </Nav.Link>
              <Nav.Link as={Link} to="/cart">
                MY PAGE{" "}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <img className={styles.logo} src="/../assets/images/logo.png"></img>
        <div>
        <FontAwesomeIcon icon={faCamera} />        </div>
      </Container>
    </div>
  );
}

export default Navigation;
