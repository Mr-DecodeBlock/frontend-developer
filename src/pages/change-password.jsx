import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import { ChangePasswordContainer } from "../features/changePassword/container";

// PANEL DE CONTROL: Nombre de la página

const ChangePassword = () => {
  return (
    <Wrapper>
      <SEO pageTitle="BusinessShop: Pagos en línea rápidos y seguros" />
      <ChangePasswordContainer />
      {/* <HomeOne /> */}
    </Wrapper>
  );
};

export default ChangePassword;
