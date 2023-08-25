import { CopyRight } from "@/src/common/social-links";
import EmailTwo from "@/src/svg/email-2";
import PhoneTwo from "@/src/svg/phone-2";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import NewsLetterForm from "@/src/forms/newsLetter-form";

// img import
import footer_logo from "../../../public/assets/img/logo/logoWhite.png";
import qr_code from "../../../public/assets/img/footer/bspqr.png";
import i_phone from "../../../public/assets/img/footer/dwnld-4.png";
import google_ply from "../../../public/assets/img/footer/dwnld-5.png";
import waves_bg from "../../../public/assets/img/hero/background-hero.png";

const footer_content = {
  address: "footerAddress",
  phone: "+52(229)9203324",
  email: "hola@businessshop.ai",
  download: "footerTitle3",
  footer_lisks: [
    {
      id: 1,
      cls: "footer-col-2-2",
      title: "footerTitle1",
      delay: ".5s",
      links: [
        {
          name: "Twitter",
          link: "https://twitter.com/BUSINESSSHOP_?T=eg6EIWDDA0SiQdB8dqP3hQ&s=09",
        },
        {
          name: "Facebook",
          link: "https://www.facebook.com/people/Business-Shop/100092842603129",
        },
        { name: "Medium", link: "https://medium.com/@businessshop.aa" },
        { name: "Discord", link: "https://discord.com/" },
        { name: "Github", link: "https://github.com/BusinessShop" },
        { name: " Linkedin", link: "https://www.linkedin.com/in/businessshop" },
        { name: "Bug Bounty", link: "https://businessshop.gitbook.io/esp" },
      ],
    },
    {
      id: 2,
      cls: "footer-col-2-3",
      title: "footerTitle2",
      delay: ".7s",
      links: [
        { name: "us", link: "#" },
        { name: "Wallet", link: "#" },
        { name: "Developers", link: "#" },
        {
          name: "Whitepaper",
          link: "https://drive.google.com/file/d/1KYe5KuAjlp7mv1VP28sJ5B4ERKIlNCl0/view?usp=sharing",
        },
        { name: "privacyPolicy", link: "/privacy-policies" },
        { name: "termsUse", link: "/terms" },
        { name: "commissions", link: "/commissions" },
      ],
    },
  ],
  social_links: [
    {
      link: "https://www.facebook.com/people/Business-Shop/100092842603129",
      target: "_blank",
      icon: "fab fa-facebook-f",
    },
    {
      link: "https://twitter.com/BUSINESSSHOP_?T=eg6EIWDDA0SiQdB8dqP3hQ&s=09",
      target: "_blank",
      icon: "fab fa-twitter",
    },
    {
      link: "https://www.linkedin.com/in/businessshop",
      target: "_blank",
      icon: "fab fa-linkedin-in",
    },
    {
      link: "https://www.instagram.com/businessshop.aa",
      target: "_blank",
      icon: "fab fa-instagram",
    },
  ],
};
const { address, phone, email, footer_lisks, download, social_links } =
  footer_content;

