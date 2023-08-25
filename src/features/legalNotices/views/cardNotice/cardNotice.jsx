import { CardComponent } from "@/src/common/cardComponent/cardComponent";
import styles from './cardNotice.module.css'
import { useTranslation } from "react-i18next";

export function Card() {
    const {t}= useTranslation()
    return (
        <div className={styles.container}>
            <CardComponent text={(
                <div className={styles.text}>
                    <p>{t('legalNews.card.p1')}</p>
                    <p>{t('legalNews.card.p2')}</p>
                    <p>{t('legalNews.card.p3')}</p>
                    <h5>{t('legalNews.card.h51')}</h5>
                    <p>{t('legalNews.card.p4')}</p>
                    <p>{t('legalNews.card.p5')}</p>
                    <p>{t('legalNews.card.p6')}</p>
                    <p>{t('legalNews.card.p7')}</p>
                    <p>{t('legalNews.card.p8')}</p>
                    <p>{t('legalNews.card.p9')}</p>
                    <p>{t('legalNews.card.p10')}</p>
                    <p>{t('legalNews.card.p11')}</p>
                    <h5>{t('legalNews.card.h52')}</h5>
                    <p>{t('legalNews.card.p12')}</p>
                    <p>{t('legalNews.card.p13')}</p>
                    <p>{t('legalNews.card.p14')}</p>
                    <h5>{t('legalNews.card.h53')}</h5>
                    <p>{t('legalNews.card.p15')}</p>
                    <p>{t('legalNews.card.p16')}</p>
                    <p>{t('legalNews.card.p17')}</p>
                    <h5>{t('legalNews.card.h54')}</h5>
                    <p>{t('legalNews.card.p18a')}<span>{t('legalNews.card.p18b')}</span>{t('legalNews.card.p18c')}</p>
                </div>
            )} />

        </div>
    )
}