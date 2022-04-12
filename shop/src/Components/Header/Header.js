import React from "react";
import { Container} from "react-bootstrap";
import {Route, Switch} from "react-router-dom";

import TopMenu from "./Topmenu/Topmenu";
import MiddleMenu from "./Middlemenu/Middlemenu";
import MainMenu from "./Mainmenu/Mainmenu";

function Navigation() {
  return (
    <div>
      <Container>
        <TopMenu></TopMenu>
        <MiddleMenu></MiddleMenu>
        <MainMenu></MainMenu>
      </Container>
    </div>
  );
}

export default Navigation;
