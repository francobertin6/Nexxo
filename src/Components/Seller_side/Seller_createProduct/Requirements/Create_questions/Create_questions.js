
import { useState } from "react"

const Create_requirements = ({AskQuestions, create_Requirements}) => {

    const [Optionform, setOptionform] = useState("text")

    const select_optionForm = (e) => {

        e.preventDefault();

        setOptionform(e.target.value)
    }

    const AgregateOption = () => {

        let input = document.createElement("input");
        input.placeholder = "Agregar opcion";
        input.type = "text";

        document.getElementById("multiple_choise_container").appendChild(input);
    }

    // agregar requerimiento
    const SaveMessage = () => {
        
        let value = "";
        let message = document.getElementById("Message").value;

        if(Optionform !== "multipleChoise"){
            value = []
        }else{

            value = Array.from(document.getElementById("multiple_choise_container").children).map( (element) => {
                return element.value
            })

            console.log(value)
        }
    
        AskQuestions({
            type: Optionform,
            question: message,
            value: value
        });

        create_Requirements()
    }

    // cancelar requerimiento
    const CancelMessage = () => {
        create_Requirements();
    }

    if(Optionform !== "multipleChoise"){

    return(
        <article className="Question_container">

            <div className="Question">
                <h4>Pregunta</h4>
                <textarea name="question" cols="30" rows="10" id="Message"></textarea>
            </div>

            <div className="form_container">
                <h4>En que forma va a responder el cliente</h4>
                <select name="form" onClick={select_optionForm}>
                    <option value= "text">Texto</option>
                    <option value= "multipleChoise">Multiple opcion</option>
                    <option value= "attachment">archivo adjunto</option>
                </select>
            </div>

            <div className="btns_container">
                <button onClick={SaveMessage}>Agregar</button>
                <button onClick={CancelMessage}>Cancelar</button>
            </div>

        </article>
    )

    }else{
        return(
            <article className="Question_container">

            <div className="Question">
                <h4>Pregunta</h4>
                <textarea name="question" cols="30" rows="10" id="Message"></textarea>
            </div>

            <div className="form_container">
                <h4>En que forma va a responder el cliente</h4>
                <select name="form" onClick={select_optionForm}>
                    <option value= "text">Texto</option>
                    <option value= "multiple_choise">Multiple opcion</option>
                    <option value= "attachment">archivo adjunto</option>
                </select>
            </div>

            <div className="multiple_choise_container" >
                <div id="multiple_choise_container">
                    <input type="text" placeholder="Agregar opcion" />
                    <input type="text" placeholder="Agregar opcion" />
                </div>
                <button id="addOption" onClick={AgregateOption}>+ Agregar nueva opcion</button>
            </div>

            <div className="btns_container">
                <button onClick={CancelMessage}>Cancelar</button>
                <button onClick={SaveMessage}>Agregar</button>
            </div>

            </article>
        )
    }
}

export default Create_requirements