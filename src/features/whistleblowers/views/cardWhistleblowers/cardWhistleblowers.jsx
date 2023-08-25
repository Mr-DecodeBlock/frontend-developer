import { CardComponent } from "@/src/common/cardComponent/cardComponent";
import styles from './cardWhistleblowers.module.css'
import { useTranslation } from "react-i18next";

export function Card(){
    const {t}=useTranslation()
    return (
        <div className={styles.container}>
        <CardComponent text={(
                <div className={styles.text}>
                    <p>{t('whistleblowers.card.p1')}</p>
                    <p>{t('whistleblowers.card.p2')}</p>
                    <p>{t('whistleblowers.card.p3')}</p>
                    <p>{t('whistleblowers.card.p4')}</p>
                    <p>{t('whistleblowers.card.p5')}</p>
                    <p>{t('whistleblowers.card.p6')}</p>
                    <p>{t('whistleblowers.card.p7a')}<span>{t('whistleblowers.card.p7b')}</span>{t('whistleblowers.card.p7c')}</p>
                </div>
            )}/>

        </div>
    )
}