
// import category
import Category from "./category/Category"

// import search
import Search from "./search/Search"

// import WidgetCart
import WidgetCart from "./Widget_cart/WidgetCart"

// import react-router-dom
import { useLocation } from "react-router-dom";

// import contexto
import { My_Context } from "../../../../context/My_context";
import { useContext } from "react";


const NavBar = () => {

    const contexto = useContext(My_Context);

    const {Ask_for_Profile_Dropdown, Profile_Dropdown} = contexto;

    const Click_dropdown = () => {

        if(Profile_Dropdown === false){
            Ask_for_Profile_Dropdown(true);
        }else{
            Ask_for_Profile_Dropdown(false)
        }

    }

    const location = useLocation();

    if(location.pathname === "/main/profile"){

        return(
            <section id="NavBar">

            <div className="div1">

                <div className="icon_img">
                    <img src="/images/atomic-structure.png" alt="imagen"/>
                    <h1>Nexxo</h1>
                </div>

               <Search />

               <div className="paragraphs_container">
                   <WidgetCart />
                   <img src="/images/notificacion.png" alt="" />
                   <img src="/images/mensaje.png" alt="" />
               </div>

               <button id="Profile" onClick={Click_dropdown}>
                   FR
                </button>

            </div>
            
        </section>

        )
    }else{

        return(
        <section id="NavBar">

            <div className="div1">

                <div className="icon_img">
                    <img src="/images/atomic-structure.png" alt="imagen"/>
                    <h1>Nexxo</h1>
                </div>

               <Search />

               <div className="paragraphs_container">
                   <WidgetCart />
                   <img src="/images/notificacion.png" alt="" />
                   <img src="/images/mensaje.png" alt="" />
               </div>

               <button id="Profile" onClick={Click_dropdown}>
                   FR
                </button>

            </div>
            
            <div className="div2">
                
                <Category  name = "Grafica y diseño"/>
                <Category  name = "Programacion"/>
                <Category  name = "Video y animacion"/>
                <Category  name = "Musica y audio"/>
                <Category  name = "Negocios"/>
                <Category  name = "Escritura"/>
                
            </div>
        </section>
    )

    }   
}

export default NavBar