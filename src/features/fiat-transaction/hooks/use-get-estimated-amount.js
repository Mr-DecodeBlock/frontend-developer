import { useState, useEffect, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useDebounce } from "@uidotdev/usehooks";
import axios from '@/src/utils/custom-axios'

export function useGetEstimatedAmount({
    coin,
    fiat,
    isBuy,
    amount,
}) {
    const { t } = useTranslation()
    const [fromAmount, setFromAmount] = useState(amount | null)
    const [estimatedAmount, setEstimatedAmount] = useState(null)
    const [estimatesRate, setEstimatesRate] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const debouncedFromAmount = useDebounce(fromAmount, 500)

    const getEstimatedAmount = useCallback(async () => {
        setLoading(true)
        setError(null)
        setEstimatedAmount(null)
        setEstimatesRate(null)

        const fiatTicker = fiat?.ticker.toLowerCase() || ''
        const fiatNetwork = fiat?.networks[0]?.network.toLowerCase() || ''

        const coinTicker = coin?.legacyTicker.toLowerCase() || ''
        const coinNetwork = coin?.network.toLowerCase() || ''
        try {
            if (!fiatTicker || !fiatNetwork || !coinTicker || !coinNetwork || !fromAmount) {
                return
            }

            const params = new URLSearchParams()
            params.append('fromCurrency', isBuy ? fiatTicker : coinTicker)
            params.append('fromNetwork', isBuy ? fiatNetwork : coinNetwork)
            params.append('fromAmount', fromAmount)
            params.append('toCurrency', isBuy ? coinTicker : fiatTicker)
            params.append('toNetwork', isBuy ? coinNetwork : fiatNetwork)

            const res = await axios.get('/fiat-transaction/estimated-amount' + '?' + params.toString())
            const estimatedAmount = res.data.summary.estimatedAmount


            if (!estimatedAmount) {
                const minAmount = res.data.summary.minAmount
                const maxAmount = res.data.summary.maxAmount

                if (minAmount && minAmount > fromAmount) {
                    // setError(`Minimum amount is ${minAmount}`)
                    setError(t("fiatTransaction.exchange.minAmount", { amount: minAmount }))
                    return;
                }

                if (maxAmount && maxAmount < fromAmount) {
                    setError(t("fiatTransaction.exchange.maxAmount", { amount: maxAmount }))
                    return;
                }


                setError(t("fiatTransaction.exchange.tryAgainLater"))
                return;
            }

            // Calculate the rate
            const rate = fromAmount / estimatedAmount

            setEstimatedAmount(estimatedAmount)
            setEstimatesRate(rate)
            setError(null)
        } catch (error) {
            // setError(error)
            setEstimatedAmount(null)
            setEstimatesRate(null)
        } finally {
            setLoading(false)
        }
    }, [fiat, coin, debouncedFromAmount, isBuy])

    useEffect(() => {
        getEstimatedAmount()
    }, [getEstimatedAmount])

    const handleFromAmount = (value) => {
        setFromAmount(Number(value))
    }

    return { estimatedAmount, loading, estimatesRate, error, handleFromAmount, fromAmount }
}