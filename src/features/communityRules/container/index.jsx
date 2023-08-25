import React from "react";
import { MainLayout } from "../../../layout/main";
import styles from './styles.module.css'
import { SectionDeveloper } from "../../home/views";

import {
  Card, InformationCommunityRules
} from "../views";

import { PrincipalCardSection } from "@/src/common/sectionPrincipalCard/principal-card.section";
import logo from "@/public/assets/img/communityRules/Reglas_comunidad.svg";
import stylesHome from '../../home/container/styles.module.css';

// @Components
import { GearsDocumentationLayer } from "@/src/common/icon-layer";
import { DocumentationLayer } from '../layer'
import { useTranslation } from "react-i18next";

export function ComunityRules() {
  const {t}= useTranslation()
  return (
    <MainLayout>
      <GearsDocumentationLayer>
        <PrincipalCardSection
          title= {t('communityRules.principalCard.title')}
          description= {t('communityRules.principalCard.description')}
          linkEs="#es"
          linkUs="#en"
          logoUrl={logo}
        />
      </GearsDocumentationLayer>
      <div className={stylesHome.margin}>
        <div className={styles.page}>
          <DocumentationLayer >
        <div className={styles.gap}>
            <Card />
            <InformationCommunityRules />
            <SectionDeveloper />
        </div>
          </DocumentationLayer>
        </div>
      </div>
    </MainLayout>
  );
}