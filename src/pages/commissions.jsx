import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import { CommissionsContainer } from "../features/commissions";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"BusinessShop: Pagos en línea rápidos y seguros"} />
      <CommissionsContainer />
    </Wrapper>
  );
};

export default index;
