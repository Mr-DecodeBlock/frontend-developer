import React from "react";
import { useTranslation } from "react-i18next";

const P2pBlock = () => {
  const [t] = useTranslation();
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col col-4 text-center">
          <h3>{t("p2p_title", "Operaciones P2P")}</h3>
          <p>
            {t(
              "p2p_description",
              "Facilitamos las operaciones peer-to-peer (P2P) en nuestra plataforma, permitiéndote realizar transacciones directamente con otros usuarios sin intermediarios."
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default P2pBlock;
