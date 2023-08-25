// @Libraries
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

// @Components
import { NavContent } from "../nav-content";
import LanguageMobileMenu from "../../components/language-dropdown/languageMobileButton";

// @Images
// import logo from "@/public/assets/img/logo/logoGoldHighQuality.png";
// import logo from "@/public/assets/img/logo/new-logo-hq.png";
import logo from "@/public/assets/img/logo/logoGold.svg";
import menu from "@/public/assets/img/header/menu.svg";

// @Styles
import styles from "./styles.module.css";

// @Hooks
import useSticky from "@/src/hooks/use-sticky";
import { useState } from "react";
import { useRouter } from "next/router";
import languageWorld from "../../../../../public/assets/img/footer/languageWorldMobile.svg";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const { t } = useTranslation();
  const { sticky } = useSticky();

  return (
    <header className={sticky ? styles.sticky : styles.container}>
      <div className={styles.maxWidth}>
        <Link href="/" className={styles.logo}>
          <Image src={logo} alt="businessshop-logo" />
        </Link>
        <div className={styles.buttonsContainer}>
          <NavContent />
          {/* <Link className={styles.register} href="/register">
            <span className={styles.registerLabel}>{t("register")}</span>
          </Link> */}
          {/* <LanguageMenu /> */}
          <div className={`d-flex d-inline ${styles.bigMenu}`}>
            <div
              className={`px-0 ${styles.modeButton2}`}
              style={{ marginRight: "1.7rem" }}
            >
              <LanguageMobileMenu />
            </div>
            <button className={styles.menu} onClick={toggleMenu}>
              <Image src={menu} alt="theme-pure" />
            </button>
            {isOpen && (
              <div className={styles.menuItems}>
                <ul>
                  <li className={styles.itemTitle1}>
                    <Link href="/">{t("inicio")}</Link>
                  </li>
                  <li className={styles.itemTitle1}>
                    {t("services")}
                    <ul>
                      {/* <li className={styles.itemTitle2}>Blockchain
                        <ul>
                          <li className={styles.item2}>Nodos y redes</li>
                          <li className={styles.item2}>EVM</li>
                          <li className={styles.item2}>Staking</li>
                          <li className={styles.item2}>Arquitectura</li>
                          <li className={styles.item2}>Seguridad</li>
                          <li className={styles.item2}>Programa development</li>
                        </ul>
                      </li> */}
                      <li className={styles.item1}>
                        {/* <li className={styles.itemTitle2}>   --- volver a este estado*/}
                        <Link href="/wallet">Wallet</Link>
                        {/* <ul>
                          <li className={styles.item2}>Intercambio</li>
                          <li className={styles.item2}>Inversion</li>
                          <li className={styles.item2}>Custodia y seguridad</li>
                        </ul> */}
                      </li>
                      <li className={styles.item1}>
                        <Link href="/broker">Broker</Link>
                      </li>
                      {/* <li className={styles.itemTitle2}>Broker</li> */}
                    </ul>
                  </li>
                  <li className={styles.itemTitle1}>
                    {t("Recursos")}
                    <ul>
                      <li className={styles.item1}>
                        <Link href="/privacy-policies">{t("privacy")}</Link>
                      </li>
                      <li className={styles.item1}>
                        <Link href="/termsOfUse">{t("TermsUse")}</Link>
                      </li>
                      <li className={styles.item1}>
                        <Link href="/commissions">{t("commissions")}</Link>
                      </li>
                      <li className={styles.item1}>
                        <Link href="/cookies-policies">
                          {t("testimonialPrivaceName15")}
                        </Link>
                      </li>
                      <li className={styles.item1}>
                        <Link href="/kyc-aml-policy">
                          {t("testimonialPrivaceName17")}
                        </Link>
                      </li>
                      <li className={styles.item1}>
                        <Link href="/community-rules">
                          {t("communityRulesoverview_title")}
                        </Link>
                      </li>
                      <li className={styles.item1}>
                        <Link href="/legal-notices">
                          {t("legalNoticesoverview_title")}
                        </Link>
                      </li>
                      <li className={styles.item1}>
                        <Link href="/whistleblowers">
                          {t("whistlebloweroverview_title")}
                        </Link>
                      </li>
                      <li className={styles.item1}>
                        <Link href="/requestGuide">{t("requestGuide")}</Link>
                      </li>
                      <li className={styles.item1}>
                        <Link href="/regulations-and-licences">
                          {t("regulationsAndLicences.title")}
                        </Link>
                      </li>
                      {/* <li className={styles.item1}>
                      <Link href='/'>Nosotros</Link>
                    </li>
                    <li className={styles.item1}>
                      <Link href='/'>Contacto</Link>
                    </li> */}
                    </ul>
                  </li>
                  <li
                    className={styles.itemTitle1}
                    onClick={() => router.push("/login")}
                  >
                    {t("ingresar")}
                  </li>
                  <li
                    className={styles.itemTitle1}
                    onClick={() => router.push("/register")}
                  >
                    {t("register")}
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* <button className={styles.modeButton}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={25}
              fill="none"
            >
              <mask
                id="a"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={24}
                height={25}
              >
                <path fill="#D9D9D9" d="M0 .5h24v24H0z" />
              </mask>
              <g mask="url(#a)">
                <path
                  d="M12 15.5c.833 0 1.542-.292 2.125-.875A2.893 2.893 0 0 0 15 12.5c0-.833-.292-1.542-.875-2.125A2.893 2.893 0 0 0 12 9.5c-.833 0-1.542.292-2.125.875A2.893 2.893 0 0 0 9 12.5c0 .833.292 1.542.875 2.125A2.893 2.893 0 0 0 12 15.5Zm0 2c-1.383 0-2.563-.488-3.537-1.462C7.488 15.062 7 13.883 7 12.5s.487-2.563 1.463-3.537C9.438 7.988 10.617 7.5 12 7.5s2.563.487 3.537 1.463C16.512 9.938 17 11.117 17 12.5s-.488 2.563-1.463 3.538c-.975.974-2.154 1.462-3.537 1.462Zm-10-4a.967.967 0 0 1-.712-.287A.968.968 0 0 1 1 12.5c0-.283.096-.52.288-.713A.967.967 0 0 1 2 11.5h2c.283 0 .52.096.713.287.191.192.287.43.287.713s-.096.52-.287.713A.967.967 0 0 1 4 13.5H2Zm18 0a.968.968 0 0 1-.712-.287A.968.968 0 0 1 19 12.5c0-.283.096-.52.288-.713A.968.968 0 0 1 20 11.5h2c.283 0 .52.096.712.287.192.192.288.43.288.713s-.096.52-.288.713A.968.968 0 0 1 22 13.5h-2Zm-8-8a.968.968 0 0 1-.713-.287A.967.967 0 0 1 11 4.5v-2c0-.283.096-.52.287-.712A.968.968 0 0 1 12 1.5c.283 0 .52.096.713.288.191.191.287.429.287.712v2c0 .283-.096.52-.287.713A.968.968 0 0 1 12 5.5Zm0 18a.968.968 0 0 1-.713-.288A.968.968 0 0 1 11 22.5v-2c0-.283.096-.52.287-.712A.968.968 0 0 1 12 19.5c.283 0 .52.096.713.288.191.191.287.429.287.712v2c0 .283-.096.52-.287.712A.968.968 0 0 1 12 23.5ZM5.65 7.55 4.575 6.5a.87.87 0 0 1-.288-.7c.009-.283.105-.525.288-.725.2-.2.442-.3.725-.3s.517.1.7.3L7.05 6.15c.183.2.275.433.275.7 0 .267-.092.5-.275.7a.856.856 0 0 1-.688.288 1.07 1.07 0 0 1-.712-.288ZM18 19.925l-1.05-1.075a1.019 1.019 0 0 1-.275-.713c0-.274.092-.504.275-.687a.856.856 0 0 1 .688-.287c.274.008.512.104.712.287l1.075 1.05a.87.87 0 0 1 .287.7 1.085 1.085 0 0 1-.287.725c-.2.2-.442.3-.725.3a.908.908 0 0 1-.7-.3ZM16.95 7.55a.856.856 0 0 1-.287-.688 1.07 1.07 0 0 1 .287-.712L18 5.075a.87.87 0 0 1 .7-.288c.283.009.525.105.725.288.2.2.3.442.3.725s-.1.517-.3.7L18.35 7.55c-.2.183-.433.275-.7.275-.267 0-.5-.092-.7-.275ZM4.575 19.925c-.2-.2-.3-.442-.3-.725s.1-.517.3-.7l1.075-1.05c.2-.183.438-.275.712-.275.276 0 .505.092.688.275.2.183.296.413.288.688a1.07 1.07 0 0 1-.288.712L6 19.925a.87.87 0 0 1-.7.287 1.085 1.085 0 0 1-.725-.287Z"
                  fill="#FAFAFA"
                />
              </g>
            </svg>
          </button> */}
        </div>
      </div>
    </header>
  );
}
