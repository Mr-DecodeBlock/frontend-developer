import { useContext } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames/bind";
import styles from "./p2p-sell-buy.module.scss";
import { SellBuyContext } from "./p2p-sell-buy-context";

const P2pSellBuy = () => {
  // Use Our SellBuyContext
  const { activeButton, setActiveButton } = useContext(SellBuyContext);
  
  // load translation hook
  const [t] = useTranslation();

  // Bind component with scss classes
  const cx = classNames.bind(styles);

  // Prepare left and rigth classes for the buttons
  console.log(activeButton)
  const leftButton = cx("left-button", { active: activeButton === "left" });
  const rightButton = cx("right-button", { active: activeButton === "right" });

  const handleSetActiveButton = (button_side) => {
    setActiveButton(button_side);
  };

  return (
    <div className="container">
      <div className="row justify-content-center gap-0 gx-0">
        <div className="col col-2 d-flex justify-content-end">
          <button
            className={leftButton}
            onClick={() => handleSetActiveButton("left")}
          >
            {t("p2p_sellButton", "Para vender")}
          </button>
        </div>
        <div className="col col-2">
          <button
            className={rightButton}
            onClick={() => handleSetActiveButton("right")}
          >
            {t("p2p_sellButton", "Para Comprar")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default P2pSellBuy;
