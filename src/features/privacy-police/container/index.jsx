import React from "react";

// @Layouts
import { MainLayout } from "../../../layout/main";

// @Views
import {
    PrincipalCardSection,
    Card,
} from "../views";

import { InformationCookies } from "../../../features/cookiesPolicies/views/NeedInformation/InformationCookies";
import { SectionDeveloper } from "../../home/views/sectionDevelop/sectionDevelopers";

// Import images
import logo from '@/public/assets/img/privacy-police/mainIlustration.svg';

// @Styles
import styles from '../../home/container/styles.module.css';
import stylesPrivacy from './styles.module.css';

// @Components
import { GearsDocumentationLayer } from "@/src/common/icon-layer";
import { DocumentationLayer } from '../layer'
import { useTranslation } from "react-i18next";

export function PrivacyPoliceContainer() {
    const {t}=useTranslation()
    return (
        <>
            <MainLayout>
                <GearsDocumentationLayer >
                    <PrincipalCardSection
                        title={t('privacyPolice.title')}
                        description={t('privacyPolice.description')}
                        linkEs="#es"
                        linkUs="#en"
                        logoUrl={logo}
                    />
                </GearsDocumentationLayer>

                <DocumentationLayer>
                    <div className={stylesPrivacy.margin}>
                        {/* <div className={stylesPrivacy.mBottom}> */}
                        <Card />
                        {/* </div> */}

                        {/* <div className={stylesPrivacy.mBottom2}> */}
                        <InformationCookies />
                        {/* </div> */}

                        {/* <div> */}
                        <SectionDeveloper />
                        {/* </div> */}
                    </div>
                </DocumentationLayer>

            </MainLayout>
        </>
    );
}
