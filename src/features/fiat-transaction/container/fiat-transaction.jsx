import React from "react";

// @Layouts
import { MainLayout } from "../../../layout/main";

// @Components
import { SecondLayer } from "../../../common/icon-layer";
import { ExchangeForm } from '../views'
import styles from "./styles.module.css";

export function FiatTransactionContainer({ transaction, coin, fiat, amount }) {
    return (
        <MainLayout>
            <div className={styles.margin}>
                <div className={styles.card}>
                    <ExchangeForm isComplete transaction={transaction} coin={coin} fiat={fiat} amount={amount} />
                </div>
            </div>
        </MainLayout>
    )
}
