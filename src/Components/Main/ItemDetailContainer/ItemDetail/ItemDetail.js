
// import ItemCount
import ItemOptions from "../ItemOptions/ItemOptions"

// import react/contexto
import { useContext } from "react";

import { My_Context } from "../../../../context/My_context";

// import react-toastify
import { ToastContainer, toast } from 'react-toastify'


const ItemDetail = ({item, id}) => {

    let {title, description, pictureUrl, price} = item

    const contexto = useContext(My_Context);

    const { Ask_for_Item } = contexto;


    const onAdd = () => {
        Ask_for_Item(item)
    }

    const Notifications = (value) => {
        if(value === true){
            toast.warn("este item ya ha sido añadido a carrito");
        }else{
            return null
        }
    }

    return(
        <article id="ItemDetail">

            <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />

            <div className="title">
                <h1>{title}</h1>
            </div>

            <div className="description">

                <div className="description_title">
                    <p>Descripcion</p>
                    <div></div>
                </div>

                <p>{description}</p>

            </div> 
                 
            <img src={pictureUrl} alt="imagen" />

            <div className="Options">

                <p className="price">$ {price}</p>

                <ItemOptions name="Agregar a carrito" onAdd={ onAdd } notification= { Notifications } id={id}
                />

            </div>
                 
        </article>
    )
}

export default ItemDetail;