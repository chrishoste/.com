import React from "react";
import { OutboundLink } from "gatsby-plugin-google-analytics"
import styles from "./links.module.css";
import Github from "../img/github.svg";
import Mail from "../img/mail.svg";
import In from "../img/in.svg";

export default () => (
  <div className={styles.links}>
    <OutboundLink href="https://www.google.de/">
      <Github />
    </OutboundLink>
    <OutboundLink href="https://www.google.de/">
      <Mail />
    </OutboundLink>
    <OutboundLink href="https://www.google.de/">
      <In />
    </OutboundLink>
  </div>
);
