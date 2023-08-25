import React from "react";
import SEO from "../common/seo";

import Wrapper from "../layout/wrapper";
import { KycAmlPolicies } from "../features/kycAmlPolicy/container";


const index = () => {
  return ( 
    <Wrapper>
      <SEO pageTitle={"BusinessShop: Pagos en línea rápidos y seguros"} />
      <KycAmlPolicies />
    </Wrapper>
  );
};

export default index;
