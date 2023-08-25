import { Table, Dropdown, Nav, NavItem, NavLink } from "react-bootstrap";
import { useTranslation } from "react-i18next";

// @Styles
import styles from "./styles.module.css";

export function TabsCommission({
  handleTabChange,
  countries,
  handleCountrySelect,
  countrySelect,
  tabs,
  activeTab,
}) {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div
        className={styles.tabsContainer}
        // style={{ marginTop: "4rem" }}
      >
        <h5>
          {t("depositWithdrawal")}
        </h5>
        <div className={styles.buttonContainer}>
          {countries.map((country, index) => (
            <button
              key={index}
              className={countrySelect === country.nombre ? styles.active : styles.button}
              onClick={() => handleCountrySelect(country.nombre)}
            >
              {country.nombre}
            </button>
          ))}
        </div>
      </div>
      <div className={styles.tabsContainer}>
        <div className={styles.buttonContainer}>
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={activeTab === tab.value ? styles.active : styles.button}
              onClick={() => handleTabChange(tab.value)}
            >
              {t(tab.label)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
