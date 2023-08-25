import React from 'react'
import styles from './presentation-pretitle.module.scss';

const PresentationPreTitlte = ({pretitle}) => {
  return (
    <h5 className={styles['presentation__pretitle']}>
      {pretitle}
    </h5>
  )
}

export default PresentationPreTitlte
