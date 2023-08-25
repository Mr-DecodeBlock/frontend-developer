import { FourthComponent } from "../svg/fourth";
import bg from '../../../../public/assets/img/wallet.architecture/azteca_3.png'
import styles from "./styles.module.css";
import Image from "next/image";

export function FourthLayer({ children }) {
  return (
    <div className={styles.container}>
      <Image src={bg} alt="gear" className={styles.topLeft} />
      {children}
    </div>
  );
}
