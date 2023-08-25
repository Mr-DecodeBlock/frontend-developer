import Image from 'next/image'
import styles from './styles.module.css'

import flash1 from '../../../public/assets/img/home-revolution/flash1.svg'

export function CardComponentSocialHome({text}){
    return (
        <div className={styles.cardComponent}>
            <Image src={flash1} alt="flash" className={styles.flash1} />
            {text}
        </div>
    )
}