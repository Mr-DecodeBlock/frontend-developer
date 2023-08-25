import FooterTwo from "@/src/layout/footers/footer-2";
import HeaderTwo from "@/src/layout/headers/header-2";

// @Sections
import {
  ReferralsHeroSection,
  ReferralsSaleSection,
  ReferralsAboutSection,
  ReferralsCtaSection,
  ReferralsQuestionSection,
} from "../views";

export const ReferralsContainer = () => {
  return (
    <>
      <HeaderTwo />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main style={{ zIndex: "0" }}>
            <ReferralsHeroSection />
            <ReferralsSaleSection />
            <ReferralsAboutSection />
            <ReferralsCtaSection />
            <ReferralsQuestionSection />
          </main>
          <FooterTwo style_contact={true} style_team={true} bg_style={false} />
        </div>
      </div>
    </>
  );
};
