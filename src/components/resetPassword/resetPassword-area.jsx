import React from 'react';
import ResetForm from "../../forms/reset-form"
import GoogleIcon from '@/src/svg/google-icon';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

// shape import here
import shape_1 from "../../../public/assets/img/login/coin.png";
import shape_2 from "../../../public/assets/img/login/login-223.png";
import shape_3 from "../../../public/assets/img/login/login-12.png";
import shape_4 from "../../../public/assets/img/login/login-31.png";
import shape_5 from "../../../public/assets/img/login/login-5.png";


const ResetPasswordArea = () => {
  const { t } = useTranslation();

  const register_content = {
    bg_img: "/assets/img/login/register.png",
    banner_title: <>{t("resetPasswordTitle")} <br/> Business<span style={{ color: "#ffcc33" }}>Shop</span></>,
  };
  
  const { bg_img, banner_title } = register_content;

  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <div className="signin-banner-area signin-banner-main-wrap d-flex align-items-center">
              <div
                className="signin-banner-left-box signin-banner-bg p-relative"
                style={{ backgroundImage: `url(${bg_img})` }}
              >
                <div className="signin-banner-bottom-shape">
                  <Image src={shape_1} alt="theme-pure" />
                </div>
                <div className="signin-banner-left-wrap">
                  <div className="signin-banner-title-box mb-100">
                    <h4 className="signin-banner-title tp-char-animation">{banner_title}</h4>
                  </div>
                  <div className="signin-banner-img-box position-relative">
                    <div className="signin-banner-img signin-img-1 d-none d-md-block z-index-3">
                      <Image src={shape_2} alt="theme-pure" />
                    </div>
                    <div className="signin-banner-img signin-img-2 d-none d-md-block">
                      <Image src={shape_3} alt="theme-pure" />
                    </div>
                    <div className="signin-banner-img signin-img-3 d-none d-md-block z-index-5">
                      <Image src={shape_4} alt="theme-pure" />
                    </div>
                    <div className="signin-banner-img signin-img-4 d-none d-sm-block">
                      <Image src={shape_5} alt="theme-pure" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="signin-banner-from d-flex justify-content-center align-items-center">
                <div className="signin-banner-from-wrap text-center">
                  <div className="signin-banner-title-box">
                    <h4 className="signin-banner-from-title text-center">{t("forgotPassword")}</h4>
                  </div>
                  {/* <div className="signin-banner-login-browser">
                     <Link href="#"> 
                        <GoogleIcon />
                        Continue with Google
                     </Link>
                  </div> */}
                  <div className="signin-banner-from-box">
                    <h5 className="signin-banner-from-subtitle text-center text-center">{t("enterYourEmail")}</h5>
                    <ResetForm />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default ResetPasswordArea;