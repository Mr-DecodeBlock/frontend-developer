import Image from 'next/image'
import styles from './cardComponent.module.css'

import flash1 from '../../../public/assets/img/home-revolution/flash1.svg'

export function CardComponent({text}){
    return (
        <div className={styles.cardComponent}>
            <Image src={flash1} alt="flash" className={styles.flash1} />
            {text}
        </div>
    )
}