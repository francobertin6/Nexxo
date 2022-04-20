
// react-router

import { useLocation } from "react-router-dom";

// importacion de navBar
import NavBar from "./NavBar/NavBar";



const Header = () => {

    const location = useLocation();

    // aca cambiar cuando pueda hacer el login

    if( (location.pathname === "/") || (location.pathname === "/seller") ){
        return(
            <>
            </>
        )
    }else{
        return(
            <>
                <NavBar />
            </>
        )
    }

    
    
}

export default Header;