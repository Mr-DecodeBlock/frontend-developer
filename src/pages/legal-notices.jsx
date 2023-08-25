import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import { LegalNoticesContainer } from "../features/legalNotices";
import Legal from "../components/legalNotices/index";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"BusinessShop: Pagos en línea rápidos y seguros"} />
      <LegalNoticesContainer/>
      {/* <Legal /> */}
    </Wrapper>
  );
};

export default index;
