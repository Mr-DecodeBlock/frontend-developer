import { useState, useEffect } from 'react'
import { useGetCurrencies, useGetEstimatedAmount, useValidateWallet } from '../../hooks'
import { CoinCombobox, FiatCombobox } from '../../components'
import Spinner from 'react-bootstrap/Spinner';
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router';
import styles from './styles.module.css'

export function ExchangeForm({
    isComplete = false,
    transaction: typeTransaction,
    coin,
    fiat,
    amount,
}) {
    const { t } = useTranslation()
    const router = useRouter()
    const { coins, fiats, handleSelectCoin, handleSelectFiat, selectedCoin, selectedFiat } = useGetCurrencies({ coin, fiat })
    const [transaction, setTransaction] = useState(typeTransaction || "buy")

    const { estimatedAmount, loading, estimatesRate, error, handleFromAmount, fromAmount } = useGetEstimatedAmount({
        coin: selectedCoin,
        fiat: selectedFiat,
        isBuy: transaction === "buy",
        amount,
    })

    const { handleWalletChange, error: errorWallet } = useValidateWallet({
        coin: selectedCoin,
    })

    const handleTransaction = (transaction) => {
        setTransaction(transaction)
    }

    const formatNumber = (number) => {
        if (!number) return '...';
        return new Intl.NumberFormat(number, {}).format(number);
    }

    const handleSubmmit = () => {
        const isBuy = transaction === "buy"
        const changeNowUrl = new URL("https://changenow.io/exchange")
        const from = isBuy ? selectedFiat?.ticker : selectedCoin?.legacyTicker
        const to = isBuy ? selectedCoin?.legacyTicker : selectedFiat?.ticker

        changeNowUrl.searchParams.append("from", from || '')
        changeNowUrl.searchParams.append("to", to || '')
        changeNowUrl.searchParams.append("fiatMode", "true")
        changeNowUrl.searchParams.append("amount", fromAmount)


        if (!isComplete) {
            return window.open(changeNowUrl.href, '_blank')
            // return router.push('/fiat-transaction', {
            //     pathname: '/fiat-transaction',
            //     query: {
            //         transaction,
            //         coin: selectedCoin?.legacyTicker,
            //         fiat: selectedFiat?.ticker,
            //         amount: fromAmount,
            //     }
            // })
        };
    }

    return (
        <div className={isComplete ? styles.rightCardCompleted : styles.rightCard}>
            <div className={styles.dropdown}>
                <div className={transaction === "buy" ? styles.itemSelect : styles.item} onClick={() => handleTransaction("buy")}>
                    {t("fiatTransaction.exchange.buy")}
                </div>
                <div className={transaction === "sale" ? styles.itemSelect : styles.item} onClick={() => handleTransaction("sale")}>
                    {t("fiatTransaction.exchange.sell")}
                </div>
            </div>
            {error && <div className={styles.alert}>
                {t(error)}
            </div>}
            <div className={styles.midle}>
                <div className={styles.groupContainer}>
                    <div className={styles.coinContainer}>
                        <div className={styles.inputContainer}>
                            <span>
                                {t("fiatTransaction.exchange.youSend")}
                            </span>
                            <input
                                type="number"
                                inputMode="numeric"
                                className={styles.input}
                                // value={fromAmount}
                                // placeholder="Usted envía"
                                onChange={(e) => {
                                    handleFromAmount(e.target.value)
                                }}
                            />
                        </div>
                        <div className={styles.select}>
                            {transaction === "buy" ? (
                                <FiatCombobox
                                    fiats={fiats}
                                    selectedFiat={selectedFiat}
                                    setSelectedFiat={handleSelectFiat}
                                />
                            ) : (
                                <CoinCombobox
                                    coins={coins}
                                    selectedCoin={selectedCoin}
                                    setSelectedCoin={handleSelectCoin}
                                />
                            )}
                        </div>
                    </div>
                </div>
                <div className={styles.listContainer}>
                    <div className={styles.line}></div>
                    <ul>
                        <li className={styles.listItems}>
                            {t("fiatTransaction.exchange.withoutFees")}
                        </li>
                        <li className={styles.listItems}>
                            {t("fiatTransaction.exchange.estimatedRate")}
                            {selectedCoin && selectedFiat ? ` ${` 1 ${selectedCoin?.ticker.toLowerCase()} - ${formatNumber(estimatesRate)} ${selectedFiat?.ticker.toLowerCase()}`}` : ''}
                            {/* {` 1 ${selectedCoin?.ticker.toLowerCase()} - ${formatNumber(estimatesRate)} ${selectedFiat?.ticker.toLowerCase()}`} */}
                        </li>
                    </ul>
                </div>
                <div className={styles.coinContainer}>
                    <div className={styles.inputContainer}>
                        <span>
                            {t("fiatTransaction.exchange.youGet")}
                        </span>
                        <div style={{ display: 'flex' }}>
                            {loading && <div>
                                <Spinner animation="border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>
                            </div>}
                            <input
                                type="text"
                                className={styles.input}
                                // placeholder="Usted obtiene"
                                defaultValue={estimatedAmount}
                                value={estimatedAmount || '-'}
                                disabled
                            />
                        </div>
                    </div>
                    <div className={styles.select}>
                        {transaction === "buy" ? (
                            <CoinCombobox
                                coins={coins}
                                selectedCoin={selectedCoin}
                                setSelectedCoin={handleSelectCoin}
                            />
                        ) : (
                            <FiatCombobox
                                fiats={fiats}
                                selectedFiat={selectedFiat}
                                setSelectedFiat={handleSelectFiat}
                            />
                        )}
                    </div>
                </div>
            </div>
            {isComplete && <div className={styles.wallerInput}>
                <span>
                    {t("fiatTransaction.exchange.wallet")}
                </span>
                <input
                    type="text"
                    placeholder={t("fiatTransaction.exchange.walletPlaceholder")}
                    onChange={async (e) => await handleWalletChange(e.target.value)}
                />
                {errorWallet && <div className={styles.alert}>
                    {t(errorWallet)}
                </div>}
            </div>}
            <div className={styles.button} onClick={handleSubmmit}>
                {transaction === "buy" ? t("fiatTransaction.exchange.buy")
                    : t("fiatTransaction.exchange.sell")}
            </div>
        </div>
    )
}
