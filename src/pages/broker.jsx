import React from 'react';
import SEO from '../common/seo';
import { BrokerContainer } from "../features/broker/container";
import Wrapper from '../layout/wrapper';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"BusinessShop: Pagos en línea rápidos y seguros"} /> 
            <BrokerContainer />
        </Wrapper>
    );
};

export default index;