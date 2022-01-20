
// import context
import { useContext } from "react";
import { My_Context } from "../../../../context/My_context";


const Item_Cart = ({item, quantity}) => {

    const contexto = useContext(My_Context);

    const { Remove_Item } = contexto;

    console.log(item)


    const {id, pictureUrl, user, title, price} = item;


    const Handle_removebtn = () => {
        Remove_Item(id, quantity)
    }


    return(
        <div key={id} className="Item_cart">

            <img src={pictureUrl} alt="img" />

            <div className="title_user">
                <h1>{title}</h1>
                <p>{user}</p>
            </div>
            
            <div className="price_quantity">
                <p>Precio : {price}</p>
                <p>Cantidad : {quantity}</p>
            </div>

            <button id="buyBtn">Seguir con la compra</button>
            <button id="removeBtn" onClick={Handle_removebtn}>X</button>    

        </div>
    )
}

export default Item_Cart