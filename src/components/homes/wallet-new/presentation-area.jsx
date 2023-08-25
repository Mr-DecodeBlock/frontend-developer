import React from "react";
import waller_image from '/public/assets/img/wallet.png';
import Image from "next/image";
import PresentationPreTitlte from "./presentation-section/presentation-pretitle";
import PresentationTitle from "./presentation-section/presentation-title";
import { useTranslation } from "react-i18next";
import PresentationDescription from "./presentation-section/presentation-description";
import PresentationList from "./presentation-section/presentation-list";

const PresentationArea = () => {
  const [t] = useTranslation();

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 p-5">
          <Image alt="Billetera digital definitiva" src={waller_image}/>
        </div>
        <div className="col-md-6 p-5">
          <PresentationPreTitlte pretitle={t('walletPresentation_preTitle','Crea tu billetera digital')}/>
          <PresentationTitle title={t('walletPresentation_title','La billetera digital definitiva.')}/>
          <PresentationDescription description={t('walletPresentation_description', 'Una billetera digital completa con todas las funcionalidades necesarias para lograr la libertad económica.')}/>
          <PresentationList/>
        </div>
      </div>
    </div>
  );
};

export default PresentationArea;
