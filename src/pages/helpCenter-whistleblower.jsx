import React from "react";
import SEO from "../common/seo";
import Whistleblower from "../components/helpCenter-whistleblower";
import Wrapper from "../layout/wrapper";

const index = () => {
  return ( 
    <Wrapper>
      <SEO pageTitle={"BusinessShop: Pagos en línea rápidos y seguros"} />
      <Whistleblower/>
    </Wrapper>
  );
};

export default index;
