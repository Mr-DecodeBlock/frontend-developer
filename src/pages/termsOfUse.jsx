import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import { TermsOfUsePage } from "../features/termsOfUsePage/container";

const TermsOfUse = () => {
  return (
    <Wrapper>
      <SEO pageTitle="BusinessShop: Pagos en línea rápidos y seguros" />
      <TermsOfUsePage />
    </Wrapper>
  );
};

export default TermsOfUse;