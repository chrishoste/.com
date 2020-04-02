import React from "react";
import styles from "./header.module.css";

export default () => (
  <div className={styles.container}>
    <h1 className={styles.start}>hello,</h1>
    <div>
      <p>
        <span className={styles.light}>Christophe</span>
        <br /> <strong>Hoste</strong>
      </p>

      <span className={styles.subText}>Student M. Sc.</span>
    </div>
  </div>
);
