
// import category
import Category from "./category/Category"

// import search
import Search from "./search/Search"


const NavBar = () => {

    return(
        <section id="NavBar">
            <div className="div1">
                <div className="icon_img">
                    <img src="images/atomic-structure.png" alt="imagen"/>
                    <h1>Mi E-commerce</h1>
                </div>
               <Search />
               <div className="paragraphs_container">
                   <h3>loren ipsum</h3>
                   <h3>loren ipsum</h3>
                   <h3 id="Login_btn">Iniciar sesion</h3>
               </div>
               <button id="Join_btn">Unete</button>
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

export default NavBar