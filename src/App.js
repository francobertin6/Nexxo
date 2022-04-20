// import react-router/react
import { BrowserRouter} from "react-router-dom";

// import Main

import Main from "./Components/Main/Main";

// import Profile_dropdown

import Profile_dropdown from "./Components/Main/Profile/Profile_dropdown/Profile_dropdown";

// import Landing_page

import LandingPage from "./Components/LandingPage/LandingPage";

// import contextos

import Provider_component from "./context/My_context";
import Seller_provider from "./context/Seller_context";

// import seller_side

import Seller_side from "./Components/Seller_side/Seller_side";

// import router-dom

import { Routes, Route } from "react-router-dom";


const App = () => {

    return(
        <BrowserRouter>
            <Provider_component>
            <Seller_provider>

                    <Profile_dropdown />  
               <Routes>

                   <Route path="/main" element={ <Main /> }>
                        <Route path=":Params" element={ <Main /> }>
                            <Route path=":secondParams" element={ <Main /> } />
                        </Route>
                   </Route>

                   <Route path="/seller" element={ <Seller_side /> } >
                       <Route path=":Params" element={ <Seller_side /> } />
                   </Route>

                   <Route path="/" element={ <LandingPage /> } />
                   
               </Routes>

            </Seller_provider>
            </Provider_component> 
        </BrowserRouter>
       
    )
}

export default App;



// setDoc para importar los productos a la base de datos



