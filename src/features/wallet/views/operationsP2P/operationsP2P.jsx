import React from "react";
import { useTranslation } from 'react-i18next';

import sunTwo from '../../../../../public/assets/img/wallet.architecture/circule.svg';
import CardOperationsP2P from "./cardP2P/card";
// @Styles
import styles from "./styles.module.css";
import Image from "next/image";

const data = [
  {
    number: "1",
    title: "wallet.p2pStep1Title",
    description: "wallet.p2pStep1Description"
  },
  {
    number: "2",
    title: "wallet.p2pStep2Title",
    description: "wallet.p2pStep2Description"
  },
  {
    number: "3",
    title: "wallet.p2pStep3Title",
    description: "wallet.p2pStep3Description"
  },
];

export function OperationsP2P() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <Image className={styles.wpP2P} src={sunTwo}></Image>
      <div className={styles.titles}>
        <div className={styles.titleOne}>
          <p>{t('wallet.p2pOperationsTitle')}</p>
        </div>
        <div className={styles.titleTwo}>
          <span>{t('wallet.p2pOperationsSubtitle')}</span>
        </div>
      </div>
      <div className={styles.cards}>
        {data.map((dataItem, i) => {
          return (
            <CardOperationsP2P 
              data={{ 
                ...dataItem,
                title: t(dataItem.title),
                description: t(dataItem.description)
              }} 
              key={i} 
            />
          );
        })}
      </div>
    </div>
  );
}
