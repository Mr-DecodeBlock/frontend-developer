import React from 'react'
import styles from './styles.module.css'

export function CircleAnimation() {
    return (
        <div className={styles.container}>
            <div className={styles.firstCircle} />
            <div className={styles.secondCircle} />
            <div className={styles.thirdCircle} />
            <div className={styles.fourthCircle} />
            <div className={styles.fifthCircle} />
        </div>
    )
}