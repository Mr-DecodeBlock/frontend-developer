import { LinkItemBlock } from "./LinkItemBlock";

import styles from "./styles.module.scss";

const serviceItems = [
  {
    route: "/",
    name: "footer.nodesAndNetworks",
  },
  {
    route: "/",
    name: "footer.EVM",
  },
  {
    route: "/",
    name: "footer.stalking",
  },
  {
    route: "/",
    name: "footer.architecture",
  },
  {
    route: "/",
    name: "footer.security",
  },
  {
    route: "/",
    name: "footer.developmentProgram",
  },
];

export const ServiceBlock = () => {
  return (
    <>
      <div className={styles.items}>
        {serviceItems.map((service, index) => (
          <LinkItemBlock
            key={index}
            route={service.route}
            name={service.name}
            keyword="Blockchain"
          />
        ))}
      </div>
    </>
  );
};
