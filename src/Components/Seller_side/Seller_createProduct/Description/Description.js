
// react

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Description = ({Ask_for_descriptionData}) => {

    let Navigate = useNavigate();

    const [localstorageText] = useState(JSON.parse(localStorage.getItem("description")))
    const [textValue, settextValue] = useState({});


    const change_textValue = (e) => {

        let textValue = e.target.value;
        console.log(JSON.parse(localStorage.getItem("description")))
        
        settextValue({
            description : textValue
        })

        if((localStorage.getItem("description") !== null) && (textValue === "")){
            localStorage.removeItem("description");
        }

    }

    const ask_for_title = () => {
        Ask_for_descriptionData(textValue);

        localStorage.setItem("description", JSON.stringify(textValue));
        Navigate("/seller/createProduct/requirements");
    }

    useEffect(() => {
        if(localstorageText !== {}){

            settextValue({
                description : localstorageText.description
            })
        }
        
    }, [])

    return(
        <section id="Description_container">

            <div className="title">
                <h3>Descripcíon</h3> <br />
                <h6>crear una descripcíon acorde al servicio o producto que decidas promocionar</h6>
            </div>
             
            <div className="textarea_container">
                {localStorage.getItem("description") !== null ? <textarea rows="10" cols="50" maxlength="800" onChange={change_textValue} id="textValue" defaultValue={localstorageText.description}></textarea> : <textarea rows="10" cols="50" maxlength="800" onChange={change_textValue} id="textValue"></textarea>}
            </div>

            <div className="btns_container">
                <button className="continue_btn" onClick={ask_for_title}>Continuar</button>
            </div>

        </section>
    )
}

export default Description;