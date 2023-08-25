import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

// @Components
import { ServiceBlock } from "./ServiceBlock";
import { WalletBlock } from "./WalletBlock";

// @Styles
import styles from "./styles.module.scss";

export function Links() {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <>
      <div className={styles.leftContainer}>
        {/* services block */}
        <ServiceBlock />
      </div>
    </>
  );
}
