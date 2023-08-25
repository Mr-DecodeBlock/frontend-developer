import React from "react";
import SEO from "../common/seo";
import { ReferralsContainer } from "../features/referrals/container";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"BusinessShop: Pagos en línea rápidos y seguros"} />
      <ReferralsContainer />
    </Wrapper>
  );
};

export default index;
