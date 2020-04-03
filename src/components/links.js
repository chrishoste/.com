import React from "react";
import { OutboundLink } from "gatsby-plugin-google-analytics"
import styles from "./links.module.css";
import Github from "../img/github.svg";
import Mail from "../img/mail.svg";
import In from "../img/in.svg";

export default () => (
  <div className={styles.links}>
    <OutboundLink href="https://github.com/chrishoste">
      <Github />
    </OutboundLink>
    <OutboundLink href="https://github.com/chrishoste">
      <Mail />
    </OutboundLink>
    <OutboundLink href="https://www.xing.com/profile/Christophe_Hoste2">
      <In />
    </OutboundLink>
  </div>
);
