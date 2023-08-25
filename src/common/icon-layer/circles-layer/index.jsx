import Link from 'next/link';
import Image from 'next/image';

// Import styles
import styles from "./styles.module.css";

import Breadcrumb from 'react-bootstrap/Breadcrumb';

export function CirclesLayer({ children }) {

    return (
        <>
            <div className={`container-fluid g-0 px-0 ${styles.principalBackground}`}>
                {children}
            </div>
        </>
    )
}
