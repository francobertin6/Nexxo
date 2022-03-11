
// react-router-dom
import { Link } from "react-router-dom";

const Order_Cart = ({order, eliminate_order}) => {


    const { comprador , items, monto_total } = order.data;
    const { usuario, apellido , email } = comprador;

    const Handle_removebtn = (e) => {
        const id = e.target.parentNode.parentNode.id;
        eliminate_order(id);
    }

    return(
        <>

        <div className="Order_cart" id={order.id}>

            <div className="buyer_user">
                <h1>{usuario + " " + apellido}</h1>
                <p>{email}</p>
            </div>
            
            <div className="price_quantity">
                <p>monto a pagar : {monto_total}</p>
                <p>Cantidad productos : {items.length}</p>
            </div>

            <Link to="/cart"><button id="removeBtn" onClick={Handle_removebtn}>X</button></Link>

        </div>

        </>
    )
}

export default Order_Cart;