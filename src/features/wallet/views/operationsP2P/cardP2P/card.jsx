

import styles from './styles.module.css'


export default function CardOperationsP2P ({data}) {
    return (
      <div className={styles.container}>
        <div className={styles.divNumber}>
          <span>{data.number}</span>
        </div>
        <div className={styles.texts}>
          <div className={styles.title}>
            <span>{data.title}</span>
          </div>
          <div className={styles.description}>
            <p>{data.description}</p>
          </div>
        </div>
      </div>
    );
  };
  