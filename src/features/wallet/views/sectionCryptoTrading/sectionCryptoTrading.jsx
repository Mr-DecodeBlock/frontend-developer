import Image from 'next/image'
import styles from './sectionCryptoTrading.module.css'
import flash1 from '../../../../../public/assets/img/home-revolution/flash1.svg'
import flash2 from '../../../../../public/assets/img/home-revolution/flash2.svg'

import coins from '../../../../../public/assets/img/wallet.architecture/coins.svg'
import paymentMethods from '../../../../../public/assets/img/wallet.architecture/paymentMethods.svg'
import reliable from '../../../../../public/assets/img/wallet.architecture/reliable.svg'
import suport from '../../../../../public/assets/img/wallet.architecture/suport.svg'
import azteca2 from '../../../../../public/assets/img/wallet.architecture/azteca2.svg'
import azteca2a from '../../../../../public/assets/img/wallet.architecture/azteca_1.png'
import azteca3b from '../../../../../public/assets/img/wallet.architecture/azteca_2.png'
import { useTranslation } from 'react-i18next'

export function SectionCryptoTrading(){
    const { t } = useTranslation();

    const cardsData = [
        {
            image: reliable,
            title: t('wallet.reliablePlatformTitle'),
            description: t('wallet.reliablePlatformDescription'),
        },
        {
            image: coins,
            title: t('wallet.wideCoinSelectionTitle'),
            description: t('wallet.wideCoinSelectionDescription'),
        },
        {
            image: paymentMethods,
            title: t('wallet.multiplePaymentMethodsTitle'),
            description: t('wallet.multiplePaymentMethodsDescription'),
        },
        {
            image: suport,
            title: t('wallet.24hSupportTitle'),
            description: t('wallet.24hSupportDescription'),
        },
    ];

    return (
        <div className={styles.container}>
        <Image src={azteca2} alt="image1" className={styles.background1}/>
        <Image src={azteca2a} alt="image1" className={styles.background1a}/>
        <Image src={azteca3b} alt="image2" className={styles.background2}/>
        <div className={styles.card}>
            <Image src={flash1} alt="flash" className={styles.flash1} />
            <Image src={flash2} alt="flash" className={styles.flash2} />
            <div className={styles.header}>
                <h3 className={styles.title}>{t('wallet.leadingCryptoPlatform')}</h3>
                <h5 className={styles.subTitle1}>{t('wallet.placeToBuySell')}</h5>
            </div>
            <div className={styles.miniCards}>
                {cardsData.map((card, i) => {
                    return (
                        <div className={styles.miniCard} key={i}>
                            <Image src={card.image} alt="cardImage" />
                            <div className={styles.cardText}>
                                <h5 className={styles.subTitle}>{card.title}</h5>
                                <p className={styles.description}>{card.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
        </div>
    )
}