import React from "react";
import styles from "./termsAndCondition.module.css";

export default () => (
  <div className={styles.termsContainer}>
    <article id="english" lang="en" className={styles.article}>
      <h1>Website Terms and Conditions of Use</h1>
      <h2>1. Terms</h2>
      <p>
        By accessing this Website, accessible from chrishoste.com, you are
        agreeing to be bound by these Website Terms and Conditions of Use and
        agree that you are responsible for the agreement with any applicable
        local laws. If you disagree with any of these terms, you are prohibited
        from accessing this site. The materials contained in this Website are
        protected by copyright and trade mark law.
      </p>

      <h2>2. Disclaimer</h2>
      <p>
        All the materials on chrishoste.com’s Website are provided "as is".
        chrishoste.com makes no warranties, may it be expressed or implied,
        therefore negates all other warranties. Furthermore, chrishoste.com does
        not make any representations concerning the accuracy or reliability of
        the use of the materials on its Website or otherwise relating to such
        materials or any sites linked to this Website.
      </p>

      <h2>3. Limitations</h2>
      <p>
        chrishoste.com or its suppliers will not be hold accountable for any
        damages that will arise with the use or inability to use the materials
        on chrishoste.com’s Website, even if chrishoste.com or an authorize
        representative of this Website has been notified, orally or written, of
        the possibility of such damage. Some jurisdiction does not allow
        limitations on implied warranties or limitations of liability for
        incidental damages, these limitations may not apply to you.
      </p>

      <h2>4. Revisions and Errata</h2>
      <p>
        The materials appearing on chrishoste.com’s Website may include
        technical, typographical, or photographic errors. chrishoste.com will
        not promise that any of the materials in this Website are accurate,
        complete, or current. chrishoste.com may change the materials contained
        on its Website at any time without notice. chrishoste.com does not make
        any commitment to update the materials.
      </p>

      <h2>5. Links</h2>
      <p>
        chrishoste.com has not reviewed all of the sites linked to its Website
        and is not responsible for the contents of any such linked site. The
        presence of any link does not imply endorsement by chrishoste.com of the
        site. The use of any linked website is at the user’s own risk.
      </p>

      <h2>6. Site Terms of Use Modifications</h2>
      <p>
        chrishoste.com may revise these Terms of Use for its Website at any time
        without prior notice. By using this Website, you are agreeing to be
        bound by the current version of these Terms and Conditions of Use.
      </p>
      <br />
      <a
        className={styles.final}
        href="https://termsofservicegenerator.net"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        These Terms and Conditions have been created at World's Free Terms Of
        Service Generator.
      </a>
    </article>
  </div>
);
