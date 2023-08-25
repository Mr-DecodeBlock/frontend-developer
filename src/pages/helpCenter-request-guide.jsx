import React from "react";
import SEO from "../common/seo";
import RequestGuide from "../components/helpCenter-request-guide";
import Wrapper from "../layout/wrapper";

const index = () => {
  return ( 
    <Wrapper>
      <SEO pageTitle={"BusinessShop: Pagos en línea rápidos y seguros"} />
      <RequestGuide/>
    </Wrapper>
  );
};

export default index;
