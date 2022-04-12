import React from "react";
import styles from "./Midmenu.module.scss";
import {} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookSquare, faInstagram, faTwitterSquare} from '@fortawesome/free-brands-svg-icons';

function MiddleMenu() {
  return (
    <div>
      <img className={styles.logo} src="/../assets/images/logo.png"></img>
      <div className={styles.social}>
        <FontAwesomeIcon
          icon={faFacebookSquare}
          size="xl"
          style={{ margin: "0 3px" }}
        />
        <FontAwesomeIcon
          icon={faInstagram}
          size="xl"
          style={{ margin: "0 3px" }}
        />
        <FontAwesomeIcon
          icon={faTwitterSquare}
          size="xl"
          style={{ margin: "0 3px" }}
        />
        <li className={styles.Notice}>Notice</li>
        <li className={styles.QandA}>Q&A</li>
      </div>
    </div>
  );
}
export default MiddleMenu;
