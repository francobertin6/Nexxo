
// import react/context
import { useContext, useState } from "react";
import { My_Context } from "../../../context/My_context";

// import firestore
import db from '../../../Firebase/firebase.js';
import { collection, addDoc } from "firebase/firestore";

// import react-router
import { Link } from "react-router-dom";

const Checkout = () => {

    const contexto = useContext(My_Context);

    const { TotalAmount, Item, Remove_Item, Delete_all } = contexto;
    
    const [newData, setnewData] = useState([]);
    const [checkData, setcheckData] = useState(false);
    const [Message_input, setMessage_input] = useState();
   
    const newArray = []

    const Handle_buy = () => {

            let data = {
            comprador : {
                usuario : document.getElementById("nombre").value,
                apellido : document.getElementById("apellido").value,
                email : document.getElementById("email").value,
                telefono : document.getElementById("telefono").value
            },
            items : newData,
            monto_total : TotalAmount, 
            }

            addDoc(collection(db, "ordenes"), data);

            Delete_all();

    }

    const Eliminate_item = (e) => {
        let parent_target = e.target.parentNode;
        
        if(parent_target === document.getElementById("href_element")){
            let check_id = parent_target.parentNode.id;
            Remove_Item(Number(check_id))
        }else{
            let check_id = parent_target.id;
            Remove_Item(Number(check_id))
        }

    }

    const check_inputs = (e) => {

        // inputs
        let name = document.getElementById("nombre").value;
        let lastName = document.getElementById("apellido").value;
        let email = document.getElementById("email").value;
        let check_email = document.getElementById("check_email").value;
        let tel = document.getElementById("telefono").value;

        if(name !== "" && lastName !== "" && email !== "" && check_email !== "" && tel !== "" && email === check_email){

            setMessage_input(true);
            setcheckData(true);

            // si los datos se completan se pushea el nuevo array al state newdata
            Item.forEach( (element, idx) => {
            
                var obj = {
                        id : element.id,
                        title : element.title,
                        price : element.price
                    }
            
                newArray.push(obj); 
                setnewData(newArray);    
            })

        }else if(name !== "" && lastName !== "" && email !== "" && check_email !== "" && tel !== "" && email !== check_email){

            setMessage_input(false);
            setcheckData(false);
        }
        else{
            
            setcheckData(false);
        }
    }

    
    return(
        <section id="Checkout">

            <div className="items_details">

                <h1>Detalles de compra</h1>

                {Item.map( (element, idx) => {
                    return(
                        <div className="items" id={element.id}>
                            <img src={element.pictureUrl} alt="imagen_producto" />
                            <h1>{element.title}</h1>
                            <p>Precio : {element.price}</p>

                            {Item.length <= 1 ? <Link to= "/cart" id="href_element"><button id={idx} onClick={Eliminate_item}>X</button></Link> : <button id={idx} onClick={Eliminate_item}>X</button>}
                        </div>
                    )
                })}
            </div>

            <div className="User_data">

                <h1>Ingresar datos de usuario</h1>

                <input type="text" placeholder="Nombre" id="nombre" onChange={check_inputs}/>
                <input type="text" placeholder="Apellido" id="apellido" onChange={check_inputs}/>
                <input type="email" placeholder="Email" id="email" onChange={check_inputs}/>
                <input type="email" placeholder="confirmar email" id="check_email" onChange={check_inputs}/>
                <input type="number" placeholder="telefono" id="telefono" onChange={check_inputs}/>

                {Message_input ? null : <p>Email no coincide</p>}
            </div>

            <div className="confirm_buy">
                <p>Precio total : {TotalAmount}</p>
                {checkData ? <Link to="/cart/orders"><button onClick={Handle_buy}>Confirmar compra</button></Link> : <button onClick={Handle_buy} disabled>Confirmar compra</button>}
                <Link to="/cart"><button className="return_cart">Volver a carrito</button></Link>
            </div>

        </section>
    )
}

export default Checkout;