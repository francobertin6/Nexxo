
// import react
import { createContext, useState } from "react";

// exporta contexto a hijos
export const Seller_Context = createContext();

const { Provider  } = Seller_Context;

const Seller_provider = ({children}) => {

    const [SellerId, setSellerId] = useState();
    const [extraServices, setextraServices] = useState(JSON.parse(localStorage.getItem("extraServices")));

    // pregunta si es una vendedor o no, primer consulta en el main

    const Is_a_sellerId = (value) => {
        setSellerId(value);
    }

    // pregunta extraServices

    const getExtraservices = (value) => {

        if(extraServices === null){
            setextraServices([value]);
            localStorage.setItem("extraServices", JSON.stringify([value]));
        }else{
            setextraServices([...extraServices, value]);
            localStorage.setItem("extraServices", JSON.stringify([...extraServices, value]));
        }
        
    }

    const contextValue = {
        SellerId,
        setSellerId,
        extraServices,
        getExtraservices
    };

    return(
        <Provider value={contextValue}>
            {children}
        </Provider>
    )

}

export default Seller_provider;