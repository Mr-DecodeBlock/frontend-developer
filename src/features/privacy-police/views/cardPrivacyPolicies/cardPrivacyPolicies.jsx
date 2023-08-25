import { CardComponent } from "@/src/common/cardComponent/cardComponent";
import styles from './cardPrivacyPolicies.module.css'
import { useTranslation } from "react-i18next";

export function Card(){
    const {t}=useTranslation()
    return (
        <div className={styles.container}>
            <CardComponent text={(
                    <div className={styles.text}>
                        <p>{t('privacyPolice.card.p1')}</p>
                        <p>{t('privacyPolice.card.p2')}</p>
                        <h5>{t('privacyPolice.card.h51')}</h5>
                        <p>{t('privacyPolice.card.p3')}</p>
                        <ul>
                            <li>{t('privacyPolice.card.li1')}</li>
                            <li>{t('privacyPolice.card.li2')}</li>
                            <li>{t('privacyPolice.card.li3')}</li>
                            <li>{t('privacyPolice.card.li4')}</li>
                            <li>{t('privacyPolice.card.li5')}</li>
                        </ul>
                        <p>{t('privacyPolice.card.p4')}</p>
                        <p>{t('privacyPolice.card.p5')}</p>
                        <p>{t('privacyPolice.card.p6')}</p>
                        <h5>{t('privacyPolice.card.h52')}</h5>
                        <p>{t('privacyPolice.card.p7')}</p>
                        <ul>
                            <li>{t('privacyPolice.card.li6')}</li>
                            <li>{t('privacyPolice.card.li7')}</li>
                            <li>{t('privacyPolice.card.li8')}</li>
                            <li>{t('privacyPolice.card.li9')}</li>
                            <li>{t('privacyPolice.card.li10')}</li>
                            <li>{t('privacyPolice.card.li11')}</li>
                            <li>{t('privacyPolice.card.li12')}</li>
                            <li>{t('privacyPolice.card.li13')}</li>
                        </ul>
                        <p>{t('privacyPolice.card.p8')}</p>
                        <ul>
                            <li>{t('privacyPolice.card.li14')}</li>
                            <li>{t('privacyPolice.card.li15')}</li>
                            <li>{t('privacyPolice.card.li16')}</li>
                            <li>{t('privacyPolice.card.li17')}</li>
                            <li>{t('privacyPolice.card.li18')}</li>
                            <li>{t('privacyPolice.card.li19')}</li>
                        </ul>
                        <p>{t('privacyPolice.card.p9')}</p>
                        <h5>{t('privacyPolice.card.h53')}</h5>
                        <p>{t('privacyPolice.card.p10')}</p>
                        <ul>
                            <li>{t('privacyPolice.card.li20')}</li>
                            <li>{t('privacyPolice.card.li21')}</li>
                            <li>{t('privacyPolice.card.li22')}</li>
                            <li>{t('privacyPolice.card.li23')}</li>
                            <li>{t('privacyPolice.card.li24')}</li>
                            <li>{t('privacyPolice.card.li25')}</li>
                        </ul>
                        <p>{t('privacyPolice.card.p11')}</p>
                        <ul>
                            <li>{t('privacyPolice.card.li26')}</li>
                            <li>{t('privacyPolice.card.li27')}</li>
                            <li>{t('privacyPolice.card.li28')}</li>
                            <li>{t('privacyPolice.card.li29')}</li>
                            <li>{t('privacyPolice.card.li30')}</li>
                            <li>{t('privacyPolice.card.li31')}</li>
                        </ul>
                        <p>{t('privacyPolice.card.p12')}</p>
                        <h5>{t('privacyPolice.card.h54')}</h5>
                        <p>{t('privacyPolice.card.p13')}</p>
                        <p>{t('privacyPolice.card.p14')}</p>
                        <p>{t('privacyPolice.card.p15')}</p>
                        <p>{t('privacyPolice.card.p16')}</p>
                        <p>{t('privacyPolice.card.p17')}</p>
                        <h5>{t('privacyPolice.card.h55')}</h5>
                        <p>{t('privacyPolice.card.p18a')}<span>{t('privacyPolice.card.p18b')}</span>{t('privacyPolice.card.p18c')}</p>
                    </div>
            )}/>
        </div>
    )
}

