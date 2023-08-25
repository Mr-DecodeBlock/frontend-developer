import Image from "next/image";
import { useTranslation } from "react-i18next";

// @img import
import about_image from "../../../../public/assets/img/referrals/about-image.png";
import about_image_mobile from "../../../../public/assets/img/referrals/about-image-mobile.png";
import about_benefits from "../../../../public/assets/img/referrals/about-benefits.png";
import Link from "next/link";

export function ReferralsAboutSection() {
  const { t } = useTranslation();

  const benefits_list = [
    {
      pre_highlight: "referralsPage.aboutSection.list.one.preHighlight",
      highlight: "referralsPage.aboutSection.list.one.highlight",
      post_highlight: "referralsPage.aboutSection.list.one.postHighlight",
    },
    {
      pre_highlight: "referralsPage.aboutSection.list.two.preHighlight",
      highlight: "referralsPage.aboutSection.list.two.highlight",
      post_highlight: "referralsPage.aboutSection.list.two.postHighlight",
    },
    {
      pre_highlight: "referralsPage.aboutSection.list.three.preHighlight",
      highlight: "referralsPage.aboutSection.list.three.highlight",
      post_highlight: "referralsPage.aboutSection.list.three.postHighlight",
    },
    {
      pre_highlight: "referralsPage.aboutSection.list.four.preHighlight",
      highlight: "referralsPage.aboutSection.list.four.highlight",
      post_highlight: "referralsPage.aboutSection.list.four.postHighlight",
    },
  ];

  const btn_text = "referralsPage.aboutSection.btnText";

  return (
    <div className="referrals-about-container">
      <div className="referrals-about-sm-image">
        <Image
          src={about_image_mobile}
          alt="theme-pure"
          className="h-100 p-relative"
          style={{ zIndex: "1" }}
        />
      </div>
      <div className="referrals-about-md-image">
        <Image
          src={about_image}
          alt="theme-pure"
          className="h-100 p-relative"
          style={{ zIndex: "1", borderRadius: "1rem" }}
        />
      </div>
      <div className="referrals-about-cta">
        <div className="referrals-cta-layout">
          <h3 className="referrals-cta-title-layout">
            <span className="referrals-about-cta-title">
              {t("referralsPage.aboutSection.title.preHighlight")}
            </span>
            <span className="referrals-about-cta-title-highlight">
              {t("referralsPage.aboutSection.title.highlight")}
            </span>
            <span className="referrals-about-cta-title">
              {t("referralsPage.aboutSection.title.postHighlight")}
            </span>
          </h3>
          <div className="referrals-cta-layout">
            <p className="referrals-about-cta-description">
              {t("referralsPage.aboutSection.paragraph")}
            </p>
          </div>
        </div>
        <div className="referrals-about-benefits-container">
          {benefits_list.map((benefit, index) => (
            <>
              <div className="referrals-about-benefits">
                <div className="referrals-about-benefits-image">
                  <Image
                    src={about_benefits}
                    alt="theme-pure"
                    className="h-100 p-relative"
                    style={{ zIndex: "1" }}
                  />
                </div>
                <div>
                  <div className="referrals-about-benefits-text">
                    {t(benefit.pre_highlight)}
                  </div>
                  <div className="referrals-about-benefits-text-highlight">
                    {t(benefit.highlight)}
                  </div>
                  <div className="referrals-about-benefits-text">
                    {t(benefit.post_highlight)}
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="tp-about__btn">
          <Link className="tp-btn-green" href="/about">
            <span>{t(btn_text)}</span>
            <b></b>
          </Link>
        </div>
      </div>
    </div>
  );
}
