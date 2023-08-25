import Image from 'next/image'
import firstCoin from '../../../../../../../public/assets/img/home/price-to-buy/first-coin.svg'
import secondCoin from '../../../../../../../public/assets/img/home/price-to-buy/second-coin.svg'
import thirdCoin from '../../../../../../../public/assets/img/home/price-to-buy/third-coin.svg'
import flask from '../../../../../../../public/assets/img/home/price-to-buy/flask.svg'
import styles from "./styles.module.css";


export function CoinBackground({ children }) {
    return (
        <div className={styles.container}>
            <Image
                className={styles.firstCoin}
                src={firstCoin}
            />
            <Image
                className={styles.secondCoin}
                src={secondCoin}
            />
            <Image
                className={styles.thirdCoin}
                src={thirdCoin}
            />
            <Image
                className={styles.flaskCoin}
                src={flask}
            />
            {children}
        </div>
    )
}
