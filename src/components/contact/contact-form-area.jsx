import ContactUsForm from '@/src/forms/contact-us-form';
import SendIcon from '@/src/svg/send-icon';
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';

import img from "../../../public/assets/img/contact/contact-icon-sm-4.png";
import Image from 'next/image';


const contact_content  = {
    sub_title: "contactFormSubTitle",
    tilte: "contactFormTitle1",
    tilte2: "contactFormTitle2",
    info:  "contactFormInfo",
    info2: "contactFormInfo2",
    email: "hola@businessshop.ai",
    email2: "core@businessshop.ai",
    email3: "labs@businessshop.ai",
    email4: "privacy@businessshop.ai",
     
}
const {sub_title, tilte, tilte2, info, info2, email, email2, email3, email4}  =  contact_content


const ContactFormArea = () => {
   const {t} = useTranslation();

    return (
        <>
            <div className="contact-form-area pb-120">
               <div className="container">
                  <div className="row gx-0">
                     <div className="col-xl-5 col-lg-6">
                        <div className="contact-form-left">
                           <div className="contact-form-section-box pb-80">
                              <h5 className="inner-section-subtitle">{t(sub_title)}</h5>
                              <h4 className="tp-section-title pb-10"> {t(tilte)} <br /> {t(tilte2)} </h4>
                              <p>{t(info)} <br /> {t(info2)} </p>
                              <p><strong><Link href={`mailto:${email}`}>{email}</Link></strong></p>
                              <p><strong><Link href={`mailto:${email2}`}>{email2}</Link></strong></p>
                              <p><strong><Link href={`mailto:${email3}`}>{email3}</Link></strong></p>
                              <p><strong><Link href={`mailto:${email4}`}>{email4}</Link></strong></p>
                           </div>
                           <div className="contact-form-social-box p-relative">
                              <div className="contact-form-social-item">
                                 <Link href="https://www.facebook.com/people/Business-Shop/100092842603129"><i className="fab fa-facebook-f"></i></Link>
                                 <Link href="https://twitter.com/BUSINESSSHOP_?T=eg6EIWDDA0SiQdB8dqP3hQ&s=09"><i className="fab fa-twitter"></i></Link>
                                 <Link href="https://www.linkedin.com/in/businessshop/"><i className="fab fa-linkedin-in"></i></Link>
                                 <Link href="https://www.instagram.com/businessshop.aa/"><i className="fab fa-instagram"></i></Link>
                              </div>
                              <div className="contact-form-section-img">
                                 <Image src={img} alt="theme-pure" />
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-7 col-lg-6">
                        <div className="contact-form-right-warp">
                           <div className="postbox__comment-form">
                            <ContactUsForm /> 
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
        </>
    );
};

export default ContactFormArea;