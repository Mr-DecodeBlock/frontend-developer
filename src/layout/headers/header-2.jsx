import useSticky from '@/src/hooks/use-sticky';
import Offcanvus from '@/src/common/offcanvus';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import NavMenu from './nav-menu';
import { useTranslation } from 'react-i18next';

import white_logo from "../../../public/assets/img/logo/logoGold.png"
import black_logo from "../../../public/assets/img/logo/logoWhite.png"
import { Dropdown } from 'react-bootstrap';

const hero_content = {
   login_btn: "Ingresa",
   sign_up_btn: "Registro",
}
const { login_btn, sign_up_btn } = hero_content

const HeaderTwo = () => {
   const { t, i18n } = useTranslation();
   const { sticky } = useSticky()
   const [sidebarOpen, setSidebarOpen] = useState(false)
   const [idioma, setIdioma] = useState(true);

   useEffect(() => {
      const alarm = localStorage.getItem("i18nextLng")
      console.log(alarm)
      alarm === "es" ? setIdioma(true) : setIdioma(false)
   }, [])

   const changeLanguage = (language) => {
      i18n.changeLanguage(language);
      localStorage.setItem("i18nextLng", language)
   };

   const oppenLan = () => {
      setIsOppen(!isOppen)
   }

   return (
      <>
         <header className="tp-header-height">
            <div id="header-sticky"
               className={`"tp-header-2__area header-sticky-bg-2 tp-header-2__transparent tp-header-2__plr z-index-3 
               ${sticky && "header-sticky"}`}>
               <div className="container-fluid g-0">
                  <div className="row g-0 align-items-center">
                     <div className="col-xl-2 col-lg-2 col-md-6 col-6">
                        <div className="tp-header-2__logo">
                           <Link className="white-logo" href="/"><Image src={white_logo} alt="theme-pure" /></Link>
                           <Link className="black-logo" href="/"><Image src={black_logo} alt="theme-pure" /></Link>
                        </div>
                     </div>
                     <div className="col-xl-6 col-lg-5 d-none d-lg-block">
                        <div className="tp-header-2__main-menu text-center">
                           <nav id="mobile-menu">
                              <NavMenu />
                           </nav>
                        </div>
                     </div>
                     <div className="d-flex col-xl-4 col-lg-5 col-md-6 col-6">
                        <div className="tp-header-2__right d-flex align-items-center justify-content-end">

                           {/*PANEL DE CONTROL: Login Register*/}

                           <Link className="tp-header-2__login d-none d-md-block" href="/sign-in">{t("singInNav")}</Link>
                           <Link className="tp-btn-green-sm d-none d-md-block" href="/register">{t("register")}</Link>

                           <Dropdown className='ml-15'>
                              <Dropdown.Toggle id="lang-toggle" variant='dark' style={{ background: "#1E1E1E", color: "white" }}>
                                 <span><i className="fal fa-globe" style={{ color: "white" }}></i> </span>
                              </Dropdown.Toggle>
                              <Dropdown.Menu >
                                 <Dropdown.Item onClick={() => {
                                    if (idioma === true) {
                                       changeLanguage("en");
                                       setIdioma(false);
                                    } else {
                                       changeLanguage("es");
                                       setIdioma(true);
                                    }
                                 }} style={{ background: "transparent" }}>
                                    {idioma ? "English" : "Español"}
                                 </Dropdown.Item>
                              </Dropdown.Menu>
                           </Dropdown>

                           <a className="header-bottom__bar tp-menu-bar d-lg-none"
                              onClick={() => setSidebarOpen(true)}
                           ><i className="fal fa-bars"></i></a>

                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>
         <Offcanvus sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </>
   );
};

export default HeaderTwo;