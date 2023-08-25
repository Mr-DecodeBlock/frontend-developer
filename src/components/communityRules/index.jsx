import BreadcrumbNine from "@/src/common/breadcrumbs/breadcrumb-9";
import TestimonialArea from "@/src/common/testimonial-area";
import FooterFive from "@/src/layout/footers/footer-2";
import HeaderSix from "@/src/layout/headers/header-2";
import React from "react";
import { useTranslation } from "react-i18next";
import CommunityRulesArea from "./community-rules-area";
import PolicyHeader from "@/src/common/policy-header";

const CommunityRules = () => {
  const {t} = useTranslation();
  return (
    <>
      <HeaderSix/>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbNine title={t("communityRulesoverview_title")} innertitle={t("privacyInnertitle")} />
            <PolicyHeader title="communityRulesoverview_title" subtitle="lastUpdated" />
            <CommunityRulesArea />
            <TestimonialArea />
          </main>
          <FooterFive style_contact={true} style_team={true} bg_style={false} />
        </div>
      </div>
    </>
  );
};

export default CommunityRules;