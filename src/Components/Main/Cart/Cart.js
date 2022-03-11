
// import react/contexto

import { useContext, useEffect, useState } from "react";
import { My_Context } from "../../../context/My_context";

// import react-router
import { Link, useParams } from "react-router-dom";

// import Item_cart
import Item_Cart from "./Item_cart/Item_Cart";

// import Order_cart
import Order_Cart from "./order_cart/order_cart";

// firestore
import db from "../../../Firebase/firebase";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore"

const Cart = () => {

    /* firestore orders*/ 
    const collections = collection(db, "ordenes");
    let orders_promise = getDocs(collections);
    /* firestore orders*/

    const contexto = useContext(My_Context);

    const { Item, Delete_all, Ask_for_TotalAmount } = contexto;

    const [TotalAmount, setTotalAmount] = useState();
    const [Orders, setOrders] = useState([]);
    
    // parametro de ordenes para saber si mostrar las ordenes o el carrito
    const {orders} = useParams();

    useEffect( () => {

        let orders_array = []

        if(orders === "orders"){

            orders_promise.then( (res) => {
                let orders = res.docs;

                orders.forEach( doc => {
                    orders_array.push({
                        id : doc.id,
                        data : doc.data()
                    });
                })

                setOrders(orders_array);
            })

        }else{

            setOrders([])

        }

    },[orders])

    const Handle_deleteAll = () => {
        Delete_all();
    }

    const HandleCheckout = () => {
        Ask_for_TotalAmount(TotalAmount);
    }

    useEffect( () => {
        var Total = 0;

        Item.forEach( (element) => {
            Total = (element.price) + Total;
        });

        setTotalAmount(Total);

    },[Item])

    
    // eliminar ordenes

    const  eliminate_orders = async (id) => {

        await deleteDoc(doc(db, "ordenes", id));
    }

   
    if(Item.length !== 0 && orders === undefined){

    return(
    <>
        <Link to="/index">
            <button id="keep_buying">Seguir navegando</button>
        </Link>
        
        <section id="Cart_Container">

            <div className="titles">

                <Link to="/cart">
                    <h3>Carrito</h3>
                </Link>
                
                <Link to="/cart/orders">
                    <h3>Ordenes</h3>
                </Link>

                <button onClick={Handle_deleteAll}>Borrar todos los productos</button>
            </div>

            <div id="Items_container">
                {Item.map( (element) => {
            
                    return(
                        <Item_Cart item = {element} />
                    )
                    
                })}
            </div>
                
            <div className="totalAmount">
                <h1>Precio total : {TotalAmount} </h1>
                <Link to="/checkout">
                    <button onClick={HandleCheckout}>Seguir con la totalidad de la compra</button>
                </Link> 
            </div>
                
        </section>
    </>
    ) 

    }else if(Item.length === 0 && orders === undefined){
        return(
            <>
            <Link to="/index">
                <button id="keep_buying">Seguir navegando</button>
            </Link>
            
            <section id="Cart_Container">
    
                <div className="titles">

                <Link to="/cart">
                    <h3>Carrito</h3>
                </Link>
                
                <Link to="/cart/orders">
                    <h3>Ordenes</h3>
                </Link>

                    <button onClick={Handle_deleteAll}>Borrar todos los productos</button>
                </div>
    
                   <Link to="/"><h1 className="Cart_Message">Lo siento no hay items agregados en carrito</h1></Link>
                    
            </section>
        </>
        )
    }else if(orders === "orders" && Orders.length !== 0){

        return(
            <>
                <Link to="/index">
                    <button id="keep_buying">Seguir navegando</button>
                </Link>
                
                <section id="Cart_Container">
        
                    <div className="titles">
        
                        <Link to="/cart">
                            <h3>Carrito</h3>
                        </Link>
                        
                        <Link to="/cart/orders">
                            <h3>Ordenes</h3>
                        </Link>
        
                    </div>
        
                    <div id="Order_container">

                        {Orders.map( element => {

                            return(
                                <Order_Cart order={element} eliminate_order={eliminate_orders}/>
                            )

                        })}

                    </div>
                             
                </section>
            </>
            )
    }else if(orders === "orders" && Orders.length === 0){

        return(
            <>
                <Link to="/index">
                    <button id="keep_buying">Seguir navegando</button>
                </Link>
                
                <section id="Cart_Container">
        
                    <div className="titles">
        
                        <Link to="/cart">
                            <h3>Carrito</h3>
                        </Link>
                        
                        <Link to="/cart/orders">
                            <h3>Ordenes</h3>
                        </Link>
        
                    </div>
        
                    <Link to="/cart"><h1 className="Cart_Message">no tienes ordenes de compra</h1></Link>
                             
                </section>
            </>
            )
    }
}

export default Cart;