import { CardComponent } from "@/src/common/cardComponent/cardComponent";
import styles from "./cardCookiePolicies.module.css";
import { useTranslation } from "react-i18next";

export function CardCookiesPolicies() {
  const {t}=useTranslation()
  return (
    <div className={styles.container}>
      <CardComponent
        text={
          <div className={styles.text}>
            <p>{t('cookiesPolicies.card.p1')}</p>
            <p>{t('cookiesPolicies.card.p2')}</p>
            <ul>
              <li>{t('cookiesPolicies.card.li1')}</li>
              <li>{t('cookiesPolicies.card.li2')}</li>
              <li>{t('cookiesPolicies.card.li3')}</li>
              <li>{t('cookiesPolicies.card.li4')}</li>
            </ul>
            <p>{t('cookiesPolicies.card.p3')}</p>
            <p>{t('cookiesPolicies.card.p4')}</p>
            <p>{t('cookiesPolicies.card.p5a')}<span>{t('cookiesPolicies.card.p5b')}</span>{t('cookiesPolicies.card.p5c')}</p>
          </div>
        }
      />
    </div>
  );
}
