
// import react-router

import { useParams } from "react-router-dom";

// import Seller_navbar

import Seller_navbar from "./Seller_navBar/Seller_navbar";

// import Seller_offers

import Seller_dashboard from "./Seller_dashboard/Seller_dashboard";


const Seller_side = () => {


    return(
        <section id="conteiner_seller">
            <Seller_navbar />
            <Return_a_children />
        </section>
    )

}

export default Seller_side;

const Return_a_children = () => {

    const {Params} = useParams();

    if(Params === "dashboard"){
        return(
        <>
            <Seller_dashboard />
        </> 
        )
    }

    
}