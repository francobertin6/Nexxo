
// import react-router

import { Link } from "react-router-dom";


const Seller_navbar = ({params}) => {

    return(
        <section id="seller_navbar">

                <div className="icon_img">
                    <img src="/images/atomic-structure.png" alt="imagen"/>
                </div>

                <div className="seller_options"> 
                    <li>Panel</li>
                    <li>Mensajes</li>
                    <li>Ofertas/Ordenes</li>
                    <li>Analitica</li>
                    <li>Ganancias</li>
                </div>

                <div className="profile_changeMode">
                    <Link to="/main/index"><button className="changeMode">Modo comprador</button></Link> 
                    <button className="btn_profile">Fr</button>
                </div>

        </section>
    )
}

export default Seller_navbar;