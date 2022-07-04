// useState
import { useState, useEffect, useContext } from "react";

// context
import { Seller_Context } from "../../../../../context/Seller_context";


const ExtraService = () => {

    const contexto = useContext(Seller_Context);

    const {extraServices, getExtraservices} = contexto;

    const [loading, setloading] = useState(true);

    const [extraService, setextraService] = useState(false);

    const [addService, setaddService] = useState();

    const serviceChecked = () => {
        if(extraService === false){
            setextraService(true);
            localStorage.setItem("extraFast", true);
        }else{
            setextraService(false)
            localStorage.removeItem("extraFast");
        }
    }

    // formulario para agregar un servicio
    const agregateService = (e) => {
        
        const btnElement = e.target.parentNode;
        const parent = e.target.parentNode.parentNode;

        // borrar btn
        btnElement.remove();
        
        // crear forumulario para sumar un servicio
        const service = document.createElement("div");
        service.className = "services_form";

        // title div
        let title_div = document.createElement("div");
        let label_title = document.createElement("label");
        label_title.textContent = "Titulo";
        let input_title = document.createElement("input");
        input_title.id = "title";
        title_div.appendChild(label_title);
        title_div.appendChild(input_title);

        // description div
        let description_div = document.createElement("div");
        let label_description = document.createElement("label");
        label_description.textContent = "Descripcion";
        let input_description = document.createElement("input");
        input_description.id = "description";
        description_div.appendChild(label_description);
        description_div.appendChild(input_description);

        // price div
        let price_div = document.createElement("div");
        let label_price = document.createElement("label");
        label_price.textContent = "precio";
        let input_price = document.createElement("input");
        input_price.type = "number";
        input_price.id = "price";
        price_div.appendChild(label_price);
        price_div.appendChild(input_price);

        // time div
        let time_div = document.createElement("div");
        let label_time = document.createElement("label");
        label_time.textContent = "cuanto dias de demora";
        let input_time = document.createElement("input");
        input_time.type = "number";
        input_time.id = "time";
        time_div.appendChild(label_time);
        time_div.appendChild(input_time);

        // btn div
        let btn_div = document.createElement("div");
        btn_div.id = "service_form_btns";
        let cancel_btn = document.createElement("button");
        let save_btn = document.createElement("button");
        cancel_btn.textContent = "Cancelar";
        cancel_btn.onclick = cancelService;
        save_btn.textContent = "Guardar";
        save_btn.onclick = saveService;

        btn_div.appendChild(save_btn);
        btn_div.appendChild(cancel_btn);

        // appendchild service
        service.appendChild(title_div);
        service.appendChild(description_div);
        service.appendChild(price_div);
        service.appendChild(time_div);
        service.appendChild(btn_div);

        // btn element 
        let divBtn = document.createElement("div");
        divBtn.className = "addService";
        let btn = document.createElement("button");
        btn.textContent = "+ agregar servicio";
        btn.onclick = agregateService;
        divBtn.appendChild(btn);

        // appendchild parent
        parent.appendChild(service);
        parent.appendChild(divBtn);
        
    }

    // salva los extraService en contexto y localStorage
    const saveService = (e) => {

        const serviceForm_div = e.target.parentNode.parentNode;
        const serviceForm_array = Array.from(serviceForm_div.children);

        console.log(serviceForm_array);

        let service = {
            title: "",
            description: "",
            time: "",
            price: ""
        };

        serviceForm_array.forEach( (element, idx) => {

            if(element.children[1].id === "title" && idx < 4){
                service.title = element.children[1].value;
            }else if(element.children[1].id === "description" && idx < 4){
                service.description = element.children[1].value;
            }else if(element.children[1].id === "price" && idx < 4){
                service.price = element.children[1].value;
            }else if(element.children[1].id === "time" && idx < 4){
                service.time = element.children[1].value;
            }

        })
        
        console.log(service);
        getExtraservices(service); //cambiar la ruta de guardado de localstorage a context
        setloading(true);
    }

    // elimina los extraService en contexto y localStorage
    const eliminateService = (e) => {
        
        const parentContainer = e.target.parentNode.parentNode;
        const parentContainerId = e.target.parentNode.parentNode.id;

        parentContainer.remove();

        addService.splice(parentContainerId, 1);

        localStorage.setItem("extraServices", JSON.stringify(addService));

        setloading(true);

    }

    // cancela los formularios de agregar servicio
    const cancelService = (e) => {
        
        let containerParent = e.target.parentNode.parentNode;

        containerParent.remove();

    }

    useEffect( () => {

        if(extraServices === undefined){
            setaddService()
        }else{
            setaddService(extraServices)
        }

        setTimeout(() => {
            setloading(false)
        }, 500);

        
    }, [loading])

    console.log(addService);

    if(loading === true){

        return(
            <>
                <div class="loader"></div>
            </>
        )

    }else{

        return(
        <>
            <article className="ExtraService">

                <div className="title">
                    <h1>Servicios extra</h1>
                </div>

                <div className="services">
                    <input type="checkbox" checked={extraService} onChange={serviceChecked} id="checkBox"/><label>Servicio de entrega rapida</label>
                </div>

                    {addService === null ? <></> : addService.map( (element, idx) => {
                        return(

                            <div className="userServices" id={idx}>
                                <div>
                                    <label>Titulo:</label>
                                    <p>{element.title}</p>
                                </div>
                                <div>
                                    <label>Descripcion:</label>
                                    <p>{element.description}</p>
                                </div>
                                <div>
                                    <label>Precio:</label>
                                    <p>{element.price}</p>
                                </div>
                                <div>
                                    <label>Dias de demora:</label>
                                    <p>{element.time}</p>
                                </div>
                                <div className="deleteBtn">
                                    <button onClick={eliminateService}>X</button>
                                </div>
                            </div>
                        )
                    })}
                
                <div className="addService">
                    <button onClick={agregateService}>+ agregar servicio</button>
                </div>

            </article>
        </>
        )
    
    }
}

export default ExtraService;