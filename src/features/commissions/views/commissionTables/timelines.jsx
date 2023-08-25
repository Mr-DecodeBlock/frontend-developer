// export default CommissionsTables;
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Table, Dropdown, Nav, NavItem, NavLink } from 'react-bootstrap';
import styles from './commissions.module.css'

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
        <div className="container">

            {/* <h3 className={`${styles.textTitle}`}>{t("depositWithdrawalDeadlines")}</h3>
            <p className={`${styles.subTitle}`}>{t("DeadlinesAssociated")}</p>

            <Table borderless hover className={`align-middle ${styles.tableComissions}`} responsive="sm" style={{ marginTop: "3rem" }}>
                <thead>
                    <tr>
                        <th className="">{t("coin")}</th>
                        <th className="">{t("depositTimeframe")}</th>
                        <th className="">{t("withdrawalTimeframe")}</th>
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
            </Table> */}


            <div className={styles.timelines}>
                {plazosPaises.map((pais, index) => (
                    <div className="" key={index} style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>

                        <h4 className={`${styles.textTitle}`}>{pais.name} : {pais.moneda} </h4>

                        <div className={styles.table}>
                            <Table borderless hover className={`${styles.tableComissions}`} responsive="sm" >
                                <thead>
                                    <tr>
                                        <th className="">{t("paymentMethod")}</th>
                                        <th className="">{t("depositTimeframe")}</th>
                                        <th className="">{t("withdrawalTimeframe")}</th>
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
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.timelinesText}>
                <h6 className={`sv-details-text-title text-white ${styles.textTitle}`}>{t(info.title)}</h6>
                <p className='text-white'>{t(info.des)}</p>
                <div className="sv-details-text mb-35 text-white">
                    <ul>
                        {info.list.map((item, i) => <li key={i} className='pl-35'> <i className="fal fa-circle text-white"></i> <p className='text-white'> {t(item)} </p > </li>)}
                    </ul>
                </div>
                <div className="sv-details-text-2">
                    <p className='text-white'>{t(info.des2)}</p>
                </div>
                <div className="sv-details-text-2">
                    <p className='text-white'>{t(info.des3)}</p>
                </div>

                <div className="sv-details-text mb-35">
                    <ul>
                        {info.list2.map((item, i) => <li key={i} className='pl-35'> <i className="fal fa-circle text-white"></i> <p className='text-white'> {t(item)} </p> </li>)}
                    </ul>
                </div>

                <div className="sv-details-text-2">
                    <p className='text-white'>{t(info.des4)}</p>
                </div>
                <div className="sv-details-text-2">
                    <p className='text-white'>{t(info.des5)}</p>
                </div>

                <div className="sv-details-text mb-35">
                    <ul>
                        {info.list3.map((item, i) => <li key={i} className='pl-35'> <i className="fal fa-circle text-white"></i> <p className='text-white'> {t(item)} </p> </li>)}
                    </ul>
                </div>

                <div className="sv-details-text-2">
                    <p className='text-white'>{t(info.des6)}</p>
                </div>

            </div>
        </div>
    );
};

export default Timelines;
