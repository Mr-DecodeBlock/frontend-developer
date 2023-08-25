

import Image from 'next/image';
import styles from './styles.module.css'


export default function CardRevolutionCommerce ({image, title, description}) {
    return (
      <div className={styles.container}>
        <div className={styles.divNumber}>
          <Image src={image} alt="image"/>
        </div>
        <div className={styles.texts}>
            <span>{title}</span>
            <p>{description}</p>
        </div>
      </div>
    );
  };
  