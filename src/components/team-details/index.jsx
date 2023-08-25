import BreadcrumbTwo from "@/src/common/breadcrumbs/breadcrumb-2";
import FooterFive from "@/src/layout/footers/footer-2";
import HeaderSix from "@/src/layout/headers/header-6";
import React from "react";
import CtaArea from "../contact/cta-area";
import TeamDetailsArea from "./team-details-area";

const TeamDetails = () => {
  return (
    <>
      <HeaderSix />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbTwo title={"Dashboard"} innertitle={" Dashboard "} team_details={true} />
            <TeamDetailsArea />
            {/* <CtaArea /> */}
          </main>
          <FooterFive  style_contact={true} style_team={true} />
        </div>
      </div>
    </>
  );
};

export default TeamDetails;
