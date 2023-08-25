import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import { LoginContainer } from "../features/login/container";

// PANEL DE CONTROL: Nombre de la página

const Login = () => {
  return (
    <Wrapper>
      <SEO pageTitle="BusinessShop: Pagos en línea rápidos y seguros" />
      <LoginContainer />
      {/* <HomeOne /> */}
    </Wrapper>
  );
};

export default Login;
