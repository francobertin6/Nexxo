// import react-router/react
import { useEffect } from "react";
import { BrowserRouter} from "react-router-dom";

// import Header

import Header from "./Components/Header/Header"

// import Main

import Main from "./Components/Main/Main";

// import Profile_dropdown

import Profile_dropdown from "./Components/Main/Profile/Profile_dropdown/Profile_dropdown";

// import contexto

import Provider_component from "./context/My_context";


const App = () => {

    return(
        <BrowserRouter>
            <Provider_component>
                <Header />
                <Main />
                <Profile_dropdown />
            </Provider_component> 
        </BrowserRouter>
       
    )
}

export default App;



// setDoc para importar los productos a la base de datos



