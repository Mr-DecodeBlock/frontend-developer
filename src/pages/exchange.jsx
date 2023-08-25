import React from "react";
import SEO from "../common/seo";
import HomeTwo from "../components/homes/exchange";
import Wrapper from "../layout/wrapper";
 
const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="BusinessShop: Pagos en línea rápidos y seguros" />
      <HomeTwo />
    </Wrapper>
  );
};

export default index;
