import Image from "next/image";
import { useTranslation } from 'react-i18next';
import walletImage from '../../../../../public/assets/img/wallet.architecture/walletSection.svg';
import wheel1 from '../../../../../public/assets/img/wallet.architecture/wheel1.svg';
import wheel2 from '../../../../../public/assets/img/wallet.architecture/wheel2.svg';
import circule from '../../../../../public/assets/img/wallet.architecture/circule.svg';
import wheel3 from '../../../../../public/assets/img/wallet.architecture/Vector_aro.png';
import styles from './sectionWallet.module.css';

export function SectionWallet() {
    const { t } = useTranslation();
    return (
        <div className={styles.container}>
            <Image src={wheel1} alt="wheel1" className={styles.wheel1}/>
            <Image src={wheel2} alt="wheel2" className={styles.wheel2}/>
            <Image src={wheel3} alt="wheel2" className={styles.wheel3}/>
            <Image src={wheel3} alt="wheel2" className={styles.wheel4}/>
            <Image src={circule} alt="circule" className={styles.circuleImg}/>
            <div className={styles.box}>
                <div className={styles.boxLeft}>
                    <div className={styles.title}>
                        <h6>{t('wallet.createDigitalWalletTitle')}</h6>
                        <h3>{t('wallet.definitiveDigitalWallet')}</h3>
                    </div>
                    <div className={styles.miniCards}>
                        <div className={styles.miniCard}>
                            <div className={styles.circule}>
                                1
                            </div>
                            <div className={styles.description}>{t('wallet.securityFirstLevel')}</div>
                        </div>
                        <div className={styles.miniCard}>
                            <div className={styles.circule}>
                                2
                            </div>
                            <div className={styles.description}>{t('wallet.securityFirstLevel')}</div>
                        </div>
                        <div className={styles.miniCard}>
                            <div className={styles.circule}>
                                3
                            </div>
                            <div className={styles.description}>{t('wallet.securityFirstLevel')}</div>
                        </div>
                    </div>
                </div>
                <div className={styles.boxRight}>
                    <Image src={walletImage} alt="walletImage" />
                </div>
            </div>
        </div>
    )
}