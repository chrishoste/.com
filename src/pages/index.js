import React from "react";
import { Helmet } from 'react-helmet';
import styles from "./index.module.css";
import Logo from "../components/logo";
import Links from "../components/links";
import Content from "../components/content";

export default () => (
  <>
    <Helmet htmlAttributes={{ lang: 'en' }}>
      <meta charSet="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />

      <title>Christophe Hoste - Portfolio</title>
      <meta name="title" content="Christophe Hoste - Software Developer(iOS/Front-End)" />
      <meta name="description" content="I'm Chris a Software-Developer (iOS/Front-End) based in Stuttgart, Germany. Also, passionate about User Experience (UX) / User Research and Usability Engineering. Love building rich interface applications with superior UX in mind. Check out my portfolio and feel free to contact me." />
      <link rel="canonical" href="https://chrishoste.com" />

      <meta name="application-name" content="Christophe Hoste - Portfolio" />
      <meta name="theme-color" content="#342D3D" />
      <meta name="apple-mobile-web-app-title" content="Christophe Hoste - Portfolio" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="mobile-web-app-capable" content="yes" />
    </Helmet>

    <div className={styles.root}>
      <Logo />
      <Content />
      <Links />
    </div>
  </>
);
