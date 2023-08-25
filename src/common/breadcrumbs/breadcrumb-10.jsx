import Link from "next/link";
import React, { useRef } from "react";
import useCharAnimation from "@/src/hooks/useCharAnimation";
import useTitleAnimation from "@/src/hooks/useTitleAnimation";
import Image from "next/image";
import { useTranslation } from "react-i18next";

// img import
import scroll_bg from "../../../public/assets/img/hero/scroll-down.png";
import waves_bg from "../../../public/assets/img/hero/background-hero.png";
import useBreadcrumbTitleAnime from "@/src/hooks/useBreadcrumbTitleAnime";

const BreadcrumbTen = ({ children, renderMouse = true }) => {
  const { t } = useTranslation();
  const { animeRef } = useBreadcrumbTitleAnime();
  let subtitleRef = useRef(null);
  useTitleAnimation(subtitleRef);
  useCharAnimation(".tp-hero-2__title i.child-1");

  const bg_img = "/assets/img/hero/hero-bg-23.png";

  return (
    <>
      <div
        className="referrals-hero-ptb referrals-hero-plr z-index fix p-relative"
        style={{ backgroundImage: `url(${bg_img})` }}
      >
        <div className="p-absolute w-100" style={{ right: "0", top: "-10%" }}>
          <Image src={waves_bg} alt="theme-pure" className="w-100" />
        </div>
        {renderMouse && (
          <>
            <div className="scroll-bg d-none d-sm-block">
              <Image src={scroll_bg} alt="theme-pure" />
            </div>
            <div className="referrals-hero-mouse-scroll smooth d-none d-sm-block">
              <a className="mouse-scroll-btn" href="#"></a>
              <span>{t("scrollDown")}</span>
            </div>
          </>
        )}

        <div className="container">
          <div className="referrals-hero-content">{children}</div>
          {/* <div className="row">
            <div className="col-xl-12 col-lg-12"></div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default BreadcrumbTen;
