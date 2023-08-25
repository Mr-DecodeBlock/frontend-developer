import React from "react";
import SEO from "../common/seo";
import Integrations from "../components/integrations";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"BusinessShop: Pagos en línea rápidos y seguros"} />
      <Integrations />
    </Wrapper>
  );
};

export default index;
