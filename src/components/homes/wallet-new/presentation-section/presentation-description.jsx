import React from 'react'
import styles from './presentation-description.module.scss';

const PresentationDescription = ({description}) => {
  return (
    <p className={styles['presentation__description']}>
        {description}
    </p>
  )
}

export default PresentationDescription
