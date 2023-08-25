import CheckboxIcon from '@/src/svg/checkbox-icon';
import EmailFive from '@/src/svg/email-5';
import LocationIconThree from '@/src/svg/location-icon-3';
import ShareIcon from '@/src/svg/share-icon';
import React from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import team_img from "../../../public/assets/img/team/team-details-1.jpg";
import Image from 'next/image';
import Link from 'next/link';


const team_details_content = {
  name: "Imdat Cimsit",
  feature_list: [
    <>Cras sed felis eget velit aliquet. Morbi quis commodo odio</>,
    <>Pharetra vel turpis nunc eget lorem dolor. Quam vulputate <br />dignissim</>,
    <>Vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</>,
  ],
  expricence: [
    { id: 1, title: "Verificación:", info: "No verificado" },
    { id: 2, title: "", info: "" },
  ],
  skill_title: "Superpower Skills:",
  details_skill: ["Interaction Design", "User Research", "Figma"],
  membur_about_title: "About Imdat Cimsit",
  about_info_1: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </>,
  about_info_2: <>Cras sed felis eget velit aliquet. Morbi quis commodo odio aenean sed adipiscing diam donec adipiscing. Nibh tellus molestie nunc non blandit massa enim nec. Ac feugiat sed lectus vestibulum mattis ullamcorper velit. Posuere morbi leo urna molestie.
  </>,
}

const TeamDetailsArea = () => {
  const { username } = useSelector((state) => state.user);
  const { email } = useSelector((state) => state.user);
  const router = useRouter();

  const handleVerifyCode = () => {
    // Lógica para verificar el código

    // Redireccionar al usuario al inicio
    router.push('/login');
  };

  return (
    <>
      <div className="team-details-area pt-100 pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="team-details-wrapper">
                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-4">
                    <div className="team-details-img-box text-center">
                      <div className="team-details-img">
                        <Image src={team_img} alt="theme-pure" />
                      </div>
                      <div className="team-details-work-tag">
                        <span>
                          <CheckboxIcon />
                        </span>
                        <span>Usuario Verificado</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-8 col-lg-8 col-md-8">
                    <div className="team-details-info-box">
                      <h3 className="team-details-client-title">{username}</h3>
                      <div className="team-details-contact-box d-flex align-items-center">
                        <div className="team-details-personal-info">
                          <EmailFive />
                          <span>{email}</span>
                        </div>
                      </div>
                      <div className="team-details-expricence-box d-flex align-items-center">
                        {team_details_content.expricence.map((item, i) => (
                          <div key={i} className="team-details-expricence-box-1">
                            <span>{item.title}</span> <br />
                            <em>{item.info}</em>
                          </div>
                        ))}
                      </div>
                      <div className="signin-banner-from-btn mb-20">
                        <button type="submit" className="signin-btn" onClick={handleVerifyCode}>
                          Salir
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamDetailsArea;
