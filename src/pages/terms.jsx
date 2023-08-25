import React from "react";
import SEO from "../common/seo";
import UseTerms from "../components/UseTerms";
import Wrapper from "../layout/wrapper";

const index = () => {
  return ( 
    <Wrapper>
      <SEO pageTitle={"BusinessShop: Pagos en línea rápidos y seguros"} />
      <UseTerms />
    </Wrapper>
  );
};

export default index;
