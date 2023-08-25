import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";
import { useTranslation } from "react-i18next";

export function FooterBy() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.copyright}>
        <h4>{t("footer.copyright")}</h4>
        <span>{t("footer.identifier")}</span>
      </div>
    </div>
  );
}
