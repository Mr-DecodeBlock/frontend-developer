import { useTranslation } from "react-i18next";
import styles from './home-revolution.section.module.css'
import Image from "next/image";

import red from '../../../../../public/assets/img/home-revolution/red.svg'
import etherium from '../../../../../public/assets/img/home-revolution/etherium.svg'
import blockchain from '../../../../../public/assets/img/home-revolution/blockchain.svg'
import flash1 from '../../../../../public/assets/img/home-revolution/flash1.svg'
import flash2 from '../../../../../public/assets/img/home-revolution/flash2.svg'
import arrow from '../../../../../public/assets/img/home-revolution/arrow.svg'
import Link from "next/link";


export function HomeRevolutionSection() {
    const { t } = useTranslation();

    const miniCards = [
        {
            svg: red,
            title: t('home.revolution.miniCards.nodes'),
            description: t('home.revolution.miniCards.nodesDescription'),
            link: "#linkServices"
        },
        {
            svg: etherium,
            title: t('home.revolution.miniCards.etherium'),
            description: t('home.revolution.miniCards.etheriumDescription'),
            link: "#linkPrincipalPay"
        },
        {
            svg: blockchain,
            title: t('home.revolution.miniCards.architecture'),
            description: t('home.revolution.miniCards.architectureDescription'),
            link: "#allCriptos"
        }
    ]

    return (
        <div className={styles.revolution}>
            <Image src={flash1} alt="flash" className={styles.flash1} />
            <Image src={flash2} alt="flash" className={styles.flash2} />
            <div className={`d-flex justify-content-center ${styles.revolutionTitle}`}>
                <p className={`text-center ${styles.textRevolutionTitle}`}>
                    <span className={styles.orangeBoldTitle}>{t('home.revolution.revolutionizing')}</span>{t('home.revolution.online')}<span className={styles.boldTitle}>{t('home.revolution.blockchain')}</span>
                </p>
            </div>
            <div className={styles.revolutionSubTitle}>
                <p className={`text-center ${styles.textRevolutionSubTitle}`}>
                {t('home.revolution.discover')} <span className={styles.orangeBoldSubTitle}>BSP Chain</span>.
                </p>
            </div>
            <div className={styles.cardsContainer}>
                {miniCards.map((card, i) => {
                    return (
                        <div key={i} className={styles["card-grad"]}>
                            <div className={styles.icon}>
                                <Image src={card.svg} alt="card-image" />
                            </div>
                            <div className={styles.miniCardText}>
                                <div className={styles.miniCardBold}>{card.title}</div>
                                <div className={styles.miniCardDescription}>{card.description}</div>
                                <div className={styles.more}>
                                <Link href={card.link}>
                                    <div className={styles.miniCardBold}> {t('home.revolution.miniCards.seeMore')}</div>
                                    <Image src={arrow} alt="arrow" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}