
// import react-router-dom

import { useParams } from "react-router-dom";

// import react

import { useState } from "react";

// import Overview

import Overview from "./Overview/Overview";

// import Pricing

import Pricing from "./Pricing/Pricing";


const Seller_createProduct  = () => {

    return(
        <section id="CreateProduct_container">

            <div id="createProduct_navBar">

                    <li><p>1 </p> General</li>
                    <li><p>2 </p> Precio</li>
                    <li><p>3 </p> Descripcion</li>
                    <li><p>4 </p> Requerimientos</li>
                    <li><p>5 </p> Galeria</li>
                    <li><p>6 </p> Publicar</li>

            </div>

            <Return_a_children />
        </section>
    )

}


const Return_a_children = () =>{

    const {secondParams} = useParams();

    const [ProductForm, setProductForm] = useState({});

    // overview
    const [overview, setoverview] = useState(localStorage.getItem("overview"));
    const Ask_for_overviewData = (value) => {
        setoverview(value);
        console.log("se ejecuto desde seller_createProduct")
    }
    // pricing
    const [pricing, setpricing] = useState(localStorage.getItem("pricing"));
    

    if(secondParams === "overview"){
        return(
            <>
                <Overview Ask_for_overviewData={Ask_for_overviewData} />
            </>
            
        )
    }else if(secondParams === "pricing"){
        return(
            <>
                <Pricing />
            </>
        )
    }

}



export default Seller_createProduct;