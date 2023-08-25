import React from "react";

// @Styles
import styles from './styles.module.css'
import { CardDropDown } from "@/src/common/cardDropDown/cardDropDown";
import { useTranslation } from "react-i18next";



export function InformationCookies() {
  const {t}=useTranslation()

  //example data
const data = [
  {
    title: t('communityRules.information.dataT1'),
    text: t('communityRules.information.dataText1'),
  },
  {
    title: t('communityRules.information.dataT2'),
    text: t('communityRules.information.dataText2'),
  },
  {
    title: t('communityRules.information.dataT3'),
    text: t('communityRules.information.dataText3'),
  },
  {
    title: t('communityRules.information.dataT4'),
    text: t('communityRules.information.dataText4'),
  },
  {
    title: t('communityRules.information.dataT5'),
    text: t('communityRules.information.dataText5'),
  },
];

  return (
    <div className={styles.container}>
      <CardDropDown data={data}></CardDropDown>
    </div>
  );
}
