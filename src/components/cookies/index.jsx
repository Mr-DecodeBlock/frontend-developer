import BreadcrumbTwo from "@/src/common/breadcrumbs/breadcrumb-2";
import TestimonialArea from "@/src/common/testimonial-area";
import FooterFive from "@/src/layout/footers/footer-2";
import HeaderSix from "@/src/layout/headers/header-2";
import React from "react";
import CookiesPolicies from "./cookies-policies";
import { useTranslation } from "react-i18next";
import PolicyHeader from "@/src/common/policy-header";

const Cookies = () => {
  const {t} = useTranslation();
  return (
    <>
      <HeaderSix />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbTwo title={t("testimonialPrivaceName15")} innertitle={t("privacyInnertitle")} />
            <PolicyHeader title="testimonialPrivaceName15" subtitle="lastUpdated" />
            <CookiesPolicies />
            <TestimonialArea />
          </main>
          <FooterFive style_contact={true} style_team={true} bg_style={false} />
        </div>
      </div>
    </>
  );
};

export default Cookies;
