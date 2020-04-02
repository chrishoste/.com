import React from "react";
import styles from "./index.module.css";
import Logo from "../components/logo";
import Links from "../components/links";
import Content from "../components/content";

export default () => (
  <>
    <div className={styles.root}>
      <Logo />
      <Content />
      <Links />
    </div>
  </>
);
