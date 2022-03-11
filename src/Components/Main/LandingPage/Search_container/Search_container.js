

const Search_container = ({Activate_login}) => {

    const Join_in_btn = (e) => {

        Activate_login(e)

    }


    return(

        <section id="Search_container">

                <div id="options_container">

                    <div className="logo">
                        <img src="/images/atomic-structure.png" alt="logo" />
                    </div>

                    <div className="options">
                        <button>Conviertete en Vendedor</button>
                        <button onClick={Join_in_btn} className="Login_btn">Iniciar sesion</button>
                        <button onClick={Join_in_btn} className="Join_btn">Unete</button>
                    </div>

                </div>

                <div className="welcome_title">

                        <h1>Encuentra o promociona servicios freelance ideales para lo que estas necesitando</h1>
                        <input type="text" name="search" id="search_input" placeholder="Buscar productos o servicios"/>
                        <button>Buscar</button>

                        <div className="tags">
                            <h3>Popular :</h3>
                        </div>
                </div>

                <img src="images/Humaaans - Wireframe.png" alt="chica_Humaaans" className="Search_container_img" />
            
        </section>

    )
}

export default Search_container;