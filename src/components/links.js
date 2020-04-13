import React from "react";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import styles from "./links.module.css";
import Github from "../img/github.svg";
import Mail from "../img/mail.svg";
import In from "../img/in.svg";
import Youtube from "../img/youtube.svg";

export default () => (
  <div className={styles.links}>
    <OutboundLink
      href="https://github.com/chrishoste"
      rel="noopener noreferrer"
      target="_blank"
      aria-label="Link to my GitHub profile"
    >
      <Github alt="GitHub_Icon" />
    </OutboundLink>
    <OutboundLink
      href="https://www.youtube.com/channel/UCkWPWx_61Gf4bKerkUO_CdA"
      rel="noopener noreferrer"
      target="_blank"
      aria-label="Link to my Youtube channel"
    >
      <Youtube alt="Youtube_Icon" />
    </OutboundLink>
    <OutboundLink
      href="mailto:mail@chrishoste.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Link to my Xing profile"
    >
      <Mail alt="Envelope_Icon" />
    </OutboundLink>
    <OutboundLink
      href="https://www.linkedin.com/in/christophe-hoste-4626a31a6"
      rel="noopener noreferrer"
      target="_blank"
      aria-label="Link to my Xing profile"
    >
      <In alt="LinkedIn_Icon" />
    </OutboundLink>
  </div>
);
