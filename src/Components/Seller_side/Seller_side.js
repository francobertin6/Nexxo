
// import react-router

import { useParams } from "react-router-dom";

// import Seller_navbar

import Seller_navbar from "./Seller_navBar/Seller_navbar";

// import Seller_offers

import Seller_dashboard from "./Seller_dashboard/Seller_dashboard";

// import Seller_createProduct

import Seller_createProduct from "./Seller_createProduct/Seller_createProduct";


const Seller_side = () => {


    return(
        <section id="conteiner_seller">
            <Seller_navbar />
            <Return_a_children />
        </section>
    )

}

const Return_a_children = () => {

    const {Params} = useParams();

    console.log(Params)

    if(Params === "dashboard"){
        return(
        <>
            <Seller_dashboard />
        </> 
        )
    }else if(Params === "createProduct"){
        return(
        <>
            <Seller_createProduct />
        </>
        )
    }

    
}


export default Seller_side;