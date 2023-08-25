import React from "react";
import SEO from "../common/seo";
import HomeFour from "../components/homes/wallet";
import Wrapper from "../layout/wrapper";

import { WalletContainer } from "@/src/features/wallet";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="BusinessShop: Pagos en línea rápidos y seguros" />
      <WalletContainer />
    </Wrapper>
  );
};

export default index;
