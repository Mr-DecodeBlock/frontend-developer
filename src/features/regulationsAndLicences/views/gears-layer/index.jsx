import {
  GearBottomRight,
  GearTopLeft,
  GearTopRight,
  GearBottomLeft,
} from "../svg/gears";

import styles from "./styles.module.css";

export function GearsLayer({ children }) {
  return (
    <div className={styles.container}>
      <GearTopLeft className={styles.topLeft} />
      <GearTopRight className={styles.topRight} />
      <GearBottomLeft className={styles.bottomLeft} />
      <GearBottomRight className={styles.bottomRight} />
      {children}
    </div>
  );
}
