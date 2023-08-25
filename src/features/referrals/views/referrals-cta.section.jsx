// @Libraries
import { useTranslation } from "react-i18next";
import Link from "next/link";

// @Components
import Breadcrumb from "../../../common/breadcrumbs/breadcrumb-10";

export function ReferralsCtaSection() {
  const { t } = useTranslation();
  return (
    <Breadcrumb renderMouse={false}>
      <div className="referrals-cta-container">
        <h3 className="referrals-cta-title-typography-center">
          {t("referralsPage.ctaSection.title")}
        </h3>
        <p className="referrals-cta-title-paragraph-center">
          {t("referralsPage.ctaSection.description")}
        </p>
        {/* <div className="referrals-cta-layout"></div> */}
        <Link
          className="tp-btn-green"
          href="https://businessshop.gitbook.io/esp/"
        >
          {t("referralsPage.ctaSection.btnText")}
        </Link>
      </div>
    </Breadcrumb>
  );
}