const FooterTwo = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("i18nextLng", language);
  };
  const [idioma, setIdioma] = useState(true);

  const [isOppen, setIsOppen] = useState(false);
  const oppenLan = () => {
    setIsOppen(!isOppen);
  };
  return (
    <>
      <footer className="p-absolute w-100">
        <div className="p-relative grey-bg-2">
          <div className="tp-footer__area pt-90 tp-footer__tp-border-bottom dark-bg">
            <div className="p-absolute w-100" style={{ height: "60%" }}>
              <Image src={waves_bg} alt="theme-pure" className="w-100 h-100" />
            </div>
            <div className="container">
              <div className="row">
                <div
                  className="col-xl-3 col-lg-3 col-md-6 pb-30 wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".3s"
                >
                  <div className="tp-footer__widget footer-widget-2 footer-col-2-1">
                    <div className="tp-footer__logo mb-25">
                      <Link href="/">
                        <Image src={footer_logo} alt="them-pure" />
                      </Link>
                    </div>
                    <div className="tp-footer__contact-info">
                      <Link
                        href="https://www.google.com.bd/maps/place/%E0%A6%B2%E0%A6%BE%E0%A6%95%E0%A7%8D%E0%A6%B8%E0%A7%87%E0%A6%AE%E0%A6%AC%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%97/@49.8143242,5.5590915,10z/data=!3m1!4b1!4m5!3m4!1s0x479545b9ca212147:0x64db60f602d392ef!8m2!3d49.815273!4d6.129583"
                        target="_blank"
                        className="text-white"
                      >
                        {t(address)} <br />
                        <br /> Ciudad de México{" "}
                      </Link>
                      <ul>
                        <li>
                          <span className="text-white">
                            <i
                              className="fas fa-phone"
                              style={{ color: "white" }}
                            ></i>
                          </span>
                          <Link
                            className="first-child text-white"
                            href={`tel:${phone}`}
                          >
                            {phone}
                          </Link>
                        </li>
                        <li>
                          <span className="text-white">
                            <i
                              className="fas fa-envelope"
                              style={{ color: "white" }}
                            ></i>
                          </span>
                          <Link href={`mailto:${email}`} className="text-white">
                            {email}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {footer_lisks.map((item, i) => (
                  <div
                    key={i}
                    className="col-xl-3 col-lg-3 col-md-6 pb-30 wow tpfadeUp"
                    data-wow-duration=".9s"
                    data-wow-delay={item.delay}
                  >
                    <div
                      className={`tp-footer__widget footer-widget-2 ${item.cls}`}
                    >
                      <h4 className="tp-footer__widget-title text-white">
                        {t(item.title)}
                      </h4>
                      <div className="tp-footer__content">
                        <ul>
                          {item.links.map((link, i) => (
                            <li key={i}>
                              <Link href={link.link} className="text-white">
                                {t(link.name)}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}

                <div
                  className="col-xl-3 col-lg-3 col-md-6 pb-30 wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".9s"
                >
                  <div className="tp-footer__widget footer-widget-2 footer-col-2-4">
                    <h4 className="tp-footer__widget-title text-white">
                      {t(download)}
                    </h4>
                    <div className="tp-footer__download-box d-flex align-items-center">
                      <div className="tp-footer__qrcode mr-15">
                        <Link href="#">
                          {" "}
                          <Image src={qr_code} alt="them-pure" />
                        </Link>
                      </div>
                      <div className="tp-footer__app">
                        <Link href="#">
                          <Image
                            className="mb-15"
                            src={i_phone}
                            alt="them-pure"
                          />
                        </Link>
                        <Link href="#">
                          <Image src={google_ply} alt="them-pure" />
                        </Link>
                      </div>
                    </div>
                    <br />
                    <h4 className="tp-footer__widget-title text-white">
                      {t("footerTitle4")}
                    </h4>
                    <div className="tp-footer__input mb-35 p-relative">
                      <NewsLetterForm />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tp-copyright__area pt-20 pb-20">
            <div className="container">
              <div
                className="row d-flex flex-column flex-nowrap flex-lg-row flex-xl-row
                                  justify-content-center align-items-center gap-4"
              >
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                  <div className="tp-copyright__social d-flex justify-content-center gap-2">
                    {social_links.map((l, i) => (
                      <Link
                        key={i}
                        href={l.link}
                        target={l.target ? l.target : ""}
                        style={{ backgroundColor: "black" }}
                      >
                        <i className={l.icon} style={{ color: "white" }}></i>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 d-md-block">
                  <div className="tp-copyright__text tp-copyright__text-2 text-center">
                    <span>
                      <CopyRight />
                    </span>
                  </div>
                </div>
                <div className="d-flex justify-content-center col-xl-3 col-lg-3 col-md-3 col-sm-6">
                  <div className="tp-copyright__lang-box  d-flex align-items-center justify-content-md-end justify-content-sm-end justify-content-start">
                    <div className="tp-copyright__lang tp-copyright__lang-2">
                      <ul>
                        <li
                          className="dark-bg"
                          style={{ borderRadius: "10px" }}
                        >
                          <button
                            id="tp-copyright__lang-toggle"
                            onClick={() => oppenLan()}
                          >
                            <span className="text-white">
                              {idioma ? "Español" : "English"}
                              <i
                                className="fal fa-globe"
                                style={{
                                  color: "white",
                                  backgroundColor: "black",
                                }}
                              ></i>
                            </span>
                          </button>
                          {isOppen && (
                            <ul
                              className={`tp-copyright__lang-submenu ${
                                isOppen && "open"
                              }`}
                            >
                              <li>
                                <Link
                                  href="#"
                                  onClick={() => {
                                    if (idioma === true) {
                                      changeLanguage("en");
                                      setIdioma(false);
                                      setIsOppen(false);
                                    } else {
                                      changeLanguage("es");
                                      setIdioma(true);
                                      setIsOppen(false);
                                    }
                                  }}
                                >
                                  {idioma ? "English" : "Español"}
                                </Link>
                              </li>
                            </ul>
                          )}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterTwo;
