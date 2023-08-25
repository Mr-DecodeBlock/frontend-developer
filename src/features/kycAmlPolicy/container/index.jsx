import React from "react";
// @Layouts
import { MainLayout } from "../../../layout/main";

// @Views
import {
  CardKycPolicies,
  InformationKyc,
} from "../views";

// @Styles
import styles from './styles.module.css'
import { SectionDeveloper } from "../../home/views";

// @Components
import { GearsDocumentationLayer } from "@/src/common/icon-layer";

import { PrincipalCardSection } from "@/src/common/sectionPrincipalCard/principal-card.section";
import { DocumentationLayer } from '../layer'
import logo from "@/public/assets/img/kyc/kycLogo.svg";
import stylesHome from '../../home/container/styles.module.css';
import { useTranslation } from "react-i18next";

export function KycAmlPolicies() {

  const { t } = useTranslation();
  return (
    <MainLayout>
      <GearsDocumentationLayer>
        <PrincipalCardSection
          title={t('kycamlPolicies.title')}
          description={t('kycamlPolicies.description')}
          linkEs="#es"
          linkUs="#en"
          logoUrl={logo}
        />
      </GearsDocumentationLayer>
      <DocumentationLayer>
        <div className={styles.margin}>
          <CardKycPolicies></CardKycPolicies>
          <InformationKyc></InformationKyc>
          <SectionDeveloper></SectionDeveloper>
        </div>
      </DocumentationLayer>
    </MainLayout>
  );
};







