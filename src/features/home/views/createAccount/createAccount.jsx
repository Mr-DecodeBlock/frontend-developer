import Image from "next/image";
import { Button } from "react-bootstrap";
import styles from "./styles.module.css";
// @img import
import girl from "../../../../../public/assets/img/home/createAccount/createAccount.svg";
import cardLogo from "../../../../../public/assets/img/account/card.svg";
import mastercard from "../../../../../public/assets/img/account/mastercard.svg";
import chip from "../../../../../public/assets/img/account/chip.svg";
import flash1 from "../../../../../public/assets/img/home-revolution/flash1.svg";
import flash2 from "../../../../../public/assets/img/home-revolution/flash2.svg";
import { useTranslation } from "react-i18next";

export function CreateAcount() {
  const {t} = useTranslation()
  return (
    <div className={styles.container}>
      <div className={styles.subContainerLeft}>
        <div className={styles.image}>
          <Image src={girl} alt={"Girl"} />
        </div>
      </div>
      <div className={styles.subContainerRight}>
      <div className={styles.darkColor}>
        <div className={styles.cardRight}>
          <div className={styles.flash1}>
            <Image src={flash1} />
          </div>
          <div className={styles.flash2}>
            <Image src={flash2} />
          </div>
          <div>
            <div className={styles.createAccount}>
              <span>{t('home.createAcount.createAcount')}</span>
            </div>
            <div>
              <span className={styles.cardRightTitle}>
              {t('home.createAcount.scale')}
              </span>
            </div>
          </div>
          <div className={styles.steps}>
            {/* Paso 01 */}
            <div className={styles.step}>
              <div className={styles.stepNumber}>
                <p>01</p>
              </div>
              <div className={styles.stepText}>
                <p>
                {t('home.createAcount.singUp')} <span className={styles.yellowText}>{t('home.createAcount.fast')}</span>,
                {t('home.createAcount.only')}
                </p>
              </div>
            </div>
            {/* Paso 02 */}
            <div className={styles.step}>
              <div className={styles.stepNumber}>
                <p>02</p>
              </div>
              <div className={styles.stepText}>
                <p>
                {t('home.createAcount.weOffer')}{" "}
                  <span className={styles.yellowText}>{t('home.createAcount.security')}</span> {t('home.createAcount.verifying')}</p>
              </div>
            </div>
            {/* Paso 03 */}
            <div className={styles.step}>
              <div className={styles.stepNumber}>
                <p>03</p>
              </div>
              <div className={styles.stepText}>
                <p>
                  {t('home.createAcount.account')}{" "}
                  <span className={styles.yellowText}>{t('home.createAcount.trust')}</span>.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <Button className={`${styles.btn} tp-btn-green alt-color-black`}>
              {" "}
              {t('home.createAcount.createNow')}
            </Button>
            <p className={styles.footerText}>
            {t('home.createAcount.optimize')}
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
