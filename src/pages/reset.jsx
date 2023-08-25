import React from "react";
import SEO from "../common/seo";
import ResetPassword from "../components/resetPassword";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"BusinessShop: Pagos en línea rápidos y seguros"} />
      <ResetPassword/>
    </Wrapper>
  );
};

export default index;
