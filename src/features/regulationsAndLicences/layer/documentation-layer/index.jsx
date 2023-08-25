import Image from "next/image";
import first from '@/public/assets/img/layers/first-documentation.png'
import second from '@/public/assets/img/layers/second-documentation.png'
import third from '@/public/assets/img/home-revolution/Group_92.png'

import styles from "./styles.module.css";

export function DocumentationLayer({ children }) {
  return (
    <div className={styles.container}>
      {/* <SecondComponent className={styles.icon} /> */}
      <Image src={first} alt="gear" className={styles.topRight} />
      <Image src={second} alt="gear" className={styles.topLeft} />
      <Image src={third} alt="gear" className={styles.bottomRight} />
      {children}
    </div>
  );
}
