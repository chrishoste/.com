import React from "react";
import styles from "./links.module.css";
import Github from "../img/github.svg";
import Mail from "../img/mail.svg";
import In from "../img/in.svg";

export default () => (
  <div className={styles.container}>
    <a href="https://www.google.de/" onClick={e => e.stopPropagation()}>
      <Github />
    </a>
    <a href="https://www.google.de/" onClick={e => e.stopPropagation()}>
      <Mail />
    </a>
    <a href="https://www.google.de/" onClick={e => e.stopPropagation()}>
      <In />
    </a>
  </div>
);
