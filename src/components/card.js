import React, { useState } from "react";
import { useSpring, animated as a } from "react-spring";
import styles from "./card.module.css";

export default () => {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });

  return (
    <div onClick={() => set(state => !state)}>
      <a.div
        className={`${styles.c} ${styles.front}`}
        style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
      >
        Front
      </a.div>
      <a.div
        className={`${styles.c} ${styles.back}`}
        style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotateY(180deg)`)
        }}
      >
        Back
      </a.div>
    </div>
  );
};
