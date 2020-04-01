import React from "react";
import { useSpring, animated } from "react-spring";
import styles from "./index.module.css";
import Card from "../components/card";

export default () => {
  const calc = (x, y) => [
    x - window.innerWidth / 2,
    y - window.innerHeight / 2
  ];
  const trans = (x, y) => `translate3d(${x / 100}px,${y / 100}px,0)`;

  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 }
  }));

  return (
    <>
      <div
        className={styles.container}
        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      >
        <animated.div
          className={styles.card}
          style={{ transform: props.xy.interpolate(trans) }}
        >
          <Card />
        </animated.div>
      </div>
    </>
  );
};
