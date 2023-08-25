import React from "react";
import { PrivacyPoliceContainer } from "../features/privacy-police";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"BusinessShop: Pagos en línea rápidos y seguros"} />
      <PrivacyPoliceContainer />
    </Wrapper>
  );
};

export default index;
