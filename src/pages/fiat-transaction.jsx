import React from 'react';
import SEO from '../common/seo';
import { FiatTransactionContainer } from "../features/fiat-transaction/container";
import Wrapper from '../layout/wrapper';

export function getServerSideProps(ctx) {
    return {
        props: {
            transaction: ctx.query?.transaction,
            coin: ctx.query?.coin.toLowerCase(),
            fiat: ctx.query?.fiat.toLowerCase(),
            amount: ctx.query?.amount ? Number(ctx.query.amount) : null,
        }
    }
}

function FiatTransaction({ transaction, coin, fiat, amount }) {
    return (
        <Wrapper>
            <SEO pageTitle={"BusinessShop: Pagos en línea rápidos y seguros"} />
            <FiatTransactionContainer
                transaction={transaction}
                coin={coin}
                fiat={fiat}
                amount={amount}
            />
        </Wrapper>
    )
}

export default FiatTransaction