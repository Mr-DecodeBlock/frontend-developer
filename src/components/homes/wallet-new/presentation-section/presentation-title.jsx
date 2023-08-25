import React from 'react'
import styles from './presentation-title.module.scss';

const PresentationTitle = ({title}) => {
  return (
    <h2 className={styles['presentation__title']}>{title}</h2>
  )
}

export default PresentationTitle
