import React, { useEffect, useState } from 'react';
import styles from './graph.module.css';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import price from '../../../../../public/assets/img/broker/price.svg';
import cake from '../../../../../public/assets/img/broker/cake.svg';
import arrow from '../../../../../public/assets/img/broker/arrow.svg';
import volume from '../../../../../public/assets/img/broker/volume.svg';
import bitcoin from '../../../../../public/assets/img/home/coins/bitcoin.svg';
import TradingViewWidget from './tradingViewWidget';

export function Graph() {
    const { t } = useTranslation();
    const [cryptoData, setCryptoData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,BNB,LTC,USDT,ETH,XMR,TRX&tsyms=USD");
                const data = await response.json();
                setCryptoData(data?.RAW);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Image src={bitcoin} alt='img' />
                <div className={styles.headerText}>
                    <div className={styles.graphName}>{t('broker.bitcoinUSD')}</div>
                    <div className={styles.principalPrice}><p><span>{cryptoData?.BTC?.USD?.PRICE?.toFixed(2) || t('broker.notAvailable')}</span> usd</p></div>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.graph}>
                    <TradingViewWidget/>
                </div>
                <div className={styles.cardRight}>
                    <div className={styles.title}>{t('broker.movements')}</div>
                    <div className={styles.itemsContainer}>
                        <div className={styles.items}>
                            <div>
                                <Image src={price} alt='img' />
                            </div>
                            <div className={styles.text}>
                                <span>{t('broker.price')}</span>
                                <p>{cryptoData?.BTC?.USD?.PRICE?.toFixed(2) || t('broker.notAvailable')}</p>
                            </div>
                        </div>
                        <div className={styles.items}>
                            <div>
                                <Image src={cake} alt='img' />
                            </div>
                            <div className={styles.text}>
                                <span>24h/precio</span>
                                <p>{cryptoData?.BTC?.USD?.CHANGEPCT24HOUR?.toFixed(2) || t('broker.notAvailable')}%</p>
                            </div>
                        </div>
                        <div className={styles.items}>
                            <div>
                                <Image src={arrow} alt='img' />
                            </div>
                            <div className={styles.text}>
                                <span>{t('broker.marketCap')}</span>
                                <p>$29520.00</p>
                            </div>
                        </div>
                        <div className={styles.items}>
                            <div>
                                <Image src={volume} alt='img' />
                            </div>
                            <div className={styles.text}>
                                <span>{t('broker.volume24h')}</span>
                                <p>{cryptoData?.BTC?.USD?.VOLUME24HOUR?.toFixed(2) || t('broker.notAvailable')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
