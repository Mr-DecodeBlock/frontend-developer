import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import { RequestGuide } from "../features/requestGuide/container";

const Guide = () => {
  return (
    <Wrapper>
      <SEO pageTitle="BusinessShop: Pagos en línea rápidos y seguros" />
      <RequestGuide/>
    </Wrapper>
  );
};

export default Guide;