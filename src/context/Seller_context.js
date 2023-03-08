
// import react
import { createContext, useState } from "react";

// exporta contexto a hijos
export const Seller_Context = createContext();

const { Provider  } = Seller_Context;

const Seller_provider = ({children}) => {

    const [SellerId, setSellerId] = useState();
    const [extraServices, setextraServices] = useState(JSON.parse(localStorage.getItem("extraServices")));
    // packageLockOut de /pricing/packages

    var packageLockOutValue;
    if(JSON.parse(localStorage.getItem("packageLockOut")) === null){
        packageLockOutValue = false;
    }else{
        packageLockOutValue = JSON.parse(localStorage.getItem("packageLockOut"));
    }

    const [ContextPackageLockOut, setContextPackageLockOut] = useState(packageLockOutValue);

    // pregunta si es una vendedor o no, primer consulta en el main

    const Is_a_sellerId = (value) => {
        setSellerId(value);
    }

    // pregunta si packageLockOut es false o true

    const isContextPackageLockOut = (value) => {

        console.log("isContextPackageLockOut = ", ContextPackageLockOut);

        setContextPackageLockOut(value);
        localStorage.setItem("packageLockOut", JSON.stringify(value))

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
        getExtraservices,
        ContextPackageLockOut,
        isContextPackageLockOut
    };

    return(
        <Provider value={contextValue}>
            {children}
        </Provider>
    )

}

export default Seller_provider;