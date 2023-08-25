import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import NotFound from "../components/404";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Oops.! Page Not Found!"} />
      <NotFound/>
    </Wrapper>
  );
};

export default index;