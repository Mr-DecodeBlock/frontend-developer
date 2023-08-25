import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

import styles from "./styles.module.scss";

export const LinkItemBlock = ({ route, name, keyword }) => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <>
      <span
        className={`${styles.item} ${
          name === keyword ? styles.titleColor : ""
        }`}
        onClick={() => {
          router.push(route);
        }}
      >
        {t(name)}
      </span>
    </>
  );
};
