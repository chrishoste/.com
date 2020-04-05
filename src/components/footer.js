import React from "react";
import { Link } from "gatsby";
import styles from "./footer.module.css";

export default () => (
  <div className={styles.footer}>
    <div className={styles.innerFooter}>
      <Link to="/privacy/">Privacy</Link> <span>🤷🏼‍♂️</span>
      <Link to="/legal/">Legal</Link>
    </div>
  </div>
);
