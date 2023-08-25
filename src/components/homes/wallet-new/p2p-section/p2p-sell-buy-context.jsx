import { createContext, useState } from "react";

// Creando el contexto
export const SellBuyContext = createContext();

// Proveedor de contexto
export const P2pSellBuyContext = ({ children }) => {
    const [activeButton, setActiveButton] = useState('left');

    return (
        <SellBuyContext.Provider value={{activeButton, setActiveButton}}>
            {children}
        </SellBuyContext.Provider>
    );
};