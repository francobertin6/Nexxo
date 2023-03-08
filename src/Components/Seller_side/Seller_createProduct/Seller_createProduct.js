
// import react-router-dom

import { useParams } from "react-router-dom";

// import react

import { useState } from "react";

// import Overview

import Overview from "./Overview/Overview";

// import Pricing

import Pricing from "./Pricing/Pricing";

// import Description

import Description from "./Description/Description";

// import Requirements

import Requirements from "./Requirements/Requirements";

// import Gallery

import Gallery from "./Gallery/Gallery";


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
    const [overview, setoverview] = useState(JSON.parse(localStorage.getItem("overview")));
    const Ask_for_overviewData = (value) => {
        setoverview(value);
        console.log("se ejecuto desde seller_createProduct")
    }
    // pricing
    const [pricing, setpricing] = useState(JSON.parse(localStorage.getItem("pricing")));
    const Ask_for_pricingData = (value) => {
        setpricing(value)
        console.log("se ejecuto desde seller_createProduct")
    }
    // description
    const [description, setdescription] = useState();
    const Ask_for_descriptionData = (value) => {
        setdescription(value);
        console.log("esto se ejecuto desde el seller_createProduct: description")
    }
    // requirements
    const [requirements, setrequirements] = useState();
    const Ask_for_requirementsData = (value) => {
        setrequirements(value);
        console.log("esto se ejecuto desde el seller_createProduct: requirements")
    }
    // gallery
    const [gallery, setgallery] = useState();
    const Ask_for_galleryData = (value) => {
        setgallery()
        console.log("esto se ejecuto desde el seller_createProduct: gallery")
    }

    if(secondParams === "overview"){
        return(
            <>
                <Overview Ask_for_overviewData={Ask_for_overviewData} />
            </>
            
        )
    }else if(secondParams === "pricing"){
        return(
            <>
                <Pricing Ask_for_pricingData={Ask_for_pricingData}/>
            </>
        )
    }else if(secondParams === "description"){
        return(
            <>
                <Description Ask_for_descriptionData={Ask_for_descriptionData}/>
            </>
        )
    }else if(secondParams === "requirements"){
        return(
            <>
                <Requirements Ask_for_requirementsData={Ask_for_requirementsData}/>
            </>
        )
    }else if(secondParams === "gallery"){
        return(
            <>
                <Gallery />
            </>
        )
    }

}



export default Seller_createProduct;