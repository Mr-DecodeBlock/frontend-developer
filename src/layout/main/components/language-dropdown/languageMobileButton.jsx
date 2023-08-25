import React, { useEffect, useState } from "react";
import styles from "./languajeMobileMenu.module.css";
import Image from "next/image";
import languageWorld from '../../../../../public/assets/img/footer/languageWorldMobile.svg'
import { useTranslation } from "react-i18next";
import { useClickAway } from "@uidotdev/usehooks";

const LanguageMobileMenu = () => {

  const { t, i18n } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const [idioma, setIdioma] = useState(true);
  const ref = useClickAway(() => {
    setIsOpen(false);
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const alarm = localStorage.getItem("i18nextLng")
    alarm === "es" ? setIdioma(true) : setIdioma(false)
  }, [])


  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("i18nextLng", language)
  };

  return (
    <>
      <div className={styles.languageMenu}>
        <button className={styles.toggleButton} onClick={toggleMenu}>
          <Image src={languageWorld} alt="img" className={styles.icon} />
        </button>
        {isOpen && (
          <div className={styles.menu} ref={ref}>
            <div className={styles.item} onClick={() => {
              changeLanguage("es");
              setIdioma(true);
              toggleMenu()
            }} style={{ background: "transparent" }}>
              {/* {idioma ? "Spanish" : "Español"} */}
              {t("language.spanish")}
            </div>
            <div className={styles.item} onClick={() => {
              changeLanguage("en");
              setIdioma(false);
              toggleMenu()
            }} style={{ background: "transparent" }}>
              {/* {idioma ? "English" : "Ingles"} */}
              {t("language.english")}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default LanguageMobileMenu;