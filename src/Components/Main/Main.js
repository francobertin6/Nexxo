
// react-router

// import { Routes, Route, useLocation} from "react-router-dom";

import { useParams } from "react-router-dom";


// import ItemListContainer

import ItemListContainer from "./ItemListContainer/ItemListContainer"

// import ItemDetailContainer

import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer.js"

// import Cart

import Cart from "./Cart/Cart";

// import checkout

import Checkout from "./Checkout/Checkout";

// import Profile

import ProfileContainer from "./Profile/ProfileContainer";

// import header

import Header from "./Header/Header";



const Main = () => {

    return(

        <main id="conteiner_main">
            <Header />
            <Return_a_child />
        </main>

    )
    
}


const Return_a_child = () => {

    const {Params} = useParams();


    if(Params === "index"){

        return(
            <>
                <ItemListContainer />
            </>
        )
        }else if(Params === "item"){

        return(

            <>
                <ItemDetailContainer />
            </> 
        )
        }else if(Params === "cart"){

        return(

            <>
                <Cart />
            </>
        )
        }else if(Params === "checkout"){

        return(

            <>
                <Checkout />
            </>
        )
        }else if(Params === "profile"){

        return(

            <>
                <ProfileContainer />
            </>
        )
        }
}

export default Main;