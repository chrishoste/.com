import React from "react";
import styles from "./content.module.css";

export default () => (
  <div className={styles.content}>
    <h1 className={styles.name}>
      Christophe <span>Hoste</span>
    </h1>
    <h2>Student in Computer Science M.Sc.</h2>
    <br />
    <p className={styles.skills}>
      Software Developer (iOS) and passionate about <br />
      <strong>User Experience | User Research | Usability Engineering</strong>
    </p>
  </div>
);
