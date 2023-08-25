// @Libraries
import Link from "next/link";
import hover from "./img/hover.svg";
import { useTranslation } from "react-i18next";
import LanguageMenu from "../../components/language-dropdown/languageButton";

// @Styles
import styles from "./styles.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useRouter } from "next/router";

const contents = [
  {
    title: "Inicio",
    color: "#fafafa",
    link: "/",
  },
  {
    title: "services",
    link: "#",
    color: "#fafafa",
    menu: [
      // {
      //   title1: { link: "/wallet", title: "Blockchain" },
      //   items: [{ link: "/wallet", title: "Nodos y redes" },
      //   { link: "/wallet", title: "EVM" },
      //   { link: "/wallet", title: "Staking" },
      //   { link: "/wallet", title: "Arquitectura" },
      //   { link: "/wallet", title: "Seguridad" },
      //   { link: "/wallet", title: "Programa development" }]
      // },
      {
        title1: { link: "/wallet", title: "Wallet" },
        items: [{ link: "/broker", title: "Broker" }],
        // items: [{ link: "/termsOfUse", title: "Intercambio" },
        // { link: "/commissions", title: "Inversion" },
        // { link: "/cookies-policies", title: "Custodia y seguridad" }],
        // title2: { link: "/kyc-aml-policy", title: "Broker", highlighted: true }
      },
      {},
    ],
  },
  // {
  //   title: "Wallet",
  //   link: "/wallet",
  // },
  // {
  //   title: "Programas",
  //   link: "/programs",
  // },
  {
    title: "Recursos",
    link: "#",
    color: "#fafafa",
    menu: [
      {
        items: [
          { link: "/privacy-policies", title: "privacy" },
          { link: "/termsOfUse", title: "TermsUse" },
          { link: "/commissions", title: "commissions" },
          { link: "/cookies-policies", title: "testimonialPrivaceName15" },
          { link: "/kyc-aml-policy", title: "testimonialPrivaceName17" },
          { link: "/community-rules", title: "communityRulesoverview_title" },
          { link: "/legal-notices", title: "legalNoticesoverview_title" },
          { link: "/whistleblowers", title: "whistlebloweroverview_title" },
          { link: "/requestGuide", title: "requestGuide" },
          { link: "/regulations-and-licences", title: "regulationsAndLicences.title" },
        ],
      },
    ],
  },
  {
    title: "ingresar",
    color: "#ffa80f",
    link: "/login",
  },
];

export function NavContent() {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const [indexHover, setIndexHover] = useState(null);
  const [location, setLocation] = useState("");

  const resources = [
    "regulations-and-licences",
    "requestGuide",
    "whistleblowers",
    "legal-notices",
    "community-rules",
    "kyc-aml-policy",
    "cookies-policies",
    "commissions",
    "termsOfUse",
    "privacy-policies"
  ]
  const services =[
    "wallet",
    "broker"
  ]

  useEffect(() => {
    let path = window.location.pathname.slice(1)
    if (path == "") {
      setIndexHover(0);
    } else if (services.includes(path)) {
      setIndexHover(1);
    } else if (resources.includes(path)) {
      setIndexHover(2);
    } else if (path == "login") {
      setIndexHover(3);
    } else if (path == "register") {
      setIndexHover(null);
    }
  }, []);
  const handleIndexHover = (i) => {
    setIndexHover(i);
  };

  const handleIndexLeaveHover = () => {
    setIndexHover(null);
  };

  return (
    <nav className={`d-flex d-inline`}>
      <ul className={`${styles.container}`}>
        {contents.map((content, i) => (
          <li key={i} className={styles.link}>
            <Link
              href={content.link}
              className={styles.navLink}
              onMouseEnter={() => handleIndexHover(i)}
              onMouseLeave={handleIndexLeaveHover}
            >
              <span className={styles.even} style={{ color: content.color }}>
                {t(content.title)}
              </span>
              <div className={styles.hoverTrue}>
                {indexHover == i ? <Image src={hover} alt="hover.svg" /> : null}
              </div>
            </Link>
            <div>
              {content.menu && (
                <div
                  className={styles.transparentDiv}
                  onMouseEnter={() => handleIndexHover(i)}
                  onMouseLeave={handleIndexLeaveHover}
                >
                  <div
                    className={
                      indexHover == 1 ? styles.submenu : styles.submenu
                    }
                  >
                    {content.menu.map((menu, i) => (
                      <div key={i} className={styles.subMenuContainer}>
                        <div
                          style={
                            menu.title1
                              ? { display: "block" }
                              : { display: "none" }
                          }
                        >
                          {menu.title1 ? (
                            <div className={styles.items}>
                              <Link href={menu.title1.link}>
                                {t(menu.title1.title)}
                              </Link>
                            </div>
                          ) : null}
                        </div>
                        <div>
                          {menu.items
                            ? menu.items.map((m, i) => {
                              return (
                                <div key={i} className={styles.items}>
                                  <Link href={m.link}>{t(m.title)}</Link>
                                </div>
                              );
                            })
                            : null}
                        </div>
                        <div
                          style={
                            menu.title2
                              ? { display: "block" }
                              : { display: "none" }
                          }
                        >
                          {menu.title2 ? (
                            <div className={styles.itemTitle}>
                              <Link href={menu.title2.link}>
                                {t(menu.title2.title)}
                              </Link>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
      <ul className={styles.container} style={{ marginLeft: "2.5rem" }}>
        <li className={styles.link}>
          <Button
            style={{
              backgroundColor: "#ffa80f",
              borderColor: "#ffa80f",
              boxShadow: "1px 2px 15px 0px rgba(255, 168, 15, 0.30)",
              height: "3.1875rem",
            }}
            onClick={() => router.push("/register")}
          >
            {t("register")}
          </Button>
        </li>
        <li className={styles.link}>
          <LanguageMenu />
        </li>
      </ul>
    </nav>
  );
}
