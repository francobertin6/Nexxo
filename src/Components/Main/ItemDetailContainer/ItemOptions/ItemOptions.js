// import react/contexto
import { useState, useContext } from "react";
import { My_Context } from "../../../../context/My_context";

// import react-router

import { Link } from "react-router-dom";


const ItemOptions = ({name, onAdd, notification, id}) => {

    const contexto = useContext(My_Context);

    const { Duplicated_item } = contexto;

    const Handle_buy = () => {
        
        if(Duplicated_item === true){
            notification(true)
        }else{
            notification(false)
            onAdd();
        }

    }

    console.log(Duplicated_item)

    return(

        <div id="Count_container">

            <h6>{name}</h6>
        
            <Link to={Duplicated_item ? "/main/item/" + id : "/main/cart"}>
                <button id="Buy" onClick={Handle_buy}>Comprar</button>
            </Link>

        </div>
    
    )
}

export default ItemOptions;