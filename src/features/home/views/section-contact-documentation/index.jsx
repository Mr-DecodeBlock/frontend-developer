import Image from "next/image";
import flash1 from "../../../../../public/assets/img/home-revolution/flash1.svg";
import flash2 from "../../../../../public/assets/img/home-revolution/flash2.svg";
import azteca from '../../../../../public/assets/img/wallet.architecture/azteca_4.png'

// @Styles
import styles from "./styles.module.css";

// @Image
import img from "@/public/assets/img/home/contact-documentation/contact-image.png";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

export function SectionContactDocumentation() {
  const [t]=useTranslation()
  const router = useRouter()
  return (
    <div className={styles.container}>
      <Image src={flash2} alt="image" className={styles.flash2} />
      <Image src={azteca} alt="image" className={styles.azteca} />
      <div className={styles.card}>
        <Image src={flash1} alt="flash" className={styles.flash1} />
        <div className={styles.cardContainer}>
          <h4 className={styles.cardTitle}>{t('home.contactDocumentation.title')}</h4>
          <p className={styles.cardDescription}>
            {t('home.contactDocumentation.description')}
          </p>
          <button className={styles.cardButton} onClick={()=>router.push("/privacy-policies")}>{t('home.contactDocumentation.documentation')}</button>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src={img} alt="contact" className={styles.image} />
      </div>
    </div>
  );
}
