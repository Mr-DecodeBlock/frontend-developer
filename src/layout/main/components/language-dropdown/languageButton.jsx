import React, { useEffect, useState } from "react";
import styles from "./languajeMenu.module.css";
import Image from "next/image";
import languageWorld from '../../../../../public/assets/img/footer/languageWorld.svg'
import { useTranslation } from "react-i18next";
import { useClickAway } from "@uidotdev/usehooks";

const LanguageMenu = () => {

  const { t, i18n } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const [idioma, setIdioma] = useState(true);
  const ref = useClickAway(() => {
    setIsOpen(false);
  });
  const language = i18n.language

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // const alarm = localStorage.getItem("i18nextLng")
    const alarm = i18n.language
    alarm === "es" ? setIdioma(true) : setIdioma(false)
  }, [])


  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("i18nextLng", language)
  };

  return (
    <div className={styles.languageMenu}>
      <button className={styles.toggleButton} onClick={toggleMenu}>
        <Image src={languageWorld} alt="img" />
      </button>
      {isOpen && (
        <div className={styles.menu} ref={ref}>
          <div className={styles.item} onClick={() => {
            changeLanguage("es");
            setIdioma(true);
            setIsOpen(false)
          }} style={{ background: "transparent" }}>
            {/* {language === "es" ? "Español" : "Spanish"} */}
            {t("language.spanish")}
          </div>
          <div className={styles.item} onClick={() => {
            changeLanguage("en");
            setIdioma(false);
            setIsOpen(false)
          }} style={{ background: "transparent" }}>
            {/* {language === "es" ? "Ingles" : "English"} */}
            {t("language.english")}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageMenu;