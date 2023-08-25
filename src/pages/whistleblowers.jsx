import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import { Whistleblowers } from "../features/whistleblowers/container";

const WhistleblowersNews = () => {
  return (
    <Wrapper>
      <SEO pageTitle="BusinessShop: Pagos en línea rápidos y seguros" />
      <Whistleblowers/>
    </Wrapper>
  );
};

export default WhistleblowersNews;