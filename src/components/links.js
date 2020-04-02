import React from "react";
import styles from "./links.module.css";
import Github from "../img/github.svg";
import Mail from "../img/mail.svg";
import In from "../img/in.svg";

export default () => (
  <div className={styles.links}>
    <a href="https://www.google.de/">
      <Github />
    </a>
    <a href="https://www.google.de/">
      <Mail />
    </a>
    <a href="https://www.google.de/">
      <In />
    </a>
  </div>
);
