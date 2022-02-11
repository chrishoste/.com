import React from "react";
import styles from "./content.module.css";

export default () => (
  <div className={styles.content}>
    <h1 className={styles.name}>
      Christophe <span>Hoste</span>
    </h1>
    <h2>
      <nobr>Computer Science M.Sc.</nobr>
    </h2>
    <br />
    <p className={styles.aboutme}>
      Software Developer (iOS) &amp; <nobr>passionate about</nobr>
      <br />
      <strong>
        <nobr>User-Experience</nobr>
      </strong>{" "}
      |{" "}
      <strong>
        <nobr>User-Research</nobr>
      </strong>{" "}
      |{" "}
      <strong>
        <nobr>Usability-Engineering</nobr>
      </strong>
    </p>
  </div>
);
