import { CardComponent } from "@/src/common/cardComponent/cardComponent";
import styles from './cardContainer.module.css'
import { useTranslation } from "react-i18next";
import PDFDownloadCard from "@/src/common/pdfDownloadCard/pdfDownload";

export function Card() {
    const { t } = useTranslation()
    return (
        <div className={styles.container}>
            <CardComponent text={(
                <div className={styles.text}>
                    <div className={styles.marginToptop}>
                        <h5>{t('regulationsAndLicences.card.h51')}</h5>
                        <p>{t('regulationsAndLicences.card.p1')}</p>
                        <p>{t('regulationsAndLicences.card.p2')}</p>
                        <p>{t('regulationsAndLicences.card.p3')}</p>
                        <p>{t('regulationsAndLicences.card.p4')}<span>{t('regulationsAndLicences.card.span1')}</span></p>
                    </div>
                    <div className={styles.largeCard}>
                        <div className={styles.largeCardText1}>
                            <p>{t('regulationsAndLicences.card.largeCard.p1')}</p>
                            <p>{t('regulationsAndLicences.card.largeCard.p2')}</p>
                            <p>{t('regulationsAndLicences.card.largeCard.p3')}</p>
                        </div>
                        <div className={styles.cardLine}></div>
                        <div className={styles.largeCardText2}>
                            <p>{t('regulationsAndLicences.card.largeCard.p4')}</p>
                            <p>{t('regulationsAndLicences.card.largeCard.p5')}</p>
                            <p>{t('regulationsAndLicences.card.largeCard.p6')}</p>
                        </div>
                        <div className={styles.cardLine}></div>
                        <div className={styles.largeCardText3}>
                            <p>{t('regulationsAndLicences.card.largeCard.p7')}</p>
                            <p>{t('regulationsAndLicences.card.largeCard.p8')}</p>
                            <p>{t('regulationsAndLicences.card.largeCard.p9')}</p>
                        </div>
                    </div>
                    <div className={styles.marginTop}>
                        <h5>{t('regulationsAndLicences.card.h52')}</h5>
                        <p>{t('regulationsAndLicences.card.p5')}<span>{t('regulationsAndLicences.card.span2')}</span></p>
                        <p>{t('regulationsAndLicences.card.p6')}</p>
                    </div>
                    <div className={styles.marginTop}>
                        <h5>{t('regulationsAndLicences.card.h53')}</h5>
                        <p>{t('regulationsAndLicences.card.p7')}</p>
                        <p>{t('regulationsAndLicences.card.p8')}</p>
                        <p>{t('regulationsAndLicences.card.p9')}<span>{t('regulationsAndLicences.card.span3')}</span>{t('regulationsAndLicences.card.p10')}<span>{t('regulationsAndLicences.card.span4')}</span></p>
                    </div>
                    <div className={styles.marginTop}>
                        <h5>{t('regulationsAndLicences.card.h54')}</h5>
                        <p>{t('regulationsAndLicences.card.p11')}</p>
                        <p>{t('regulationsAndLicences.card.p12')}<span>{t('regulationsAndLicences.card.span5')}</span></p>
                    </div>
                    <div className={styles.marginTop}>
                        <h5>{t('regulationsAndLicences.card.h55')}</h5>
                        <p>{t('regulationsAndLicences.card.p13')}<span>{t('regulationsAndLicences.card.span6')}</span></p>
                    </div>
                    <div className={styles.marginTop}>
                        <h5>{t('regulationsAndLicences.card.h56')}</h5>
                        <p>{t('regulationsAndLicences.card.p14')}</p>
                    </div>
                    <div className={styles.marginTop}>
                        <h5>{t('regulationsAndLicences.card.h57')}</h5>
                        <p>{t('regulationsAndLicences.card.p15')}</p>
                    </div>
                    <div className={`${styles.tableBorder} ${styles.marginTop}`}>
                        <div className={styles.tableTitle}>{t('regulationsAndLicences.card.table1.title')}</div>
                        <div className={styles.tableContent}>
                            <div className={styles.tableItems}>
                                <div className={styles.tableColumn1}>
                                    <h6>{t('regulationsAndLicences.card.table1.itemTitle1')}</h6>
                                </div>
                                <div className={styles.tableColumn2}>
                                    <p>{t('regulationsAndLicences.card.table1.itemDescription1')}<span>{t('regulationsAndLicences.card.table1.span1')}</span></p>
                                </div>
                            </div>
                            <div className={styles.tableItems}>
                                <div className={styles.tableColumn1}>
                                    <h6>{t('regulationsAndLicences.card.table1.itemTitle2')}</h6>
                                </div>
                                <div className={styles.tableColumn2}>
                                    <p>{t('regulationsAndLicences.card.table1.itemDescription2a')}<span>{t('regulationsAndLicences.card.table1.span2')}</span>{t('regulationsAndLicences.card.table1.itemDescription2b')}<span>{t('regulationsAndLicences.card.table1.span3')}</span>{t('regulationsAndLicences.card.table1.itemDescription2c')}</p>
                                </div>
                            </div>
                            <div className={styles.tableItems}>
                                <div className={styles.tableColumn1}>
                                    <h6>{t('regulationsAndLicences.card.table1.itemTitle3')}</h6>
                                </div>
                                <div className={styles.tableColumn2}>
                                    <p>{t('regulationsAndLicences.card.table1.itemDescription3')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.tableBorder}>
                        <div className={styles.tableTitle}>{t('regulationsAndLicences.card.table2.title')}</div>
                        <div className={styles.tableContent}>
                            <div className={styles.tableItems}>
                                <div className={styles.tableColumn1}>
                                    <h6>{t('regulationsAndLicences.card.table2.itemTitle1')}</h6>
                                </div>
                                <div className={styles.tableColumn2}>
                                    <p>{t('regulationsAndLicences.card.table2.itemDescription1')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.tableBorder}>
                        <div className={styles.tableTitle}>{t('regulationsAndLicences.card.table3.title')}</div>
                        <div className={styles.tableContent}>
                            <div className={styles.tableItems}>
                                <div className={styles.tableColumn1}>
                                    <h6>{t('regulationsAndLicences.card.table3.itemTitle1')}</h6>
                                </div>
                                <div className={styles.tableColumn2}>
                                    <p>{t('regulationsAndLicences.card.table3.itemDescription1a')}<span>{t('regulationsAndLicences.card.table3.span1')}</span>{t('regulationsAndLicences.card.table3.itemDescription1b')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.tableBorder}>
                        <div className={styles.tableTitle}>{t('regulationsAndLicences.card.table4.title')}</div>
                        <div className={styles.tableContent}>
                            <div className={styles.tableItems}>
                                <div className={styles.tableColumn1}>
                                    <h6>{t('regulationsAndLicences.card.table4.itemTitle1')}</h6>
                                </div>
                                <div className={styles.tableColumn2}>
                                    <p>{t('regulationsAndLicences.card.table4.itemDescription1')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.marginTop}>
                        <h4>{t('regulationsAndLicences.card.h41')}</h4>
                        <h5>{t('regulationsAndLicences.card.h58')}</h5>
                        <p>{t('regulationsAndLicences.card.p16')}</p>
                        <ul>
                            <li>{t('regulationsAndLicences.card.li1')}
                                <ul>
                                    <li>{t('regulationsAndLicences.card.li1a')}</li>
                                    <li>{t('regulationsAndLicences.card.li1b')}</li>
                                    <li>{t('regulationsAndLicences.card.li1c')}</li>
                                    <li>{t('regulationsAndLicences.card.li1d')}</li>
                                    <li>{t('regulationsAndLicences.card.li1e')}</li>
                                    <li>{t('regulationsAndLicences.card.li1f')}</li>
                                    <li>{t('regulationsAndLicences.card.li1g')}</li>
                                    <li>{t('regulationsAndLicences.card.li1h')}</li>
                                    <li>{t('regulationsAndLicences.card.li1i')}</li>
                                </ul>
                            </li>
                            <li>{t('regulationsAndLicences.card.li2')}
                                <ul>
                                    <li>{t('regulationsAndLicences.card.li2a')}</li>
                                    <li>{t('regulationsAndLicences.card.li2b')}</li>
                                    <li>{t('regulationsAndLicences.card.li2c')}</li>
                                </ul>
                            </li>
                            <li>{t('regulationsAndLicences.card.li3')}</li>
                            <li>{t('regulationsAndLicences.card.li4')}</li>
                            <li>{t('regulationsAndLicences.card.li5')}</li>
                        </ul>
                        <p>{t('regulationsAndLicences.card.p17')}<span>{t('regulationsAndLicences.card.span7')}</span></p>
                    </div>
                    <div className={styles.marginTop}>
                        <h5>{t('regulationsAndLicences.card.h59')}</h5>
                        <div className={styles.pdfCardsContainer}>
                            <PDFDownloadCard description={t('regulationsAndLicences.card.pdf.descriptionCard1')} />
                            <PDFDownloadCard description={t('regulationsAndLicences.card.pdf.descriptionCard2')} />
                        </div>
                    </div>
                    <div className={styles.marginTop}>
                        <h5>{t('regulationsAndLicences.card.h510')}</h5>
                        <div className={styles.pdfCardsContainer}>
                            <PDFDownloadCard description={t('regulationsAndLicences.card.pdf.descriptionCard3')} />
                            <PDFDownloadCard description={t('regulationsAndLicences.card.pdf.descriptionCard4')} />
                            <PDFDownloadCard description={t('regulationsAndLicences.card.pdf.descriptionCard5')} />
                        </div>
                    </div>
                    <div className={styles.marginTop}>
                        <h5>{t('regulationsAndLicences.card.h511')}</h5>
                        <div className={styles.pdfCardsContainer}>
                            <PDFDownloadCard description={t('regulationsAndLicences.card.pdf.descriptionCard6')} />
                            <PDFDownloadCard description={t('regulationsAndLicences.card.pdf.descriptionCard7')} />
                        </div>
                    </div>
                    <div className={styles.marginTop}>
                        <h4>{t('regulationsAndLicences.card.h42')}</h4>
                        <h5>{t('regulationsAndLicences.card.h512')}</h5>
                        <p>{t('regulationsAndLicences.card.p18')}</p>
                        <p>{t('regulationsAndLicences.card.p19')}</p>
                        <p>{t('regulationsAndLicences.card.p20')}</p>
                        <p>{t('regulationsAndLicences.card.p21')}</p>
                    </div>
                    <div className={styles.marginTop}>
                        <h5>{t('regulationsAndLicences.card.h513')}</h5>
                        <p>{t('regulationsAndLicences.card.p22')}</p>
                        <p>{t('regulationsAndLicences.card.p23')}</p>
                        <p>{t('regulationsAndLicences.card.p24')}</p>
                        <p>{t('regulationsAndLicences.card.p25')}</p>
                    </div>
                    <div className={styles.marginTop}>
                        <h5>{t('regulationsAndLicences.card.h514')}</h5>
                        <p>{t('regulationsAndLicences.card.p26')}</p>
                        <div className={styles.pdfCardsContainer}>
                            <PDFDownloadCard description={t('regulationsAndLicences.card.pdf.descriptionCard8')} />
                            <PDFDownloadCard description={t('regulationsAndLicences.card.pdf.descriptionCard9')} />
                        </div>
                    </div>
                    <div className={styles.marginTop}>
                        <h5>{t('regulationsAndLicences.card.h515')}</h5>
                        <div className={styles.pdfCardsContainer}>
                            <PDFDownloadCard description={t('regulationsAndLicences.card.pdf.descriptionCard10')} />
                        </div>
                    </div>
                    <div className={styles.marginTop}>
                        <h5>{t('regulationsAndLicences.card.h516')}</h5>
                        <p>{t('regulationsAndLicences.card.p27')}</p>
                    </div>
                    <div className={styles.marginTop}>
                        <h5>{t('regulationsAndLicences.card.h517')}</h5>
                        <p>{t('regulationsAndLicences.card.p28')}</p>
                    </div>
                    <div className={styles.marginTop}>
                        <h5>{t('regulationsAndLicences.card.h518')}</h5>
                        <p>{t('regulationsAndLicences.card.p29')}</p>
                    </div>
                    <div className={styles.marginTop}>
                        <h5>{t('regulationsAndLicences.card.h519')}</h5>
                        <div className={styles.pdfCardsContainer}>
                            <PDFDownloadCard description={t('regulationsAndLicences.card.pdf.descriptionCard11')} />
                        </div>
                    </div>
                    <div className={styles.marginTop}>
                        <h5>{t('regulationsAndLicences.card.h520')}</h5>
                        <p>{t('regulationsAndLicences.card.p30')}</p>
                    </div>
                </div>
            )} />
        </div>
    )
}

