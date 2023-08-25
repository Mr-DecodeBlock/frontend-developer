// export default CommissionsTables;
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Table, Dropdown, Nav, NavItem, NavLink } from 'react-bootstrap';


const Timelines = () => {
    const { t } = useTranslation();

    const data = [
        { moneda: 'Bitcoin', plazoAbono: '30 min, 24/7', plazoRetiro: '30 min, 24/7' },
        { moneda: 'Bitcoin Cash', plazoAbono: '10 min, 24/7', plazoRetiro: '45 min, 24/7' },
        { moneda: 'Ether', plazoAbono: '25 min, 24/7', plazoRetiro: '25 min, 24/7' },
        { moneda: 'Litecoin', plazoAbono: '25 min, 24/7', plazoRetiro: '25 min, 24/7' },
        { moneda: 'USD coin', plazoAbono: '10 min, 24/7', plazoRetiro: '45 min, 24/7' }
    ];

    const plazosPaises = [
        {
            name: "Chile",
            moneda: "Pesos Chilenos",
            data: [
                { medioPago: 'transfer', plazoAbono: '3 h, 24/7', plazoRetiro: '3 h' },
                { medioPago: 'Cheque o LBTR', plazoAbono: '48 h', plazoRetiro: '1 d' }
            ]
        },
        {
            name: "Argentina",
            moneda: "Pesos Argentinos",
            data: [
                { medioPago: 'transfer', plazoAbono: '3 h', plazoRetiro: '3 h' }
            ]
        },
        {
            name: "Colombia",
            moneda: "Pesos Colombianos",
            data: [
                { medioPago: 'Tpaga', plazoAbono: '10 min, 24/7', plazoRetiro: '3 h' },
                { medioPago: 'Transferencia ACH', plazoAbono: '2 d', plazoRetiro: '1 d' }
            ]
        },
        {
            name: "Peru",
            moneda: "Soles Peruanos",
            data: [
                { medioPago: 'transfer', plazoAbono: '2 d', plazoRetiro: '1 d' },
            ]
        },
        {
            name: "Mexico",
            moneda: "Pesos Mexicanos",
            data: [
                { medioPago: 'Tpaga', plazoAbono: '10 min, 24/7', plazoRetiro: '3 h' },
                { medioPago: 'Ether', plazoAbono: '2 d', plazoRetiro: '1 d' }
            ]
        }
    ]

    const info = {
        title: "commisionsTimelinestitle",
        des: "commisionsTimelinesdes",
        list: [
            "commisionsTimelineslistItem1",
            "commisionsTimelineslistItem2",
            "commisionsTimelineslistItem3",
            "commisionsTimelineslistItem4"
        ],
        des2: "commisionsTimelinesdes2",
        des3: "commisionsTimelinesdes3",
        list2: [
            "commisionsTimelineslist2Item1",
            "commisionsTimelineslist2Item2"
        ],
        des4: "commisionsTimelinesdes4",
        des5: "commisionsTimelinesdes5",
        list3: [
            "commisionsTimelineslist3Item1",
            "commisionsTimelineslist3Item2",
            "commisionsTimelineslist3Item3"
        ],
        des6: "commisionsTimelinesdes6"
    }

    return (
        <div className="container" style={{ marginTop: "4rem", marginBottom: "4rem" }}>

            <h3 className="text-center">{t("depositWithdrawalDeadlines")}</h3>
            <p className="text-center mb-4">{t("DeadlinesAssociated")}</p>

            <Table borderless hover className="align-middle" responsive="sm" style={{ marginTop: "3rem" }}>
                <thead>
                    <tr>
                        <th className="align-middle tp-testimonial-five-wrapper text-white">{t("coin")}</th>
                        <th className="align-middle tp-testimonial-five-wrapper text-white">{t("depositTimeframe")}</th>
                        <th className="align-middle tp-testimonial-five-wrapper text-white">{t("withdrawalTimeframe")}</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.moneda}</td>
                            <td>{item.plazoAbono}</td>
                            <td>{item.plazoRetiro}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>


            <hr />


            <div className="mt-4 table-responsive mb-55">
                {plazosPaises.map((pais, index) => (
                    <div className="mt-4 table-responsive" key={index}>

                        <h4 className='text-center'>{pais.name} : {pais.moneda} </h4>

                        <Table borderless hover className="align-middle" responsive="sm" style={{ marginTop: "3rem" }}>
                            <thead>
                                <tr>
                                    <th className="align-middle tp-testimonial-five-wrapper text-white">{t("paymentMethod")}</th>
                                    <th className="align-middle tp-testimonial-five-wrapper text-white">{t("depositTimeframe")}</th>
                                    <th className="align-middle tp-testimonial-five-wrapper text-white">{t("withdrawalTimeframe")}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pais.data.map((item, index) => (
                                    <tr key={index}>
                                        <td>{t(item.medioPago)}</td>
                                        <td>{t(item.plazoAbono)}</td>
                                        <td>{item.plazoRetiro}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        <hr />
                    </div>
                ))}
            </div>

            <div className="sv-details-text-2">
                <h4 className="sv-details-text-title text-center">{t(info.title)}</h4>
                <p>{t(info.des)}</p>
            </div>
            <div className="sv-details-text mb-35">
                <ul>
                    {info.list.map((item, i) => <li key={i} className='pl-35'> <i className="fal fa-check"></i> <p> {t(item)} </p> </li>)}
                </ul>
            </div>
            <div className="sv-details-text-2">
                <p>{t(info.des2)}</p>
            </div>
            <div className="sv-details-text-2">
                <p>{t(info.des3)}</p>
            </div>

            <div className="sv-details-text mb-35">
                <ul>
                    {info.list2.map((item, i) => <li key={i} className='pl-35'> <i className="fal fa-check"></i> <p> {t(item)} </p> </li>)}
                </ul>
            </div>

            <div className="sv-details-text-2">
                <p>{t(info.des4)}</p>
            </div>
            <div className="sv-details-text-2">
                <p>{t(info.des5)}</p>
            </div>

            <div className="sv-details-text mb-35">
                <ul>
                    {info.list3.map((item, i) => <li key={i} className='pl-35'> <i className="fal fa-check"></i> <p> {t(item)} </p> </li>)}
                </ul>
            </div>

            <div className="sv-details-text-2">
                <p>{t(info.des6)}</p>
            </div>

        </div>
    );
};

export default Timelines;
