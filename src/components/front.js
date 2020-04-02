import React from "react";
import styles from "./front.module.css";
import Links from "./links";
import Header from "./header";

export default () => (
  <div className={styles.container}>
    <Header />
    <Links />
  </div>
);
