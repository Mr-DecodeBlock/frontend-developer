import BreadcrumbNine from "@/src/common/breadcrumbs/breadcrumb-9";
import TestimonialArea from "@/src/common/testimonial-area";
import FooterTwo from "@/src/layout/footers/footer-2";
import HeaderTwo from "@/src/layout/headers/header-2";
import React from "react";
import UseTerms from "./UseTerms";
import { useTranslation } from "react-i18next";
import PolicyHeader from "@/src/common/policy-header";

const ServiceDetails = () => {
  const {t} = useTranslation();
  return (
    <>
      <HeaderTwo />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbNine title={t("termsUse")} innertitle={t("termsUseInnerTitle")} />
            <PolicyHeader title="TermsUse" subtitle="termsUseoverview_des" />
            <UseTerms/>
            <TestimonialArea />
          </main>
          <FooterTwo style_contact={true} style_team={true} bg_style={false} />
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
