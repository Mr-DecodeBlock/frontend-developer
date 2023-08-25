// @Libraries
import { useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

// @Assets
import flash1 from "@/public/assets/img/home-revolution/flash1.svg";

// @Views
import CommissionsTables from "../commissionTables/commissions-tables";
import Timelines from "../commissionTables/timelines";
import { TabsCommission } from "../tabs";

// @Styles
import styles from "./cardComponent.module.css";

// @Data
import {
  paises,
  abonoRetiroTrans,
  compraVenta,
  comisiones,
  abonoRetiroCripto,
} from "../commissionTables/commission-data";

const tabs = [
  {
    value: "abono-retiro",
    label: "depositWithdrawal",
  },
  {
    value: "compra-venta",
    label: "buySell",
  },
  {
    value: "vista-trader",
    label: "Vista Trader",
  },
];

export function CardComponent() {
  const { t } = useTranslation();
  const [countrySelect, setCountrySelect] = useState("Chile");
  const [coin, setCoin] = useState("USD coin");
  const [abonoRetiroSelect, setAbonoRetiroSelect] = useState([]);
  const [ventaRetiroSelect, setVentaRetiroSelect] = useState([]);
  const [comisionSelect, setComisionSelect] = useState([]);
  const [activeTab, setActiveTab] = useState("abono-retiro");
  // const { t } = useTranslation();

  const handleSelect = (pais) => {
    setCountrySelect(pais);
  };

  const dropdownSelect = (moneda, pais) => {
    setCountrySelect(pais);
    setCoin(moneda);
    console.log("pais:" + pais + "moneda:" + moneda);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.cardComponent}>
      <Image src={flash1} alt="flash" className={styles.flash1} />

      <div className={styles.tables}>
        <div className={styles.containerText}>
          <h1 className={`text-center mb-3`}>{t("commissionsTablesTitle")}</h1>
          <p className={styles.subTitle}>{t("commissionsTablesSubTitle")}</p>
        </div>

        <TabsCommission
          countries={paises}
          countrySelect={countrySelect}
          handleCountrySelect={handleSelect}
          handleTabChange={handleTabChange}
          tabs={tabs}
          activeTab={activeTab}
        />
        <CommissionsTables activeTab={activeTab} countrySelect={countrySelect} coin={coin} />
      </div>
      <Timelines />
    </div>
  );
}
