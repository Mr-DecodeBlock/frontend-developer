import { useState, useEffect, useCallback } from 'react'
import axios from '@/src/utils/custom-axios'

export function useGetCurrencies({ coin, fiat }) {
    const [coins, setCoins] = useState([])
    const [fiats, setFiats] = useState([])

    const [selectedCoin, setSelectedCoin] = useState(null)
    const [selectedFiat, setSelectedFiat] = useState(null)

    const getCoins = useCallback(async () => {
        try {
            const res = await axios.get('/fiat-transaction/currency')
            const ticker = coin || 'btc'
            const selectedCoin = res.data.find(coin => coin.legacyTicker.toLowerCase() === ticker)

            setCoins(res.data)
            setSelectedCoin(selectedCoin || null)
        } catch (error) {
            setCoins([])
        }
    }, [])

    const getFiats = useCallback(async () => {
        try {
            const res = await axios.get('/fiat-transaction/fiat')
            const ticker = fiat || "usd"
            const selectedFiat = res.data.find(fiat => fiat.ticker.toLowerCase() === ticker)

            setFiats(res.data)
            setSelectedFiat(selectedFiat || null)
        } catch (error) {
            setFiats([])
        }
    }, [])

    useEffect(() => {
        getCoins()
        getFiats()
    }, [getCoins, getFiats])

    const handleSelectCoin = (coin) => {
        setSelectedCoin(coin)
    }

    const handleSelectFiat = (fiat) => {
        setSelectedFiat(fiat)
    }

    return { coins, fiats, handleSelectCoin, handleSelectFiat, selectedCoin, selectedFiat }
}