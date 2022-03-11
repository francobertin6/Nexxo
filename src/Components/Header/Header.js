
// importacion de navBar
import NavBar from "./NavBar/NavBar";

// import context
import { My_Context } from "../../context/My_context";
import { useContext } from "react";


const Header = () => {

    const contexto = useContext(My_Context);

    const {HeaderToggle} = contexto;

    // aca cambiar cuando pueda hacer el login

    if(HeaderToggle === true){
        return(
            <>
                <NavBar />
            </>
        )
    }else{
        return(
            <>
            </>
        )
    }

    
    
}

export default Header;