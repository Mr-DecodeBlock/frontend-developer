import { CardComponent } from "@/src/common/cardComponent/cardComponent";
import styles from './cardGuide.module.css'
import { useTranslation } from "react-i18next";

export function Card(){
    const {t}= useTranslation()
    return (
        <div className={styles.container}>
        <CardComponent text={(
                <div className={styles.text}>
                    <h5>{t('requestGuideSection.card.h51')}</h5>
                    <p>{t('requestGuideSection.card.p1')}</p>
                    <h5>{t('requestGuideSection.card.h52')}</h5>
                    <p>{t('requestGuideSection.card.p2')}</p>
                    <p>{t('requestGuideSection.card.p3')}</p>
                    <p>{t('requestGuideSection.card.p4')}</p>
                    <h5>{t('requestGuideSection.card.h53')}</h5>
                    <p>{t('requestGuideSection.card.p5')}</p>
                    <p>{t('requestGuideSection.card.p6')}</p>
                    <p>{t('requestGuideSection.card.p7')}</p>
                    <p>{t('requestGuideSection.card.p8')}</p>
                    <ul>
                        <li>{t('requestGuideSection.card.li1')}</li>
                        <li>{t('requestGuideSection.card.li2')}</li>
                    </ul>
                    <p>{t('requestGuideSection.card.p9')}</p>
                    <ul>
                        <li>{t('requestGuideSection.card.li3')}</li>
                        <li>{t('requestGuideSection.card.li4')}</li>
                        <li>{t('requestGuideSection.card.li5')}</li>
                        <li>{t('requestGuideSection.card.li6')}</li>
                    </ul>
                    <h5>{t('requestGuideSection.card.h54')}</h5>
                    <p>{t('requestGuideSection.card.p10')}</p>
                    <p>{t('requestGuideSection.card.p11')}</p>
                    <p>{t('requestGuideSection.card.p12')}</p>
                    <p>{t('requestGuideSection.card.p13a')}<span>{t('requestGuideSection.card.p13b')}</span>{t('requestGuideSection.card.p13c')}</p>
                </div>
            )}/>

        </div>
    )
}