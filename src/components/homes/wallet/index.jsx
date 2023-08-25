import PriceArea from "@/src/common/price-area";
import FooterFour from "@/src/layout/footers/footer-2";
import HeaderFour from "@/src/layout/headers/header-2";

import AboutArea from "./about-area";
import BlogArea from "./blog-area";
import BrandArea from "./brand-area";
import ContactArea from "./contact-area";
// import FunFactArea from "./fun-fact-area";
import HeroArea from "./hero-area";
import PlatformArea from "../../../common/platform-area";
import SecurityArea from "./security-area";
import ServiceArea from "./service-area";
import TeamArea from "./team-area"; 

const HomeFour = () => {
  return (
    <> 
      <HeaderFour />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="fix">
            <HeroArea />
            <AboutArea />
            <ServiceArea /> 
            <TeamArea />
            <ContactArea />
          </main>
          <FooterFour />
        </div>
      </div>
    </>
  );
};

export default HomeFour;
