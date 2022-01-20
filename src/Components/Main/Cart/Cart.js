
// import react/contexto

import { useContext } from "react";
import { My_Context } from "../../../context/My_context";

// import react-router
import { Link } from "react-router-dom";

// import Item_cart
import Item_Cart from "./Item_cart/Item_Cart";

const Cart = () => {

    const contexto = useContext(My_Context);

    const { Item, Quantity, Delete_all } = contexto;

    const Handle_deleteAll = () => {
        Delete_all();
    }

    if(Item.length !== 0){

    return(
    <>
        <Link to="/">
            <button id="keep_buying">Seguir navegando</button>
        </Link>
        
        <section id="Cart_Container">

            <div className="titles">
                <h3>Carrito</h3>
                <h3>Guardados</h3>

                <button onClick={Handle_deleteAll}>Borrar todos los productos</button>
            </div>

                {Item.map( (element, idx) => {
                    let cantidad = Quantity[idx];
                    console.log(element)
                    return(
                        <Item_Cart item = {element} quantity = {cantidad} />
                    )
                })}
                
        </section>
    </>
    ) 

    }else{
        return(
            <>
            <Link to="/">
                <button id="keep_buying">Seguir navegando</button>
            </Link>
            
            <section id="Cart_Container">
    
                <div className="titles">
                    <h3>Carrito</h3>
                    <h3>Guardados</h3>
    
                    <button onClick={Handle_deleteAll}>Borrar todos los productos</button>
                </div>
    
                   <Link to="/"><h1 className="Cart_Message">Lo siento no hay items agregados en carrito</h1></Link>
                    
            </section>
        </>
        )
    }
    
}

export default Cart;