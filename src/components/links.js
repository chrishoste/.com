import React from "react";
import { OutboundLink } from "gatsby-plugin-google-analytics"
import styles from "./links.module.css";
import Github from "../img/github.svg";
import Mail from "../img/mail.svg";
import In from "../img/in.svg";

export default () => (
  <div className={styles.links}>
    <OutboundLink href="https://github.com/chrishoste" rel="noopener noreferrer" target="_blank" aria-label="Link to my GitHub profile">
      <Github alt="GitHub Icon" />
    </OutboundLink>
    <OutboundLink href="https://github.com/chrishoste" rel="noopener noreferrer" target="_blank" aria-label="Link to my Xing profile">
      <Mail alt="Envelope Icon for mail" />
    </OutboundLink>
    <OutboundLink href="https://www.xing.com/profile/Christophe_Hoste2" rel="noopener noreferrer" target="_blank" aria-label="Link to my Xing profile">
      <In alt="LinkedIn Icon" />
    </OutboundLink>
  </div>
);
