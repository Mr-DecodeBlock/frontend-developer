// @Libraries
import { useTranslation } from "react-i18next";
import Image from "next/image";

// img import
import hero_image from "../../../../public/assets/img/referrals/hero.png";

// @Components
import Breadcrumb from "../../../common/breadcrumbs/breadcrumb-10";


function CtaTitle() {
  const { t } = useTranslation();

  return (
    <div className="referrals-cta-layout">
      <h3 className="referrals-cta-title-layout">
        <span className="referrals-cta-title-typography">
          {t("referralsPage.heroSection.title")}
        </span>
        <span className="referrals-cta-title-rewards">
          {" "}
          {t("referralsPage.heroSection.reward")}
        </span>
      </h3>
      <div className="referrals-cta-layout">
        <p className="referrals-cta-title-paragraph">
          {t("referralsPage.heroSection.paragraph")}
        </p>
      </div>
    </div>
  );
}

export function ReferralsHeroSection() {
  const { t } = useTranslation();

  return (
    <Breadcrumb>
      <div className="container-fluid g-0">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <CtaTitle />
          </div>

          <div className="col-xl-6 col-lg-6">
            <div className="tp-hero-2__right text-end p-relative h-100 pb-1 pl-15">
              <div className="h-100">
                <Image
                  src={hero_image}
                  alt="theme-pure"
                  className="h-100 p-relative"
                  style={{ zIndex: "1" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Breadcrumb>
  );
}
