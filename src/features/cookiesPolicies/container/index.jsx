import React from "react";

// @Layouts
import { MainLayout } from "../../../layout/main";

// @Views
import {
  CardCookiesPolicies,
  InformationCookies
} from "../views";

// @Components
import { GearsDocumentationLayer } from "@/src/common/icon-layer";
import { DocumentationLayer } from '../layer'


import { PrincipalCardSection } from "@/src/common/sectionPrincipalCard/principal-card.section";

// @Styles
import styles from './styles.module.css'
import stylesHome from '../../home/container/styles.module.css';
import logo from "@/public/assets/img/policiesCookies/logoCookies.svg";
import { SectionDeveloper } from "../../home/views";
import { useTranslation } from "react-i18next";

export function CookiesPoliciesContainer() {
  const {t}=useTranslation()
  return (
    <MainLayout>
      <GearsDocumentationLayer>
        <PrincipalCardSection
          title={t('cookiesPolicies.title')}
          description={t('cookiesPolicies.description')}
          linkEs="#es"
          linkUs="#en"
          logoUrl={logo}
        />
      </GearsDocumentationLayer>
      <DocumentationLayer>
        <div className={styles.margin}>
          <CardCookiesPolicies></CardCookiesPolicies>
          <InformationCookies></InformationCookies>
          <SectionDeveloper></SectionDeveloper>
        </div>
      </DocumentationLayer>
    </MainLayout>
  );
}
