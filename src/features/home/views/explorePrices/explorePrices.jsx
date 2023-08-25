import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './explorePrices.module.css'
import Image from 'next/image'
import search from '../../../../../public/assets/img/home/search.svg'
import arrow from '../../../../../public/assets/img/home-revolution/arrow.svg'
import azteca from '../../../../../public/assets/img/wallet.architecture/azteca_2.png'
import bitcoin from '../../../../../public/assets/img/home/coins/bitcoin.svg'
import ether from '../../../../../public/assets/img/home/coins/ether.svg'
import theter from '../../../../../public/assets/img/home/coins/theter.svg'
import monero from '../../../../../public/assets/img/home/coins/moneropng.png'
import bnb from '../../../../../public/assets/img/home/coins/btc.svg'
import thron from '../../../../../public/assets/img/home/coins/thronpng.png'
import up from '../../../../../public/assets/img/home/coins/up.png'
import down from '../../../../../public/assets/img/home/coins/down.svg'

export function ExplorePrices() {
    const [order, setOrder] = useState("all")
    const [coinsList, setCoinsList] = useState([])
    const [cryptoData, setCryptoData] = useState(null);
    const [searchValue, setSearchValue] = useState('');
    const { t } = useTranslation()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,BNB,LTC,USDT,ETH,XMR,TRX&tsyms=USD"
                );
                const data = await response.json();
                setCryptoData(data?.RAW);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const list = [
        {
            src: bitcoin,
            name: "Bitcoin",
            initials: "BTC",
            price: cryptoData?.BTC?.USD?.PRICE?.toFixed(2) || "N/A",
            valoration: cryptoData?.BTC?.USD?.CHANGEPCTDAY?.toFixed(2) || "N/A",
            network: "Bitcoin"
        },
        {
            src: ether,
            name: "Ether",
            initials: "ETH",
            price: cryptoData?.ETH?.USD?.PRICE?.toFixed(2) || "N/A",
            valoration: cryptoData?.ETH?.USD?.CHANGEPCTDAY?.toFixed(2) || "N/A",
            network: "Ethereoum"
        },
        {
            src: theter,
            name: "Theter",
            initials: "USDT",
            price: cryptoData?.USDT?.USD?.PRICE?.toFixed(2) || "N/A",
            valoration: cryptoData?.USDT?.USD?.CHANGEPCTDAY?.toFixed(2) || "N/A",
            network: "Ethereoum, BSC, Polygon, TRON"
        },
        {
            src: monero,
            name: "Monero",
            initials: "XMR",
            price: cryptoData?.XMR?.USD?.PRICE?.toFixed(2) || "N/A",
            valoration: cryptoData?.XMR?.USD?.CHANGEPCTDAY?.toFixed(2) || "N/A",
            network: "XMR"
        },
        {
            src: bnb,
            name: "BNB",
            initials: "BNB",
            price: cryptoData?.BNB?.USD?.PRICE?.toFixed(2) || "N/A",
            valoration: cryptoData?.BNB?.USD?.CHANGEPCTDAY?.toFixed(2) || "N/A",
            network: "BSC, Ethereoum, BSP"
        },
        {
            src: thron,
            name: "Thron",
            initials: "TRX",
            price: cryptoData?.TRX?.USD?.PRICE?.toFixed(2) || "N/A",
            valoration: cryptoData?.TRX?.USD?.CHANGEPCTDAY?.toFixed(2) || "N/A",
            network: "TRON"
        }
    ]

    useEffect(() => {
        setCoinsList(list)
    }, [cryptoData])

    const handleSelectAll = (e) => {
        e.preventDefault()
        setOrder("all")
        setCoinsList(list)
    }

    const handleSelectRandom = (e) => {
        e.preventDefault()
        setOrder("random")
        const shuffledList = list.slice().sort(() => Math.random() - 0.5);
        setCoinsList(shuffledList)
    }

    const handleSelectDown = (e) => {
        e.preventDefault()
        setOrder("down")
        const sortedList = list.slice().sort((a, b) => {
            const valA = a.valoration !== "N/A" ? parseFloat(a.valoration) : -Infinity;
            const valB = b.valoration !== "N/A" ? parseFloat(b.valoration) : -Infinity;

            return valB - valA;
        });
        setCoinsList(sortedList)
    }

    const handleSearchChange = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchValue(query);

        const results = list.filter(item => item.name.toLowerCase().includes(query));
        setCoinsList(results);
    };

    return (
        <div className={styles.container}>
            <Image src={azteca} alt='img' className={styles.azteca} />
            <div className={styles.title}>{t('home.explorePrices.explore')}</div>
            <div className={styles.searchContainer}>
                <div className={styles.dropdown}>
                    <div className={order === "all" ? styles.itemSelect : styles.item} onClick={(e) => handleSelectAll(e)}>{t('home.explorePrices.all')}</div>
                    <div className={order === "random" ? styles.itemSelect : styles.item} onClick={(e) => handleSelectRandom(e)}>{t('home.explorePrices.random')}</div>
                    <div className={order === "down" ? styles.itemSelect : styles.item} onClick={(e) => handleSelectDown(e)}>{t('home.explorePrices.down')}</div>
                </div>
                <div className={styles.searchRight}>
                    <input
                        className={styles.search}
                        value={searchValue}
                        onChange={handleSearchChange}
                        placeholder={t("broker.pricesSearch")}
                    />
                    <Image src={search} alt={"search"} className={styles.searchIcon} />
                </div>

            </div>
            <div className={styles.bigCard}>

                <div className={styles.cardsContainer}>
                    <div className={styles.cardTitle}>
                        <div style={{ width: "12%" }} className={styles.cardTitleItems}></div>
                        <div style={{ width: "15%" }} className={styles.cardTitleItems}>{t('home.explorePrices.name')}</div>
                        <div style={{ width: "13%" }} className={styles.cardTitleItems}>{t('home.explorePrices.crypto')}</div>
                        <div style={{ width: "20%" }} className={styles.cardTitleItems}>{t('home.explorePrices.network')}</div>
                        <div style={{ width: "20%" }} className={styles.cardTitleItems}>{t('home.explorePrices.price')}</div>
                        <div style={{ width: "20%" }} className={styles.cardTitleItems}>{t('home.explorePrices.variation')}</div>
                    </div>
                    {coinsList?.map((l, i) => {
                        return (
                            <div key={i} className={styles.miniCard}>
                                <div style={{ width: "12%" }} className={styles.coinImg}><Image src={l.src} alt='img' className={styles.img} /></div>
                                <div style={{ width: "15%" }} className={styles.coinName}>{l.name}</div>
                                <div style={{ width: "13%" }} className={styles.coinInitials}>{l.initials}</div>
                                <div style={{ width: "20%" }} className={styles.cardRed}>{l.network}</div>
                                <div style={{ width: "20%" }} className={styles.price}>${l.price} USD</div>
                                <div style={{ width: "20%" }} className={l.valoration < 0 ? styles.valorationDown : styles.valorationUp}>
                                    <Image src={l.valoration < 0 ? down : up} alt='img' className={styles.priceArrow} />
                                    {l.valoration}%
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className={styles.footer}>
                    {/* <div className={styles.text}>{t('home.explorePrices.buy')}</div> */}
                    {/* <div className={styles.seeMore}>
                        <p>{t('home.explorePrices.seeMore')}</p>
                        <Image src={arrow} alt='flecha' className={styles.seeMoreArrow} />
                    </div> */}
                </div>
            </div>
        </div>
    )
}