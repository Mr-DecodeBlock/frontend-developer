import styles from './costEffectiveness.module.css'
import costEffectiveness from '../../../../../public/assets/img/broker/costEffectiveness.svg'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

export function CostEffectiveness(){
    const {t}=useTranslation()
    return (
        <div className={styles.container}>
            <div className={styles.phoneImage}>
                <Image src={costEffectiveness} alt='img'/>
            </div>
            <div className={styles.text}>
                <div className={styles.title}>{t('broker.costEffectiveness')}</div>
                <div className={styles.description}>{t('broker.purpose')}</div>
                <div className={styles.button1}>lorem ipsum</div>
            </div>
            <div className={styles.button2}>lorem ipsum</div>
        </div>
    )
}