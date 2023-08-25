import { LinkItemBlock } from "./LinkItemBlock";

import styles from "./styles.module.scss";

const resourceItems = [
  {
    route: "/privacy-policies",
    name: "Políticas de Privacidad",
  },
  {
    route: "/privacy-policies",
    name: "Términos de Uso",
  },
  {
    route: "/privacy-policies",
    name: "Políticas de  cookies",
  },
  {
    route: "/",
    name: "footer.aboutUs",
  },
  {
    route: "/privacy-policies",
    name: "footer.contactUs",
  },
];

export const ResourceBlock = () => {
  return (
    <>
      <div className={styles.items}>
        {resourceItems.map((resource, index) => (
          <LinkItemBlock
            key={index}
            route={resource.route}
            name={resource.name}
          />
        ))}
        <br />
      </div>
    </>
  );
};
