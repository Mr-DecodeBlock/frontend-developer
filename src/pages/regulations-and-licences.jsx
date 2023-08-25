import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import { RegulationsAndLicences } from "../features/regulationsAndLicences/container";

const RegulationsLicences = () => {
  return (
    <Wrapper>
      <SEO pageTitle="BusinessShop: Pagos en línea rápidos y seguros" />
      <RegulationsAndLicences />
    </Wrapper>
  );
};

export default RegulationsLicences;