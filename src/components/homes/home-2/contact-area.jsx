import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'react-i18next';

import account_img_1 from "../../../../public/assets/img/account/account-bg.png"
import account_img_2 from "../../../../public/assets/img/contact/african-man.jpg"
import account_img_3 from "../../../../public/assets/img/account/ac-author.png"
import account_img_4 from "../../../../public/assets/img/account/ac-shape-1.png"
import account_img_5 from "../../../../public/assets/img/account/candado.png"


const account_content = {
  account_shape: [
    {
      id: 2,
      cls: "main-img",
      img: account_img_2
    },
  ],
  sub_title: "subtitleOpenAccount",
  title: "¿ Necesitas más información ?",
  account_step: [
    {
      id: 1,
      number: "01",
      info: "No dudes en consultar nuestra completa documentación para acceder a toda la información que necesitas. Está diseñada para brindarte recursos y orientación detallada en cada aspecto de nuestra plataforma.",
    },
  ],
  btn_text: "btnOpenAccount",
  info: "infoOpenAccount",
}
const { account_shape, sub_title, title, account_step, btn_text, info } = account_content



const ContactArea = () => {
  const { t } = useTranslation()
  return (
    <>
      <div className="tp-account-area pb-120">
        <div className="container">
          <div className="d-flex flex-column flex-lg-row gap-5">

              <div className='w-100'>
                <Image src={account_img_2} alt='theme-pure' style={{borderRadius: "20px", border: "solid 5px orange", height: "100%"}}/>
              </div>

            <div className="w-100">
              <div className="tp-account-step-wrapper">
                <div className="tp-account-section-box mb-40">
                  <h3 className="tp-section-title-lg">{t(title)}</h3>
                </div>
                <div className="tp-account-step mb-50">
                  {account_step.map((setp, i) => (
                    <div
                      key={i}
                      className="tp-account-item d-flex align-items-center"
                    >
                      <p>{t(setp.info)}</p>
                    </div>
                  ))}
                </div>
                <div className="tp-account-btn-box">
                  <Link className="tp-btn-green mb-15" href="/register">
                    {t(btn_text)}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactArea;