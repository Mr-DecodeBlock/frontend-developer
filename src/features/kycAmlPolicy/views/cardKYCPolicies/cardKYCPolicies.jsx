import { CardComponent } from "@/src/common/cardComponent/cardComponent";
import styles from './cardKYCPolicies.module.css'
import { useTranslation } from "react-i18next";

export function CardKycPolicies(){
    const {t}=useTranslation()
    return (
        <div className={styles.container}>
        <CardComponent text={(
                <div className={styles.text}>
                    <p>{t('kycamlPolicies.card.p1')}</p>
                    <h5>{t('kycamlPolicies.card.h51')}</h5>
                    <p>{t('kycamlPolicies.card.p2')}</p>
                    <p>{t('kycamlPolicies.card.p3')}</p>
                    <h5>{t('kycamlPolicies.card.h52')}</h5>
                    <p>{t('kycamlPolicies.card.p4')}</p>
                    <p>{t('kycamlPolicies.card.p5')}</p>
                    <h5>{t('kycamlPolicies.card.h53')}</h5>
                    <p>{t('kycamlPolicies.card.p6')}</p>
                    <h5>{t('kycamlPolicies.card.h54')}</h5>
                    <p>{t('kycamlPolicies.card.p7')}</p>
                    <h5>{t('kycamlPolicies.card.h55')}</h5>
                    <p>{t('kycamlPolicies.card.p8a')}<span>{t('kycamlPolicies.card.p8b')}</span>{t('kycamlPolicies.card.p8c')}</p>
                </div>
            )}/>

        </div>
    )
}

