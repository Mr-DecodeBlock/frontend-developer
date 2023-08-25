import FooterTwo from "@/src/layout/footers/footer-2";
import HeaderTwo from "@/src/layout/headers/header-2";
import React from "react";
import Breadcrumb from "../../common/breadcrumbs/breadcrumb";
import ContactFormArea from "./contact-form-area";
// import ContactInner from "./contact-inner";
import CtaArea from "./cta-area";
import HeroBanner from "../../common/hero-banner";
import OfficeLocation from "./office-location";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const {t} = useTranslation();

  return (
    <> 
      <HeaderTwo/>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title_top={t("breadcrumbTitle1")} title_bottom="Get In" />
            <HeroBanner bg_img="/assets/img/contact/contact-banner.png" title={t("breadcrumbTitle1")}  subtitle={t("Contacto")} />
            <OfficeLocation/>
            <ContactFormArea />
            {/* <ContactInner /> */}
            <CtaArea />
          </main>
          <FooterTwo style_contact={true} style_team={true}  />
        </div>
      </div>
    </>
  );
};

export default Contact;
