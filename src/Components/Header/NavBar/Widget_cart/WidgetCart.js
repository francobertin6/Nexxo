// import context
import { useContext } from "react";
import { My_Context } from "../../../../context/My_context";

// import react_router
import { Link } from "react-router-dom";


const WidgetCart = () => {

    const contexto = useContext(My_Context);

    const { Item } = contexto;

    return(
        
        <Link to="/cart">{Item.length !== 0 ? <img src= "images/carrito-de-compras-lleno.png" alt="imagen"/> : <img src= "images/carrito-de-compras-vacio.png" alt="imagen"/>}</Link>

    )
}

export default WidgetCart;