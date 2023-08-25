import Image from "next/image";
import {
  GearBottomRight,
  GearTopLeft,
  GearTopRight,
  GearBottomLeft,
} from "../svg/gears";

import gear from '@/public/assets/img/layers/gear.png'
import bigGear from '@/public/assets/img/layers/big-gear.png'

import styles from "./styles.module.css";

export function GearsDocumentationLayer({ children }) {
  return (
    <div className={styles.container}>
      {/* <GearTopLeft className={styles.topLeft} /> */}
      <Image src={gear} alt="gear" className={styles.topLeft} />
      {/* <GearTopRight className={styles.topRight} /> */}
      <Image src={gear} alt="gear" className={styles.topRight} />
      {/* <GearBottomLeft className={styles.bottomLeft} /> */}
      <Image src={bigGear} alt="gear" className={styles.bottomLeft} />
      {/* <GearBottomRight className={styles.bottomRight} /> */}
      <Image src={bigGear} alt="gear" className={styles.bottomRight} />
      {children}
    </div>
  );
}
