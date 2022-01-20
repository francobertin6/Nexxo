// import context
import { useContext } from "react";
import { My_Context } from "../../../context/My_context";

// import react_router
import { Link } from "react-router-dom";


const WidgetCart = () => {

    const contexto = useContext(My_Context);

    const { Item } = contexto;

    return(
        <div className="icon_img">
            <Link to="/cart">{Item.length !== 0 ? <img src= "images/carrito-de-compras-lleno.png" alt="imagen"/> : <img src= "images/carrito-de-compras-vacio.png" alt="imagen"/>}</Link>
            <div><p>{Item.length}</p></div>
        </div>
    )
}

export default WidgetCart;