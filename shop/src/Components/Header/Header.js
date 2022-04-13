import React from "react";
import { Container} from "react-bootstrap";
import {Route, Switch} from "react-router-dom";

import TopMenu from "./TopMenu/Topmenu";
import MiddleMenu from "./MiddleMenu/MiddleMenu";
import MainMenu from "./MainMenu/MainMenu";

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
