// export default CommissionsTables;
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Table, Dropdown, Nav, NavItem, NavLink } from 'react-bootstrap';
import { paises, abonoRetiroTrans, compraVenta, comisiones, abonoRetiroCripto } from "../../data/commission-data"


const CommissionsComponent = () => {
    const [countrySelect, setCountrySelect] = useState("");
    const [coin, setCoin] = useState("");
    const [abonoRetiroSelect, setAbonoRetiroSelect] = useState([]);
    const [ventaRetiroSelect, setVentaRetiroSelect] = useState([]);
    const [comisionSelect, setComisionSelect] = useState([]);
    const [activeTab, setActiveTab] = useState("abono-retiro");
    const {t} = useTranslation();

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

    const navLinkStyle = {
        fontWeight: 600,
        color: "#5f6368",
      };

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
        <div className="container" style={{ marginTop: "4rem", marginBottom: "4rem" }}>
            <h1 className="text-center">{t("commissionsTablesTitle")}</h1>
            <p className="text-center mb-4">{t("commissionsTablesSubTitle")}</p>

            <Nav variant="tabs" defaultActiveKey="abono-retiro" className=" d-flex flex-row" fill justify>
                <NavItem>
                    <NavLink eventKey="abono-retiro" onClick={() => handleTabChange("abono-retiro")} style={navLinkStyle}>
                        {t("depositWithdrawal")}
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink eventKey="compra-venta" onClick={() => handleTabChange("compra-venta")} style={navLinkStyle}>
                        {t("buySell")}
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink eventKey="vista-trader" onClick={() => handleTabChange("vista-trader")} style={navLinkStyle}>
                        {t("viewtrader")}
                    </NavLink>
                </NavItem>
            </Nav>

            {activeTab === "abono-retiro" && (
                <div className="mb-4">
                    <div className="d-flex flex-wrap align-items-center" style={{ marginTop: "4rem" }}>
                        <h5 className="me-4">{t("depositWithdrawal")} {countrySelect}</h5>
                        {paises.map((pais, index) => (
                            <a
                                key={index}
                                className="tp-btn-orange tp-btn-hover alt-color-white me-2 mb-2"
                                onClick={() => handleSelect(pais.nombre)}
                            >
                                {pais.nombre}
                            </a>
                        ))}
                    </div>
                    <div className="mt-4 table-responsive">
                        <Table borderless hover className="align-middle" responsive="sm" style={{ marginTop: "3rem" }}>
                            <thead>
                                <tr>
                                    <th className="align-middle tp-testimonial-five-wrapper text-white">{t("paymentMethod")}</th>
                                    <th className="align-middle tp-testimonial-five-wrapper text-white">{t("channel")}</th>
                                    <th className="align-middle tp-testimonial-five-wrapper text-white">{t("deposit")}</th>
                                    <th className="align-middle tp-testimonial-five-wrapper text-white">{t("withdrawal")}</th>
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
                    <div className="mt-4 table-responsive">
                        <Table borderless hover className="align-middle" style={{ marginTop: "3rem" }}>
                            <thead>
                                <tr>
                                    <th className="align-middle tp-testimonial-five-wrapper text-white">{t("coin")}</th>
                                    <th className="align-middle tp-testimonial-five-wrapper text-white">{t("network")}</th>
                                    <th className="align-middle tp-testimonial-five-wrapper text-white">{t("deposit")}</th>
                                    <th className="align-middle tp-testimonial-five-wrapper text-white">{t("withdrawal")} </th>
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
                <div className="mb-4">
                    <div className="d-flex flex-wrap align-items-center" style={{ marginTop: "4rem" }}>
                    <h5 className="me-4">{t("depositWithdrawal")} {countrySelect}</h5>
                        {paises.map((pais, index) => (
                            <a
                                key={index}
                                className="tp-btn-orange tp-btn-hover alt-color-white me-2 mb-2"
                                onClick={() => handleSelect(pais.nombre)}
                            >
                                {pais.nombre}
                            </a>
                        ))}
                    </div>
                    <Table borderless hover className="align-middle mt-4" responsive="sm">
                        <thead>
                            <tr>
                                <th className="align-middle tp-testimonial-five-wrapper text-white">{t("orderType")}</th>
                                <th className="align-middle tp-testimonial-five-wrapper text-white">{t("commission")}</th>
                                <th className="align-middle tp-testimonial-five-wrapper text-white">{t("description")}</th>
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
                <div style={{marginTop: "3rem"}}>
                    <div className='d-flex align-items-center'>
                        <h5 className="me-2"> {t("commissionFor")} : {countrySelect} / {coin} </h5>
                        <Dropdown drop="down">
                            <Dropdown.Toggle className='tp-testimonial-five-wrapper' style={{ padding: ".5rem", border: "solid 1px #E6A117", borderRadius: "16px" }} >
                                {t("commission")}
                            </Dropdown.Toggle>

                            <Dropdown.Menu style={{ maxHeight: "130px", overflowY: "auto" }}>
                                {paises.map((pais) => (
                                    abonoRetiroCripto.map((moneda, index) => (
                                        <Dropdown.Item onClick={() => dropdownSelect(moneda.moneda, pais.nombre)} key={index}>
                                            {`${moneda.moneda} / ${pais.nombre}`}
                                        </Dropdown.Item>
                                    ))
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>

                    <Table style={{ marginTop: "4rem" }}>
                        <thead>
                            <tr>
                                <th className="align-middle tp-testimonial-five-wrapper text-white">{t("30-dayVolume")}</th>
                                <th className="align-middle tp-testimonial-five-wrapper text-white">Taker</th>
                                <th className="align-middle tp-testimonial-five-wrapper text-white">Maker</th>
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
