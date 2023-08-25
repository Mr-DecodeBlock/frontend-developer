import React from "react";
import { useTranslation } from 'react-i18next';

// @Styles
import styles from "./styles.module.css";
import CardRevolutionCommerce from "./cardRevolutionCommerce/cardRevolutionCommerce";
import icon from "../../../../../public/assets/img/wallet.architecture/revolutionCommerceCard.svg";
import bgImageOne from "../../../../../public/assets/img/wallet.architecture/revolutionBgOne.svg";
import bgImageOneb from "../../../../../public/assets/img/wallet.architecture/azteca_3.png";
import revolutionBgTwo from "../../../../../public/assets/img/wallet.architecture/revolutionBgTwo.svg";
import flash1 from "../../../../../public/assets/img/home-revolution/flash1.svg";
import Image from "next/image";

export function RevolutionCommerce() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Image src={flash1} className={styles.flash1} />
        <div className={styles.header}>
          <p>{t('wallet.revolutionTitle')}</p>
          <span>{t('wallet.revolutionSubtitle')}</span>
        </div>
        <div className={styles.cards}>
          <div className={styles.cardTopContainer}>
            <CardRevolutionCommerce
              image={icon}
              title={t('wallet.aiTitle')}
              description={t('wallet.aiDescription')}
            ></CardRevolutionCommerce>
          </div>
          <div className={styles.cardBottonContainer}>
            <CardRevolutionCommerce
              image={icon}
              title={t('wallet.blockchainTitle')}
              description={t('wallet.blockchainDescription')}
            ></CardRevolutionCommerce>
          </div>
        </div>
      </div>
      <div className={styles.bgImageOne}>
        <Image src={bgImageOne}></Image>
      </div>
      <div className={styles.bgImageOneb}>
        <Image src={bgImageOneb}></Image>
      </div>
      <div className={styles.bgImageTwo}>
        <Image src={revolutionBgTwo}></Image>
      </div>
    </div>
  );
}
