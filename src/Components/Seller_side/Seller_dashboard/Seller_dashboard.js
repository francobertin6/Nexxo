
// import react_router-dom
import { useNavigate } from "react-router-dom";

// import my_context
import { My_Context } from "../../../context/My_context";
import { useContext } from "react";

const Seller_dashboard = () => {

    const contexto = useContext(My_Context);

    const {User_Data} = contexto;

    const {UserName, Email} = User_Data;

    let Navigate = useNavigate();


    // funcion de agregar producto nuevo
    const AgregateProduct = (e) => {

        console.log(e.target);

        e.preventDefault();
        Navigate("/seller/createProduct/overview");

    }

        return(
        <section id="Seller_dashboard">

            <article id="ratings">

            </article>

            <article id="create_order">

                <div className="create_order_btns">

                    <div className="user_data">
                        <h1>{UserName}</h1>
                        <h5>{Email}</h5>
                    </div>
                        
                    <button id="agregate_product" onClick={AgregateProduct}>Agregar producto +</button>
                    <button><img src="/images/menu.png" alt="Menu" /></button>
                    
                </div>

            </article>

            <article id="info">

            </article>

        </section>

    )
    

}

export default Seller_dashboard;