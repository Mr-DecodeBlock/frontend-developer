import React from "react";
import SEO from "../common/seo";
import TeamDetails from "../components/team-details";
import Wrapper from "../layout/wrapper";
import Protected from "../helpers/Protected"

const Index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"BusinessShop: Pagos en línea rápidos y seguros"} />
      <Protected>
        <TeamDetails /> 
      </Protected>
    </Wrapper>
  );
};

export default Index;
