import AboutArea from "@/src/common/about-area";
import FooterTwo from "@/src/layout/footers/footer-2";
import HeaderTwo from "@/src/layout/headers/header-2";
import React from "react";
import Breadcrumb from "../../common/breadcrumbs/breadcrumb";
import AboutAreaTwo from "@/src/common/about-area2";
import HeroBanner from "../../common/hero-banner";
import CtaArea from "../contact/cta-area";
import TeamArea from "../homes/home-4/team-area";
import Brand from "./brand";
import CompanyArea from "./company-area";
import JobArea from "./job-area";
import JourneyArea from "./journey-area";
 
const About = () => {
  return (
    <>
      <HeaderTwo />
      <Breadcrumb title_top="About"  title_bottom="Softec" />
      <HeroBanner title="About" subtitle="Us" bg_img="/assets/img/breadcrumb/breadcrumb-2.jpg" />
      <Brand />
      <CompanyArea />
      {/* <AboutArea /> */}
      <AboutAreaTwo/>
      <TeamArea bg_style={true} />
      <JourneyArea />
      <JobArea />
      <CtaArea />
      <FooterTwo style_contact={true} style_team={true} />
    </>
  );
};

export default About;
