import FooterTwo from "@/src/layout/footers/footer-2";
import HeaderTwo from "@/src/layout/headers/header-2";
import React from "react";
import CtaArea from "./cta-area";
import FaqArea from "./faq-area";
import HeroArea from "./hero-area";
import OpenAccountArea from "./open-account-area";
import PaymentArea from "./payment-area";
import PaymentMethodArea from "./payment-method-area";
import ServiceArea from "./service-area";
import ContactArea from "./contact-area";
// import TestimonialArea from "./testimonial-area";
import TestimonialArea2 from "./testimonialdev";
// import ContactArea from "./contact-footer";
import Rrss from "./rrss";
// import FourArea from "./four-area";
import CryptoSlider from "./cryto-slider";
import TestimonialArea from "./testimonial-area";

const HomeTwo = () => {
  return (
    <>

      <HeaderTwo />
      <div id="smooth-wrapper">
      <div id="smooth-content">
      <main className="fix"> 
      <HeroArea />
      <PaymentArea />
      <PaymentMethodArea />
      <ServiceArea />
      <OpenAccountArea />
      <TestimonialArea/>
      <FaqArea />
      <CryptoSlider />
      <ContactArea />
      <Rrss /> 
      <TestimonialArea2/>
      <ContactArea/>
      {/* <FourArea /> */}
      <CtaArea />
      
      </main>
      <FooterTwo/>
      </div>
      </div>

    </>
  );
};

export default HomeTwo;
