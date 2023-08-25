import Image from "next/image";
import { useTranslation } from "react-i18next";

// @img import
import sale_image from "../../../../public/assets/img/referrals/sale-image.png";
import sale_image_mobile from "../../../../public/assets/img/referrals/sale-image-mobile.png";

export function ReferralsSaleSection() {
  const { t } = useTranslation();

  return (
    <div className="referrals-sale-container">
      <div className="referrals-sale-sm-image">
        <Image
          src={sale_image_mobile}
          alt="theme-pure"
          className="h-100 p-relative"
          style={{ zIndex: "1" }}
        />
      </div>
      <div className="referrals-sale-cta">
        <div className="referrals-cta-layout">
          <h3 className="referrals-cta-title-layout">
            <span className="referrals-sale-cta-title">
              {t("referralsPage.saleSection.title.preHighlight")}
            </span>
            <span className="referrals-sale-cta-title-highlight">
              {t("referralsPage.saleSection.title.highlight")}
            </span>
            <span className="referrals-sale-cta-title">
              {" "}
              {t("referralsPage.saleSection.title.postHighlight")}
            </span>
          </h3>
          <div className="referrals-cta-layout">
            <p className="referrals-sale-cta-description">
              {t("referralsPage.saleSection.paragraph")}
            </p>
          </div>
        </div>
      </div>
      <div className="referrals-sale-md-image">
        <Image
          src={sale_image}
          alt="theme-pure"
          className="h-100 p-relative"
          style={{ zIndex: "1", borderRadius: "1rem" }}
        />
      </div>
    </div>
  );
}
