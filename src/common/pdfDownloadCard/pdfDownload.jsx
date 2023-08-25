import Image from "next/image"
import React from "react"
import { useTranslation } from "react-i18next"
import PDFimage from '../../../public/assets/img/documentation/pdfImage.svg'
import styles from './pdfDownload.module.css'

const PDFDownloadCard = ({ description }) => {
    const { t } = useTranslation()
    return (
        <div className={styles.card}>
            <div className={styles.imgContainer}><Image src={PDFimage} alt="pdfImage" className={styles.img}/></div>
            <div className={styles.text}>
                <p>{description}</p>
                <span>{t('dounloadPDF')}</span>
            </div>
        </div>
    )
}
export default PDFDownloadCard