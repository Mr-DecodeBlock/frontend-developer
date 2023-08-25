import React from "react";
import { MainLayout } from "../../../layout/main";
import styles from './styles.module.css'
import { SectionDeveloper } from "../../home/views";

import {
    Card,
    InformationTerms
} from "../views";

// @Components
import { GearsDocumentationLayer } from "@/src/common/icon-layer";
import { DocumentationLayer } from '../layer'

import { PrincipalCardSection } from "@/src/common/sectionPrincipalCard/principal-card.section";
import logo from "@/public/assets/img/termsOfUse/logo.svg";
import stylesHome from '../../home/container/styles.module.css';
import { useTranslation } from "react-i18next";

export function TermsOfUsePage() {
    const {t}=useTranslation()
    return (
        <MainLayout>
            <GearsDocumentationLayer>
                <PrincipalCardSection
                    title={t('termsOfUse.principalCard.title')}
                    description={t('termsOfUse.principalCard.description')}
                    linkEs="#es"
                    linkUs="#en"
                    logoUrl={logo}
                />
            </GearsDocumentationLayer>
            <div className={styles.page}>
                <DocumentationLayer>
                    <div className={styles.margin}>
                        <Card />
                        <InformationTerms />
                        <SectionDeveloper />
                    </div>
                </DocumentationLayer>
            </div>
        </MainLayout>
    );
}