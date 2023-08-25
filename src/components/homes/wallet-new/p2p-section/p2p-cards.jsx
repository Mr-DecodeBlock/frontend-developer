import { useContext } from "react";
import { SellBuyContext } from "./p2p-sell-buy-context";
import P2pCard from "./p2p-card";
import imageNumberOne from './../../../../../public/assets/img/p2p/number1.png';
import imageNumberTwo from './../../../../../public/assets/img/p2p/number2.png';
import imageNumberThree from './../../../../../public/assets/img/p2p/number3.png';

const P2pCards = () => {
  // Use Our SellBuyContext
  const { activeButton } = useContext(SellBuyContext);

  const p2pCardsInformation = [
    {
      type: "left",
      image: imageNumberOne,
      title: "Selecciona tu anuncio",
      paragraph:
        "Elija el anuncio con el precio y la forma de pago deseados. Ingrese la cantidad de su compra y el monto.",
    },
    {
      type: "left",
      image: imageNumberTwo,
      title: "Pagos bancarios completos",
      paragraph:
        "Complete sus pagos según la información proporcionada por el vendedor",
    },
    {
      type: "left",
      image: imageNumberThree,
      title: "Recibe tus monedas",
      paragraph:
        "Después de que el vendedor reciba el pago, liberará las monedas. Dirígete a la cuenta de fondos para revisar.",
    },
    {
      type: "right",
      image: imageNumberOne,
      title: "RSelecciona tu anuncio",
      paragraph:
        "Elija el anuncio con el precio y la forma de pago deseados. Ingrese la cantidad de su compra y el monto.",
    },
    {
      type: "right",
      image: imageNumberTwo,
      title: "Pagos bancarios completos",
      paragraph:
        "Complete sus pagos según la información proporcionada por el vendedor",
    },
    {
      type: "right",
      image: imageNumberThree,
      title: "Recibe tus monedas",
      paragraph:
        "Después de que el vendedor reciba el pago, liberará las monedas. Dirígete a la cuenta de fondos para revisar.",
    },
  ];

  return (
    <div className="container">
      <div className="row">
        {p2pCardsInformation
          .filter((card) => card.type === activeButton)
          .map((card, i) => {
            return (
              <div className="col-md-4 col-sm-12 d-flex" key={i}>
                <P2pCard {...card} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default P2pCards;
