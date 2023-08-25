import { CardComponent } from "@/src/common/cardComponent/cardComponent";
import styles from './cardContainer.module.css'
import { useTranslation } from "react-i18next";

export function Card() {
    const { t } = useTranslation()
    return (
        <div className={styles.container}>
            <CardComponent text={(
                <div className={styles.text}>
                    <p>{t('termsOfUse.card.p1')}</p>
                    <h5>{t('termsOfUse.card.h51')}</h5>
                    <p>{t('termsOfUse.card.p2')}</p>
                    <ul>
                        <li>{t('termsOfUse.card.li1')}</li>
                        <li>{t('termsOfUse.card.li2')}</li>
                        <li>{t('termsOfUse.card.li3')}</li>
                        <li>{t('termsOfUse.card.li4')}</li>
                        <li>{t('termsOfUse.card.li5')}</li>
                        <li>{t('termsOfUse.card.li6')}</li>
                        <li>{t('termsOfUse.card.li7')}</li>
                        <li>{t('termsOfUse.card.li8')}</li>
                        <li>{t('termsOfUse.card.li9')}</li>
                        <li>{t('termsOfUse.card.li10')}</li>
                    </ul>
                    <h5>{t('termsOfUse.card.h52')}</h5>
                    <p>{t('termsOfUse.card.p3')}</p>
                    <ul>
                        <li>{t('termsOfUse.card.li11')}</li>
                        <li>{t('termsOfUse.card.li12')}</li>
                        <li>{t('termsOfUse.card.li13')}</li>
                        <li>{t('termsOfUse.card.li14')}</li>
                    </ul>
                    <h5>{t('termsOfUse.card.h53')}</h5>
                    <p>{t('termsOfUse.card.p4')}</p>
                    <ul>
                        <li>{t('termsOfUse.card.li15')}</li>
                        <li>{t('termsOfUse.card.li16')}</li>
                        <li>{t('termsOfUse.card.li17')}</li>
                    </ul>
                    <h5>{t('termsOfUse.card.h54')}</h5>
                    <p>{t('termsOfUse.card.p5')}</p>
                    <ul>
                        <li>{t('termsOfUse.card.li18')}</li>
                        <li>{t('termsOfUse.card.li19')}</li>
                        <li>{t('termsOfUse.card.li20')}</li>
                        <li>{t('termsOfUse.card.li21')}</li>
                        <li>{t('termsOfUse.card.li22')}</li>
                        <li>{t('termsOfUse.card.li23')}</li>
                        <li>{t('termsOfUse.card.li24')}</li>
                        <li>{t('termsOfUse.card.li25')}</li>
                        <li>{t('termsOfUse.card.li26')}</li>
                        <li>{t('termsOfUse.card.li27')}</li>
                        <li>{t('termsOfUse.card.li28')}</li>
                    </ul>
                    <h5>{t('termsOfUse.card.h55')}</h5>
                    <p>{t('termsOfUse.card.p6')}</p>
                    <h5>{t('termsOfUse.card.h56')}</h5>
                    <p>{t('termsOfUse.card.p7')}</p>
                    <h5>{t('termsOfUse.card.h57')}</h5>
                    <p>{t('termsOfUse.card.p8')}</p>
                    <h5>{t('termsOfUse.card.h58')}</h5>
                    <p>{t('termsOfUse.card.p9')}</p>
                    <h5>{t('termsOfUse.card.h59')}</h5>
                    <p>{t('termsOfUse.card.p10')}</p>
                    <h5>{t('termsOfUse.card.h510')}</h5>
                    <p>{t('termsOfUse.card.p11')}</p>
                    <h5>{t('termsOfUse.card.h511')}</h5>
                    <p>{t('termsOfUse.card.p12')}</p>
                    <h5>{t('termsOfUse.card.h512')}</h5>
                    <p>{t('termsOfUse.card.p13')}</p>
                    <h5>{t('termsOfUse.card.h513')}</h5>
                    <p>{t('termsOfUse.card.p14')}</p>
                    <h5>{t('termsOfUse.card.h514')}</h5>
                    <p>{t('termsOfUse.card.p15')}</p>
                    <h5>{t('termsOfUse.card.h515')}</h5>
                    <p>{t('termsOfUse.card.p16')}</p>
                    <h5>{t('termsOfUse.card.h516')}</h5>
                    <p>{t('termsOfUse.card.p17')}</p>
                    <h5>{t('termsOfUse.card.h517')}</h5>
                    <p>{t('termsOfUse.card.p18')}</p>
                    <h5>{t('termsOfUse.card.h518')}</h5>
                    <p>{t('termsOfUse.card.p19')}</p>
                    <h5>{t('termsOfUse.card.h519')}</h5>
                    <p>{t('termsOfUse.card.p20')}</p>
                    <h5>{t('termsOfUse.card.h520')}</h5>
                    <p>{t('termsOfUse.card.p21a')}<span>{t('termsOfUse.card.p21b')}</span>{t('termsOfUse.card.p21c')}</p>
                </div>
            )} />
        </div>
    )
}

