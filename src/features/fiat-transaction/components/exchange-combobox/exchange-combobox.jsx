import { useState, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Combobox, Popover, Transition } from '@headlessui/react'
import styles from './styles.module.css'
import Image from 'next/image'

function ArrowDownIcon({ ...props }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={15}
            height={10}
            fill="none"
            {...props}
        >
            <path
                fill="#fff"
                d="m.268 1.877 6.399 7.726c.103.125.23.225.375.293a1.068 1.068 0 0 0 1.293-.293l6.398-7.726C15.345 1.139 14.838 0 13.9 0H1.1C.162 0-.345 1.14.268 1.877Z"
            />
        </svg>
    )
}

export function CoinCombobox({
    coins,
    selectedCoin,
    setSelectedCoin,
}) {
    const { t } = useTranslation()
    const [query, setQuery] = useState('')
    const filteredCoins = query === '' ? coins : coins.filter((coin) => {
        return coin.name.toLowerCase().includes(query.toLowerCase())
    })

    const comboBtn = useRef(null)

    return (
        <Combobox>
            <Popover className={styles.popover}>
                {({ open, close }) => (
                    <>
                        <Popover.Button
                            className={styles.button}
                            onClick={() => {
                                comboBtn.current?.click()
                            }}
                        >
                            {selectedCoin?.ticker ? (
                                <div className={styles.selected}>
                                    <Image
                                        src={selectedCoin.image}
                                        alt={selectedCoin.name}
                                        width={25}
                                        height={25}
                                        className={styles.selectedImg}
                                    />
                                    <div className={styles.selectedText}>
                                        <h5>
                                            {selectedCoin.ticker}
                                        </h5>
                                    </div>
                                    <ArrowDownIcon />
                                </div>
                            ) : <span className={styles.none}>
                                {t("fiatTransaction.exchange.selectCoin")}
                            </span>}
                        </Popover.Button>
                        <Popover.Panel className={styles.panel}>

                            <Combobox.Input
                                className={styles.input}
                                onChange={(event) => {
                                    setQuery(event.target.value)
                                }}
                                autoFocus
                            />
                            <Combobox.Button style={{ display: "hidden" }} ref={comboBtn} />
                            <Combobox.Options className={styles.options} >
                                {filteredCoins.map((coin) => (
                                    <Combobox.Option
                                        key={coin.legacyTicker}
                                        value={coin}
                                        className={styles.item}
                                        onClick={() => {
                                            setSelectedCoin(coin)
                                            close()
                                        }}
                                    >
                                        <Image
                                            src={coin.image}
                                            alt={coin.name}
                                            width={20}
                                            height={20}
                                            className={styles.itemImg}
                                        />
                                        <div className={styles.itemText}>
                                            <h5>
                                                {coin.ticker} ({coin.network})
                                            </h5>
                                            <p>
                                                {coin.name}
                                            </p>
                                        </div>
                                    </Combobox.Option>
                                ))}
                            </Combobox.Options>
                        </Popover.Panel>
                    </>
                )}
            </Popover>
        </Combobox>
    )
}

export function FiatCombobox({
    fiats,
    selectedFiat,
    setSelectedFiat,
}) {
    const { t } = useTranslation()
    const [query, setQuery] = useState('')
    const filteredFiats = query === '' ? fiats : fiats.filter((fiat) => {
        return fiat.name.toLowerCase().includes(query.toLowerCase())
    })

    const comboBtn = useRef(null)

    return (
        <Combobox>
            <Popover className={styles.popover}>
                {({ open, close }) => (
                    <>
                        <Popover.Button
                            className={styles.button}
                            onClick={() => {
                                comboBtn.current?.click()
                            }}
                        >
                            {selectedFiat?.ticker ? (
                                <div className={styles.selected}>
                                    <Image
                                        src={selectedFiat.logo_url}
                                        alt={selectedFiat.name}
                                        width={25}
                                        height={25}
                                        className={styles.selectedImg}
                                    />
                                    <div className={styles.selectedText}>
                                        <h5>
                                            {selectedFiat.ticker}
                                        </h5>
                                    </div>
                                    <ArrowDownIcon />
                                </div>
                            ) : <span className={styles.none}>
                                {t("fiatTransaction.exchange.selectFiat")}
                            </span>}
                        </Popover.Button>
                        <Popover.Panel className={styles.panel}>

                            <Combobox.Input
                                className={styles.input}
                                onChange={(event) => {
                                    setQuery(event.target.value)
                                }}
                                autoFocus
                            />
                            <Combobox.Button style={{ display: "hidden" }} ref={comboBtn} />
                            <Combobox.Options className={styles.options} >
                                {filteredFiats.map((fiat) => (
                                    <Combobox.Option
                                        key={fiat.legacyTicker}
                                        value={fiat}
                                        className={styles.item}
                                        onClick={() => {
                                            setSelectedFiat(fiat)
                                            close()
                                        }}
                                    >
                                        <Image
                                            src={fiat.logo_url}
                                            alt={fiat.name}
                                            width={20}
                                            height={20}
                                            className={styles.itemImg}
                                        />
                                        <div className={styles.itemText}>
                                            <h5>
                                                {fiat.ticker}
                                            </h5>
                                            <p>
                                                {fiat.name}
                                            </p>
                                        </div>
                                    </Combobox.Option>
                                ))}
                            </Combobox.Options>
                        </Popover.Panel>
                    </>
                )}
            </Popover>
        </Combobox>
    )
}