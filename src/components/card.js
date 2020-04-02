import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import styles from "./card.module.css";
import Front from "./front";
import Back from "./back";

export default () => {
  const [flipped, set] = useState(true);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });

  return (
    <div onClick={() => set(state => !state)}>
      <animated.div
        className={styles.c}
        style={{
          opacity: opacity.interpolate(o => 1 - o),
          transform
        }}
      >
        <Back />
      </animated.div>
      <animated.div
        className={styles.c}
        style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotateY(180deg)`)
        }}
      >
        <Front />
      </animated.div>
    </div>
  );
};
