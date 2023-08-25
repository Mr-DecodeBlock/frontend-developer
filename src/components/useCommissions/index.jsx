import BreadcrumbNine from "@/src/common/breadcrumbs/breadcrumb-9";
import FooterTwo from "@/src/layout/footers/footer-2";
import HeaderTwo from "@/src/layout/headers/header-2";
import React from "react";
import CommissionsTables from "./commissions-tables";
import Timelines from "./timelines";
import TestimonialArea from "@/src/common/testimonial-area";
import PolicyHeader from "@/src/common/policy-header";
import { useTranslation } from "react-i18next";

const Commissions = () => {
  const {t} = useTranslation();

  return (
    <>
      <HeaderTwo />
      <div>
        <div>
          <main className="d-flex flex-column justify-content-center aling-items-center" >
            <BreadcrumbNine title={t("commissionsTablesTitle")} innertitle={t("commissionsInnertitle")} />
            <PolicyHeader title="commissionsTablesTitle" subtitle="termsUseoverview_des" />
            <CommissionsTables/>
            <Timelines/>
            <TestimonialArea />
          </main>
          <FooterTwo style_contact={true} style_team={true} bg_style={false} />
        </div>
      </div>
    </>
  );
};

export default Commissions;
