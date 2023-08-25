import React from 'react';
import SEO from '../common/seo';
import Blog from '../components/blog';
import Wrapper from '../layout/wrapper';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"BusinessShop: Pagos en línea rápidos y seguros"} /> 
            <Blog />           
        </Wrapper>
    );
};

export default index;