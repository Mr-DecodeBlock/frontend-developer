import Image from 'next/image'
import styles from './loremIpsum.module.css'
import loremIpsum from '../../../../../public/assets/img/broker/loremImpus.svg'

export function LoremIpsum() {
    return (
        <div className={styles.continer}>            
            <div className={styles.text}>
                <div className={styles.title}><p>Lorem ipsum lrem ipsum y <span>lorem ipsum</span></p></div>
                <div className={styles.button1}>Iorem ipsum</div>
            </div>
            <div className={styles.image}>
                <Image src={loremIpsum}/>
            </div>
            <div className={styles.button2}>Iorem ipsum</div>
        </div>
    )
}