// export default CommissionsTables;
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Table, Dropdown, Nav, NavItem, NavLink } from "react-bootstrap";
import {
  paises,
  abonoRetiroTrans,
  compraVenta,
  comisiones,
  abonoRetiroCripto,
} from "./commission-data";
import styles from "./commissions.module.css";

const CommissionsComponent = ({ activeTab, countrySelect, coin }) => {
  // const [countrySelect, setCountrySelect] = useState("");
  // const [coin, setCoin] = useState("");
  const [abonoRetiroSelect, setAbonoRetiroSelect] = useState([]);
  const [ventaRetiroSelect, setVentaRetiroSelect] = useState([]);
  const [comisionSelect, setComisionSelect] = useState([]);
  // const [activeTab, setActiveTab] = useState("abono-retiro");
  const { t } = useTranslation();

  // const handleSelect = (pais) => {
  //     setCountrySelect(pais);
  // };

  // const dropdownSelect = (moneda, pais) => {
  //     setCountrySelect(pais);
  //     setCoin(moneda);
  //     console.log("pais:" + pais + "moneda:" + moneda);
  // };

  // const handleTabChange = (tab) => {
  //     setActiveTab(tab);
  // };

  useEffect(() => {

    const abonoRetiro = abonoRetiroTrans.find((item) => item.pais === countrySelect);
    if (abonoRetiro) {
      setAbonoRetiroSelect(abonoRetiro.data);
    }

    const res = compraVenta.find((item) => item.pais === countrySelect);
    if (res) {
      setVentaRetiroSelect(res.data);
    }

    const selectedData = comisiones.find((item) => item.pais === countrySelect && item.moneda === coin);
    if (selectedData) {
      setComisionSelect(selectedData.data);
    }
  }, [countrySelect, coin]);

  return (
    <div
      className="container"
    // style={{ marginTop: "4rem", marginBottom: "4rem" }}
    >
      <h6 className={`${styles.textTitle}`}>Plazos de abonos y retiros</h6>
      <p className={`${styles.subTitle}`}>Plazos asociados a retiros/depósitos de criptomonedas y monedas locales.</p>
      {activeTab === "abono-retiro" && (
        <div className="">
          <div className={styles.table}>
            <Table
              borderless
              className={styles.tableComissions}
              hover
              responsive="sm"
            >
              <thead>
                <tr>
                  <th className="">
                    {t("paymentMethod")}
                  </th>
                  <th className="">
                    {t("channel")}
                  </th>
                  <th className="">
                    {t("deposit")}
                  </th>
                  <th className="">
                    {t("withdrawal")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {abonoRetiroSelect.map((data, index) => (
                  <tr key={index}>
                    <td>{t(data.metodoPago)}</td>
                    <td>{t(data.canal)}</td>
                    <td>{t(data.abono)}</td>
                    <td>{t(data.retiro)}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          <div className={styles.table}>
            <Table
              borderless
              hover
              className={styles.tableComissions}
              responsive="sm"
            // className={`align-middle ${styles.tableComissions}`}
            // style={{ marginTop: "3rem" }}
            >
              <thead>
                <tr>
                  <th className="">
                    {t("coin")}
                  </th>
                  <th className="">
                    {t("network")}
                  </th>
                  <th className="">
                    {t("deposit")}
                  </th>
                  <th className="">
                    {t("withdrawal")}{" "}
                  </th>
                </tr>
              </thead>
              <tbody>
                {abonoRetiroCripto.map((data, index) => (
                  <tr key={index}>
                    <td>{data.moneda}</td>
                    <td>{data.redes}</td>
                    <td>{data.abono}</td>
                    <td>{data.retiro}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      )}

      {activeTab === "compra-venta" && (
        <div className={styles.table}>
          <Table
            borderless
            hover
            className={styles.tableComissions}
            // className={`align-middle mt-4 ${styles.tableComissions}`}
            responsive="sm"
          >
            <thead>
              <tr>
                <th className="">
                  {t("orderType")}
                </th>
                <th className="">
                  {t("commission")}
                </th>
                <th className="">
                  {t("description")}
                </th>
              </tr>
            </thead>
            <tbody>
              {ventaRetiroSelect.map((item, index) => (
                <tr key={index}>
                  <td>{t(item.tipoOrden)}</td>
                  <td>{t(item.comision)}</td>
                  <td>{t(item.descripcion)}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}

      {activeTab === "vista-trader" && (
        <div className={styles.table}>
          <Table
            borderless
            hover
            className={styles.tableComissions}
            // className={`align-middle mt-4 ${styles.tableComissions}`}
            responsive="sm"
          >
            <thead>
              <tr>
                <th className="">
                  {t("30-dayVolume")}
                </th>
                <th className="">
                  Taker
                </th>
                <th className="">
                  Maker
                </th>
              </tr>
            </thead>
            <tbody>
              {comisionSelect.map((item, index) => (
                <tr key={index}>
                  <td>{item.volumen}</td>
                  <td>{item.taker}</td>
                  <td>{item.maker}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default CommissionsComponent;
