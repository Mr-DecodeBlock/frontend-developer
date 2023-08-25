import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import { RegisterContainer } from "../features/register/container";

// PANEL DE CONTROL: Nombre de la página

const Register = () => {
  return (
    <Wrapper>
      <SEO pageTitle="BusinessShop: Pagos en línea rápidos y seguros" />
      <RegisterContainer />
      {/* <HomeOne /> */}
    </Wrapper>
  );
};

export default Register;
