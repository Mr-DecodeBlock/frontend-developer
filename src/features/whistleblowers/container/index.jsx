import React from "react";
import { MainLayout } from "../../../layout/main";
import styles from './styles.module.css'
import { SectionDeveloper } from "../../home/views";

// @Components
import { GearsDocumentationLayer } from "@/src/common/icon-layer";
import { DocumentationLayer } from '../layer'

import {
  Card,
  InformationWhistleblowers
} from "../views";

import { PrincipalCardSection } from "@/src/common/sectionPrincipalCard/principal-card.section";
import logo from "@/public/assets/img/whistleblowers/aviso_informantes.svg";
import stylesHome from '../../home/container/styles.module.css';
import { useTranslation } from "react-i18next";


export function Whistleblowers() {
  const {t}=useTranslation()
  return (
    <MainLayout>
      <GearsDocumentationLayer>
        <PrincipalCardSection
          title={t('whistleblowers.title')}
          description={t('whistleblowers.description')}
          linkEs="#es"
          linkUs="#en"
          logoUrl={logo}
        />
      </GearsDocumentationLayer>
      <div className={stylesHome.margin}>
        <div className={styles.page}>
          <DocumentationLayer>
            <div className={styles.gap}>
              <Card />
              <InformationWhistleblowers />
              <SectionDeveloper />
            </div>
          </DocumentationLayer>
        </div>
      </div>
    </MainLayout>
  );
}