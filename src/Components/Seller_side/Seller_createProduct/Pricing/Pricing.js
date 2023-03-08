
import Packages from "./Packages/Packages";
import ExtraService from "./ExtraService/ExtraService";

// import react-router

import { useNavigate } from "react-router-dom";


// import react

import { useState } from "react";


const Pricing = ({Ask_for_pricingData}) => {

    const Navigate = useNavigate();

    const reloadFullpage = () => {
        
        window.location.reload();

    }

    // localStoragePackages
    var basico;
    var estandar;
    var premium;

    // Basico
    if(JSON.parse(localStorage.getItem("basico")) !== null){
        basico = JSON.parse(localStorage.getItem("basico"));
    }else{
        basico = "";
    }
    // Basico

    // estandar
    if(JSON.parse(localStorage.getItem("packageLockOut")) !== null || false && JSON.parse(localStorage.getItem("estandar")) !== null){
        estandar = JSON.parse(localStorage.getItem("estandar"));
    }else{
        estandar = "";
    }
    // estandar

    // premium
    if(JSON.parse(localStorage.getItem("packageLockOut")) !== null || false && JSON.parse(localStorage.getItem("premium") !== null)){
        premium = JSON.parse(localStorage.getItem("premium"));
    }else{
        premium = "";
    }
    // premium

   
    // ExtraServices
    var extraServices;
    var extraFast;

    if(JSON.parse(localStorage.getItem("extraServices")) !== null){
        extraServices = JSON.parse(localStorage.getItem("extraServices"))
    }else{
        extraServices = "";
    }

    if(JSON.parse(localStorage.getItem("extraFast")) !== null || false){
        extraFast = JSON.parse(localStorage.getItem("extraFast"))
    }else{
        extraFast = "";
    }


    // ExtraServices

    // packages/extraServices state 
    
    const [fullPackages] = useState({
        basico: basico,
        estandar: estandar,
        premium: premium
    });
    const [fullExtraServices] = useState({
        extraService: extraServices,
        extraFast: extraFast
    });

    console.log("packages: " ,fullPackages)
    console.log("extraServices: ", fullExtraServices);

    // continuar a descripcion
    
    const continue_to_description = () => {

        let object = {
            packages: fullPackages,
            extraServices: fullExtraServices
        }

        localStorage.setItem( "pricing", JSON.stringify(object));

        Ask_for_pricingData(object);
        Navigate("/seller/createProduct/description");
    }

    return(
        <>
            <section id="Pricing_container">
                <Packages reloadFullpage = {reloadFullpage}/>
            </section>
            <section id="extraPackage_container">
                <ExtraService reloadFullpage = {reloadFullpage}/>
            </section>
            <div id="continueBtns"> 
                <button onClick={continue_to_description}>continuar</button>
            </div>
        </>
       
    )
    

}

export default Pricing;