import Image from "next/image";
import { SecondComponent } from "../svg/second";
import bg from '../../../../public/assets/img/home-revolution/bg_illustration.png'
import styles from "./styles.module.css";

export function SecondLayer({ children }) {
  return (
    <div className={styles.container}>
      {/* <SecondComponent className={styles.icon} /> */}
      <Image src={bg} alt="gear" className={styles.topLeft} />
      {children}
    </div>
  );
}
