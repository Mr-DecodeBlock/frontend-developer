// import React from "react";
// import SEO from "../common/seo";
// import CommunityRules from "../components/communityRules";
// import Wrapper from "../layout/wrapper";

// const index = () => {
//   return ( 
//     <Wrapper>
//       <SEO pageTitle={"BusinessShop: Pagos en línea rápidos y seguros"} />
//       <CommunityRules />
//     </Wrapper>
//   );
// };

// export default index;

import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import { ComunityRules } from "../features/communityRules/container";

const index = () => {
  return ( 
    <Wrapper>
      <SEO pageTitle={"BusinessShop: Pagos en línea rápidos y seguros"} />
      <ComunityRules/>
    </Wrapper>
  );
};

export default index;
