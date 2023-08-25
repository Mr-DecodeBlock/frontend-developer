import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'react-i18next';

import account_img_1 from "../../../../public/assets/img/account/account-bg.png"
import account_img_2 from "../../../../public/assets/img/account/happy-girl.jpg"
import account_img_3 from "../../../../public/assets/img/account/ac-author.png"
import account_img_4 from "../../../../public/assets/img/account/ac-shape-1.png"
import account_img_5 from "../../../../public/assets/img/account/candado.png"


const account_content = {
  account_shape: [
    // {
    //     id: 2,
    //     cls: "main-img",
    //     img: account_img_2 
    // },
    {
      id: 4,
      cls: "shape-1",
      img: account_img_4
    },
    {
      id: 5,
      cls: "shape-2",
      img: account_img_5
    },
  ],
  sub_title: "subtitleOpenAccount",
  title: "titleOpenAccount",
  account_step: [
    {
      id: 1,
      number: "01",
      info: "openAccountInfo1",
    },
    {
      id: 2,
      number: "02",
      info: "openAccountInfo2",
    },
    {
      id: 3,
      number: "03",
      info: "openAccountInfo3"
    },

  ],
  btn_text: "btnOpenAccount",
  info: "infoOpenAccount",
}
const { account_shape, sub_title, title, account_step, btn_text, info } = account_content



const OpenAccountArea = () => {
  const { t } = useTranslation()
  return (
    <>
      <div className="tp-account-area pb-120">
        <div className="container">
          <div className="d-flex flex-column flex-lg-row gap-4">
            <div className='w-100' style={{padding: "7% 1%"}}>
              <Image src={account_img_2} style={{borderRadius: "20px", boxShadow: "black 1px 1px 12px 2px", height: "100%"}}/>
            </div>
            {/* <div
                  className="tp-account-thumb-wrapper p-relative text-center wow tpfadeLeft h-100"
                  data-wow-duration=".9s"
                  data-wow-delay=".5s"
                > */}
            {/* {account_shape.map((item, i) => (
              <div key={i} className={`tp-account-${item.cls}`}>
                <Image src={item.img} alt="theme-pure" />
              </div>
            ))} */}
            {/* </div> */}
            <div className="w-100">
              <div className="tp-account-step-wrapper">
                <div className="tp-account-section-box mb-40 w-100">
                  <h4 className="tp-section-subtitle-2">{t(sub_title)}</h4>
                  <h3 className="tp-section-title-lg">{t(title)}</h3>
                </div>
                <div className="tp-account-step mb-50">
                  {account_step.map((setp, i) => (
                    <div
                      key={i}
                      className="tp-account-item d-flex align-items-center"
                    >
                      <span>{setp.number}</span>
                      <p>{t(setp.info)}</p>
                    </div>
                  ))}
                </div>
                <div className="tp-account-btn-box">
                  <Link className="tp-btn-green mb-15" href="/register">
                    {t(btn_text)}
                  </Link>
                  <p>{t(info)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OpenAccountArea;