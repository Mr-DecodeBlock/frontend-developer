import React from 'react';
import { useTranslation } from 'react-i18next';


import img_1 from "../../../public/assets/img/contact/twitter-contact.png";
import img_2 from "../../../public/assets/img/contact/discord-contact.png";
import img_3 from "../../../public/assets/img/contact/mesenger-contact.png";
import Image from 'next/image';
import Link from 'next/link';


// office location data
const office_data = [
    {
        id: 1, 
        cls:"",
        img: img_1,
        location: "Twitter",
        address:  "communityAddress1",
        link: "https://twitter.com/BUSINESSSHOP_?T=eg6EIWDDA0SiQdB8dqP3hQ&s=09",
    },
    {
        id: 2, 
        cls:"p-relative",
        img: img_2,
        badge: "Main Office",
        location: "Discord",
        address: "communityAddress2",
        link: "https://discord.com/",
    },
    {
        id: 3, 
        cls:"",
        img: img_3,
        location: "Messenger",
        address: "communityAddress3",
        link: "https://www.facebook.com/people/Business-Shop/100092842603129",
    },
]

const OfficeLocation = () => {

   const { t } = useTranslation();

    return (
      <>
        <div className="contact-info-area pb-90">
          <div className="container">
            <div className="row">
              {office_data.map((item, i) => (
                <div key={i} className="col-xl-4 col-lg-4 mb-30">
                  <div className={`contact-info-item ${item.cls}`}>
                    {item.badge && (
                      <div className="contact-info-badge">
                        <span>{t("community")}</span>
                      </div>
                    )}
                    <div className="contact-info-img">
                      <Image src={item.img} alt="theme-pure" />
                    </div>
                    <div className="contact-info-title-box">
                      <h5 className="contact-info-title-sm">
                        <Link href={item.link} target="_blank">{item.location}</Link>
                      </h5>
                      <p>{t(item.address)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
};

export default OfficeLocation;