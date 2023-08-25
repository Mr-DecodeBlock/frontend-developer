import { CardComponent } from "@/src/common/cardComponent/cardComponent";
import styles from './cardComunityRules.module.css'
import { useTranslation } from "react-i18next";

export function Card(){
    const {t}=useTranslation()
    return (
        <div className={styles.container}>
        <CardComponent text={(
                <div className={styles.text}>
                    <p>{t('communityRules.cardP1')}</p>
                    <p>{t('communityRules.cardP2')}</p>
                    <h5>{t('communityRules.cardh51')}</h5>
                    <p>{t('communityRules.cardP3')}</p>
                    <ul>
                        <li>{t('communityRules.cardli1')}</li>
                        <li>{t('communityRules.cardli2')}</li>
                        <li>{t('communityRules.cardli3')}</li>
                        <li>{t('communityRules.cardli4')}</li>
                    </ul>
                    <h5>{t('communityRules.cardh52')}</h5>
                    <p>{t('communityRules.cardP4')}</p>
                    <ul>
                        <li>{t('communityRules.cardli5')}</li>
                        <li>{t('communityRules.cardli6')}</li>
                        <li>{t('communityRules.cardli7')}</li>
                        <li>{t('communityRules.cardli8')}</li>
                        <li>{t('communityRules.cardli9')}</li>
                        <li>{t('communityRules.cardli10')}</li>
                    </ul>
                    <h5>{t('communityRules.cardh53')}</h5>
                    <p>{t('communityRules.cardP5a')}<span>{t('communityRules.cardP5b')}</span>{t('communityRules.cardP5c')}</p>
                </div>
            )}/>
        </div>
    )
}

