import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

import styles from "./styles.module.scss";

export function Business({ address }) {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.bussiness}>
        <div className={styles.paragraph__container}>
          <span className={styles.paragraph}>{t(address)}</span>
        </div>
      </div>

      <div className={styles.paragraph__container}>
        <div className={styles.buttonsContainer}>
          <button
            className={styles.registerButton}
            onClick={() => {
              router.push("/register");
            }}
          >
            {t("footer.register")}
          </button>

          <button
            className={styles.loginButton}
            onClick={() => {
              router.push("/login");
            }}
          >
            {t("footer.login")}
          </button>
        </div>
      </div>
    </div>
  );
}
