import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

import { LinkItemBlock } from "./LinkItemBlock";

import styles from "./styles.module.scss";

const walletItems = [
  {
    route: "/wallet",
    name: "footer.exchange",
  },
  {
    route: "/wallet",
    name: "footer.investment",
  },
  {
    route: "/wallet",
    name: "footer.custodyAndSecurity",
  },
];

export const WalletBlock = () => {
  return (
    <>
      <div className={styles.items}>
        {walletItems.map((walletItem, index) => (
          <LinkItemBlock
            key={index}
            route={walletItem.route}
            name={walletItem.name}
          />
        ))}
      </div>
    </>
  );
};
