import React from "react";
import { WindowComponent } from "./windowComponent/windowsComponent";
import styles from "./style.module.css";
import { useTranslation } from "react-i18next";

//example data 
// const data = [
//   {
//     title: "Contacto",
//     text: "Se puede contactar a nuestro oficial de protección de datos en...",
//   },
//   {
//     title: "Otro Título",
//     text: "Este es otro texto de ejemplo.",
//   },
//   {
//     title: "Título Adicional",
//     text: "Este es otro texto adicional de ejemplo.",
//   },
// ];


export function CardDropDown({ data }) {

  const {t}=useTranslation()

  return (
    <>
      <div className={styles.containerTitles}>
        <div className={styles.titles}>
          <div className={styles.titleOne}>
            <p>{t('moreInformation')}</p>
          </div>
          <div className={styles.titleTwo}>
            <p>{t('doYouNeed')}</p>
          </div>
        </div>
      </div>
      {data.map((item, index) => (
        <WindowComponent key={index} text={item.text} title={item.title} />
      ))}
    </>
  );
}
