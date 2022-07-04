
// import react
import { useState, useEffect } from "react";


const Packages = () => {

    const [packageTitle, setpackageTitle] = useState("basico");
    const [packageLockOut, setpackageLockOut] = useState(false);
    // loading state
    const [loading, setloading] = useState(true)

    const packageJson = {
        description: "",
        money: "",
        name: "",
        price: "",
        time: {
            timeDelivery: "",
            timeLimits: ""
        },
        title: ""
    }

    useEffect( () => { 

        console.log("lockout?", packageLockOut)
        setloading(true)

        const packages = JSON.parse(localStorage.getItem(packageTitle));
        console.log(packageJson)

        if(packages !== null){

            console.log("pasa por aca")

            packageJson.description = packages.description;
            packageJson.money = packages.money;
            packageJson.name = packages.name;
            packageJson.price = packages.price;
            packageJson.time.timeDelivery = packages.time.timeDelivery;
            packageJson.time.timeLimits = packages.time.timeLimits;
            packageJson.title = packages.title;

        }else{

            console.log("pasa por aca === null")

            packageJson.description = "";
            packageJson.money = "";
            packageJson.name = "";
            packageJson.price = "";
            packageJson.time.timeDelivery = "";
            packageJson.time.timeLimits = "";
            packageJson.title = "";
        }

        settimeDeliveryValue({category: packageJson.time.timeDelivery});
        settimeLimitsValue({category: packageJson.time.timeLimits});
        setmoneySelectorValue({category: packageJson.money});
        setpackage_name({name: packageJson.name});
        setpackage_description({description: packageJson.description});
        setpackage_price({price: packageJson.price});

    
        setTimeout(() => {
            setloading(false)
        }, 1);

    }, [packageTitle])

    
    const [timeDelivery, settimeDelivery] = useState(false);
    const [timeDeliveryValue, settimeDeliveryValue] = useState({category: packageJson.time.timeDelivery})

    const [timeLimits, settimeLimits] = useState(false);
    const [timeLimitsValue, settimeLimitsValue] = useState({category: packageJson.time.timeLimits});

    const [moneySelector, setmoneySelector] = useState(false);
    const [moneySelectorValue, setmoneySelectorValue] = useState({category: packageJson.money});

    const [package_name, setpackage_name] = useState({name: ""});
    const [package_description, setpackage_description] = useState({description: ""});
    const [package_price, setpackage_price] = useState({price: ""})

   

    const change_Display = (e) => {

        let input_change = e.target.className;
    
        if(input_change === "timeDelivery" && timeDelivery === false){
            settimeDelivery(true)
        }else if(input_change === "timeLimits" && timeLimits === false){
            settimeLimits(true)
        }
        else if(input_change === "moneySelector" && moneySelector === false){
            setmoneySelector(true);
        }
        else if(input_change === "timeDelivery" && timeDelivery === true){
            settimeDelivery(false)
        }else if(input_change === "timeLimits" && timeLimits === true){
            settimeLimits(false)
        } 
        else if(input_change === "moneySelector" && moneySelector === true){
            setmoneySelector(false);
        }

        }
    
    // cambia el paquete a agregar 
    const change_Package = (e) => {
        let Package = e.target.className;

        console.log(Package)

        setpackageTitle(Package)
    }  
    
    // habilitar el cambio de paquete por el usuario
    const change_packageLockOut = () => {

        if(packageLockOut === false){
            setpackageLockOut(true);
            setloading(true);
        }else{
            setpackageLockOut(false)
            setloading(true);
        }

        setTimeout(() => {
            setloading(false);
        }, 5);
    }

    // change values 
    const changeDelivery = (e) => {

        let value = e.target.textContent;
        let parentClassname = e.target.parentNode.parentNode.className;

        console.log(value);
        console.log(parentClassname);

        if(parentClassname === "timeDelivery"){
            settimeDeliveryValue({category: value})
            settimeDelivery(false)
        }
        else if(parentClassname === "timeLimits"){
            settimeLimitsValue({category: value})
            settimeLimits(false)
        }
        else if(parentClassname === "moneySelector"){
            setmoneySelectorValue({category: value})
            setmoneySelector(false)
        }
    }

    // create_localStoragePackage
    const create_localStoragePackage = () => {

        let packageLocalstorage = {

            title: packageTitle,
            name: document.getElementById("name_of_package").value,
            description: document.getElementById("description_of_package").value,
            price: document.getElementById("price").value,
            time: {
                timeDelivery: timeDeliveryValue.category,
                timeLimits: timeLimitsValue.category
            },
            money: moneySelectorValue.category
            
        }

        localStorage.setItem( packageTitle, JSON.stringify(packageLocalstorage) );

    }

    // delete_localStoragePackage
    const delete_localStoragePackage = () => {

        localStorage.removeItem(packageTitle);
        window.location.reload();
    }

    // onfocus input value
    const onFocus_input = (e) => {
        console.log(e.target.parentNode.className);

        let className = e.target.parentNode.className;
        
        if(className === "name_of_package"){
            setpackage_name({name: ""});
        }
        else if(className === "description_of_package"){
            setpackage_description({description: ""});
        }
        else if(className === "price"){
            setpackage_price({price: ""});
        }
    }

    if(loading === true){

        return(
            <>
                <div class="loader"></div>
            </>
        )

    }else if(packageLockOut === false){

        return(
            <>
                <article id="packages_container">
    
                    <div className="Title">
    
                       
                        <div className = "basico">
                            <h1>Basico</h1> 
                        </div>
                       
                        <div className = "estandar" style={{backgroundColor: "grey"}}>
                            <h1>Estandar</h1> 
                        </div>
                        
                        <div className = "premium" style={{backgroundColor: "grey"}}>
                            <h1>Premium</h1> 
                        </div>
                        
    
                        <div className="checkbox">
                            <label>Ofertar paquetes</label> <input type="checkbox" onChange={change_packageLockOut}/>
                        </div>
    
                    </div>
    
                    <div className="name_of_package">
                        <h6>Nombre del paquete</h6>
                        {package_name.name === "" ?  <input type="text" maxLength="80" id="name_of_package"></input> : <input type="text" maxLength="80" id="name_of_package" defaultValue={package_name.name} onFocus={onFocus_input}></input>}
                       
                    </div>
    
                    <div className="description_of_package">
                        <h6>Descripcion</h6>
                        {package_description.description === "" ? <textarea name="description" id="description_of_package"></textarea> : <textarea name="description" id="description_of_package" defaultValue={package_description.description} onFocus={onFocus_input}></textarea>}
    
                    </div>
    
                    <div className="delivery_time">
    
                        <div className="timeDelivery" onClick={change_Display}>
                            {timeDeliveryValue.category === "" ? <label>seleccione tiempo de delivery</label> : <label>{timeDeliveryValue.category}</label>}
                            
    
                            {timeDelivery === false ? 
                            
                                <ul style={{display : "none"}}>
    
                                </ul>
                            :
                                <ul style={{display : "block"}}>
                                    <li onClick={changeDelivery}>1</li>
                                    <li onClick={changeDelivery}>2</li>
                                    <li onClick={changeDelivery}>3</li>
                                    <li onClick={changeDelivery}>4</li>
                                    <li onClick={changeDelivery}>5</li>
                                    <li onClick={changeDelivery}>6</li>
                                    <li onClick={changeDelivery}>7</li>
                                    <li onClick={changeDelivery}>8</li>
                                    <li onClick={changeDelivery}>9</li>
                                    <li onClick={changeDelivery}>10</li>
                                    <li onClick={changeDelivery}>11</li>
                                    <li onClick={changeDelivery}>12</li>
                                </ul>
                        }
    
                            
                        </div>
    
                        <div className="timeLimits" onClick={change_Display}>
                            {timeLimitsValue.category === "" ? <label>Seleccione unidades de tiempo</label> : <label>{timeLimitsValue.category}</label>}
                            
    
                            {timeLimits === false ? 
                            
                            <ul style={{display : "none"}}>
    
                            </ul>
                        :
                            <ul style={{display : "block"}}>
                                <li onClick={changeDelivery}>Horas</li>
                                <li onClick={changeDelivery}>Dias</li>
                                <li onClick={changeDelivery}>Semanas</li>
                                <li onClick={changeDelivery}>Meses</li>
                                <li onClick={changeDelivery}>Año</li>
                            </ul>
                    }
    
                        </div>
                    </div>
    
                    <div className="price">
                        
                            <h6>Precio</h6>
                            {package_price.price === "" ? <input type="number" id="price"/> : <input type="number" id="price" defaultValue={package_price.price} onFocus={onFocus_input}></input>}
                            
                        
                        
                        <div className="moneySelector" onClick={change_Display}>
                            {moneySelectorValue.category === "" ? <label>Moneda</label> : <label>{moneySelectorValue.category}</label>}
    
                            {moneySelector === false ?
    
                            <ul style={{display : "none"}}>
    
                            </ul>
                        :
                             <ul style={{display : "block"}}>
                                <li onClick={changeDelivery}>Pesos</li>
                                <li onClick={changeDelivery}>Dolares</li>
                                <li onClick={changeDelivery}>Euros</li>
                            </ul>
    
                        }
    
                        </div>
                    </div>
    
                    <div className="saveBtn">
                        
                        <button id="save" onClick={create_localStoragePackage}>guardar cambios de paquete</button>
                        <button id="delete" onClick={delete_localStoragePackage}>Borrar paquete</button>
                        
                    </div>    
    
    
                </article> 
            </>
        )

    }else if(packageLockOut === true){


        return(
        <>
            <article id="packages_container">

                <div className="Title">

                    {packageTitle === "basico" ? 
                    <div style={{boxShadow : "1px 2px 1px 2px ", backgroundColor : "rgb(88, 88, 165)"}} className = "basico">
                        <h1 style={{color: "white"}}>Basico</h1> 
                    </div>
                    :
                    <div className = "basico" onClick={change_Package}>
                        <h1>Basico</h1> 
                    </div>
                    }
                    
                    
                    {packageTitle === "estandar" ? 
                    <div style={{boxShadow : "1px 2px 1px 2px ", backgroundColor : "rgb(88, 88, 165)"}} className = "estandar">
                        <h1 style={{color: "white"}}>Estandar</h1> 
                    </div>
                    :
                    <div className = "estandar" onClick={change_Package}>
                        <h1>Estandar</h1> 
                    </div>
                    }

                    {packageTitle === "premium" ? 
                    <div style={{boxShadow : "1px 2px 1px 2px ", backgroundColor : "rgb(88, 88, 165)"}} className = "premium">
                        <h1 style={{color: "white"}}>Premium</h1> 
                    </div>
                    :
                    <div className = "premium" onClick={change_Package}>
                        <h1>Premium</h1> 
                    </div>
                    }

                    <div className="checkbox">
                        <label>Ofertar paquetes</label> <input type="checkbox" onChange={change_packageLockOut}/>
                    </div>

                </div>

                <div className="name_of_package">
                    <h6>Nombre del paquete</h6>
                    {package_name.name === "" ?  <input type="text" maxLength="80" id="name_of_package"></input> : <input type="text" maxLength="80" id="name_of_package" defaultValue={package_name.name} onFocus={onFocus_input}></input>}
                   
                </div>

                <div className="description_of_package">
                    <h6>Descripcion</h6>
                    {package_description.description === "" ? <textarea name="description" id="description_of_package"></textarea> : <textarea name="description" id="description_of_package" defaultValue={package_description.description} onFocus={onFocus_input}></textarea>}

                </div>

                <div className="delivery_time">

                    <div className="timeDelivery" onClick={change_Display}>
                        {timeDeliveryValue.category === "" ? <label>seleccione tiempo de delivery</label> : <label>{timeDeliveryValue.category}</label>}
                        

                        {timeDelivery === false ? 
                        
                            <ul style={{display : "none"}}>

                            </ul>
                        :
                            <ul style={{display : "block"}}>
                                <li onClick={changeDelivery}>1</li>
                                <li onClick={changeDelivery}>2</li>
                                <li onClick={changeDelivery}>3</li>
                                <li onClick={changeDelivery}>4</li>
                                <li onClick={changeDelivery}>5</li>
                                <li onClick={changeDelivery}>6</li>
                                <li onClick={changeDelivery}>7</li>
                                <li onClick={changeDelivery}>8</li>
                                <li onClick={changeDelivery}>9</li>
                                <li onClick={changeDelivery}>10</li>
                                <li onClick={changeDelivery}>11</li>
                                <li onClick={changeDelivery}>12</li>
                            </ul>
                    }

                        
                    </div>

                    <div className="timeLimits" onClick={change_Display}>
                        {timeLimitsValue.category === "" ? <label>Seleccione unidades de tiempo</label> : <label>{timeLimitsValue.category}</label>}
                        

                        {timeLimits === false ? 
                        
                        <ul style={{display : "none"}}>

                        </ul>
                    :
                        <ul style={{display : "block"}}>
                            <li onClick={changeDelivery}>Horas</li>
                            <li onClick={changeDelivery}>Dias</li>
                            <li onClick={changeDelivery}>Semanas</li>
                            <li onClick={changeDelivery}>Meses</li>
                            <li onClick={changeDelivery}>Año</li>
                        </ul>
                }

                    </div>
                </div>

                <div className="price">
                    
                        <h6>Precio</h6>
                        {package_price.price === "" ? <input type="number" id="price"/> : <input type="number" id="price" defaultValue={package_price.price} onFocus={onFocus_input}></input>}
                        
                    
                    
                    <div className="moneySelector" onClick={change_Display}>
                        {moneySelectorValue.category === "" ? <label>Moneda</label> : <label>{moneySelectorValue.category}</label>}

                        {moneySelector === false ?

                        <ul style={{display : "none"}}>

                        </ul>
                    :
                         <ul style={{display : "block"}}>
                            <li onClick={changeDelivery}>Pesos</li>
                            <li onClick={changeDelivery}>Dolares</li>
                            <li onClick={changeDelivery}>Euros</li>
                        </ul>

                    }

                    </div>
                </div>

                <div className="saveBtn">
                    
                    <button id="save" onClick={create_localStoragePackage}>guardar cambios de paquete</button>
                    <button id="delete" onClick={delete_localStoragePackage}>Borrar paquete</button>
                    
                </div>    


            </article> 
        </>
    )

    }
}

export default Packages;