import React from "react";
import SEO from "../common/seo";
import Contact from "../components/contact";
import Wrapper from "../layout/wrapper";
import CookiesPolicies from "../components/cookies/cookies-policies";
import { CookiesPoliciesContainer } from "../features/cookiesPolicies/container";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"BusinessShop: Pagos en línea rápidos y seguros"} />
      <CookiesPoliciesContainer />
    </Wrapper>
  );
};

export default index;
