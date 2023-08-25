import React from "react";
import SEO from "../common/seo";
import Cookies from "../components/cookies";
import Wrapper from "../layout/wrapper";

const index = () => {
  return ( 
    <Wrapper>
      <SEO pageTitle={"BusinessShop: Pagos en línea rápidos y seguros"} />
      <Cookies />
    </Wrapper>
  );
};

export default index;
