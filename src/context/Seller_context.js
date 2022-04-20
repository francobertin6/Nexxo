
// import react
import { createContext, useState } from "react";

// exporta contexto a hijos
export const Seller_Context = createContext();

const { Provider  } = Seller_Context;

const Seller_provider = ({children}) => {

    const [SellerId, setSellerId] = useState();

    // pregunta si es una vendedor o no, primer consulta en el main

    const Is_a_sellerId = (value) => {
        setSellerId(value);
    }

    const contextValue = {
        SellerId,
        setSellerId
    };

    return(
        <Provider value={contextValue}>
            {children}
        </Provider>
    )

}

export default Seller_provider;