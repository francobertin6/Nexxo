
// react-router

import { Routes, Route} from "react-router-dom";

// import ItemListContainer

import ItemListContainer from "./ItemListContainer/ItemListContainer"

// import ItemDetailContainer

import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer.js"

// import Cart

import Cart from "./Cart/Cart";

// import checkout

import Checkout from "./Checkout/Checkout";

// import Landing page

import LandingPage from "./LandingPage/LandingPage";

// import Profile

import ProfileContainer from "./Profile/ProfileContainer";



const Main = () => {
    return(
        <main id="conteiner_main">
            <Routes>
                <Route path= "/item/:id" element= {<ItemDetailContainer />} />
                <Route path= "/index/:category" element={<ItemListContainer />}/>
                <Route path= "/index" element = {<ItemListContainer />}/>
                <Route path= "/cart" element = {<Cart />}/>
                <Route path= "/cart/:orders" element = {<Cart />}/>
                <Route path= "/checkout" element = {<Checkout />}/>
                <Route path= "/" element = {<LandingPage />}/>
                <Route path= "/profile" element = {<ProfileContainer />} />
            </Routes>

        </main>
    )
}

export default Main;