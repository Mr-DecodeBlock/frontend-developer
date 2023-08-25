import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./presentation-list.module.scss";

const PresentationList = () => {
  const [t] = useTranslation();

  const items_content = [
    {
      reference: 'walletPresentation_listItem1',
      fallback: 'Seguridad de primer nivel para proteger tus transacciones y datos personales.'
    },
    {
      reference: 'walletPresentation_listItem2',
      fallback: 'Control total permitiéndote administrar y monitorizar tus transacciones con facilidad.'
    },
    {
      reference: 'walletPresentation_listItem3',
      fallback: 'Generando confianza a través de un entorno seguro y confiable para tus transacciones financieras.'
    },
  ];

  return (
    <ul className={styles['presentation__list']}>
      {items_content.map(({reference, fallback}, i)=> {
        return (
          <div className={styles['presentation__item']}>
              <li><b>01</b></li>
              <li key={i}>{t(reference, fallback)}</li>
          </div>
        )
      })}
    </ul>
  );
};

export default PresentationList;
