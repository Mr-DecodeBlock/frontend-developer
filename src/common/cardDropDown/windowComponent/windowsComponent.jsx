import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.css";
import openSVG from "../../../../public/assets/img/open.svg";
import closeSVG from "../../../../public/assets/img/close.svg";
import Image from "next/image";

export function WindowComponent({ text, title }) {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <span>{title}</span>
        <span onClick={handleOpen}>
          <Image src={!isOpen ? openSVG : closeSVG} />{" "}
        </span>
      </div>
      <div
        className={`${styles.contentContainer} ${
          isOpen ? styles.containerOpen : ""
        }`}
      >
        <p>{text}</p>
      </div>
    </div>
  );
}
