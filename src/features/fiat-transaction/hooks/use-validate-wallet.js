import { useState, useCallback } from 'react'
import axios from '@/src/utils/custom-axios'

export function useValidateWallet({ coin }) {
    // const [wallet, setWallet] = useState('')
    const [error, setError] = useState(null)

    const validateWallet = useCallback(async (wallet) => {
        setError(null)
        if (!wallet) {
            return
        }

        try {
            const params = new URLSearchParams()
            params.append('currency', coin.legacyTicker.toLowerCase())
            params.append('address', wallet)
            const res = await axios.get(`/fiat-transaction/validate-wallet?${params.toString()}`)
            const isValid = res.data.isActivated
            if (!isValid) {
                setError('fiatTransaction.exchange.invalidWallet')
                return
            }
            setError(null)
        } catch (error) {
            setError('fiatTransaction.exchange.invalidWallet')
        }
    }, [coin])

    const handleWalletChange = async (value) => {
        // setWallet(value)
        await validateWallet(value)
    }

    return { handleWalletChange, error }
}