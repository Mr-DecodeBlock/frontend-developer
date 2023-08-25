import { ThirdComponent } from "../svg/third";
import bg from '../../../../public/assets/img/home-revolution/bg_illus22.png'
import styles from "./styles.module.css";
import Image from "next/image";

export function ThirdLayer({ children }) {
  return (
    <div className={styles.container}>
      <Image src={bg} alt="gear" className={styles.topLeft} />
      {children}
    </div>
  );
}
