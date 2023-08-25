import Image from "next/image";
import styles from "./sectionArchitecture.module.css";
import { useTranslation } from "react-i18next";

import cubes from "../../../../../public/assets/img/wallet.architecture/arquitectureAnimation.gif";
import details from "../../../../../public/assets/img/wallet.architecture/details.svg";
import azteca1 from "../../../../../public/assets/img/wallet.architecture/azteca1.svg";
import azteca1b from "../../../../../public/assets/img/wallet.architecture/azteca1b.svg";
import aztecaCompleted from "../../../../../public/assets/img/wallet.architecture/azteca_4.png";
import wheel1 from "../../../../../public/assets/img/wallet.architecture/wheel1.svg";
import wheel2 from "../../../../../public/assets/img/wallet.architecture/Vector_aro.png";

export function SectionArchitecture() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <Image src={azteca1} alt="image1" className={styles.backgroundAzteca} />
      <Image
        src={aztecaCompleted}
        alt="image1"
        className={styles.aztecaCompleted}
      />
      <Image src={azteca1b} alt="image3" className={styles.azteca} />
      <Image src={wheel1} alt="image2" className={styles.backgroundWheel} />
      <Image src={wheel2} alt="image2" className={styles.backgroundWheel2} />
      <div className={styles.cubes}>
        <Image src={cubes} alt="cubes" />
      </div>
      <div className={styles.details}>
        <Image src={details} alt="details" />
      </div>
      <div className={styles.text}>
        <h3>{t("wallet.architectureTitle")}</h3>
        <p>{t("wallet.architectureDescription")}</p>
      </div>
    </div>
  );
}
