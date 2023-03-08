
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Create_requirements from "./Create_questions/Create_questions";
import Questions from "./Questions/Questions";

const Requirements = ({Ask_for_requirementsData}) => {

    let Navigate = useNavigate();

    console.log(JSON.parse(localStorage.getItem("Requirements")))

    const [Questions_data, setQuestions_data] = useState(JSON.parse(localStorage.getItem("Requirements")));
    const [Create_questions, setCreate_questions] = useState(false)
    const [loading, setloading] = useState(true)

    // create_questions (requirements)
    const create_Requirements = () => {
        if(Create_questions === false){
            setCreate_questions(true);
        }else{
            setCreate_questions(false);
        }
    }

    // pushea question en Question_data
    const AskQuestions = (value) => {

        setloading(true);

        console.log(" requerimients askQuestion: " + value)

        if(JSON.parse(localStorage.getItem("Requirements")) === null){
            localStorage.setItem("Requirements", JSON.stringify([value]));
            setQuestions_data([value]);
        }else{
            localStorage.setItem("Requirements", JSON.stringify([...Questions_data, value]));
            setQuestions_data([...Questions_data, value]);
        }

        setTimeout(() => {
            setloading(false);
        }, 500);
        
    }

    const Delete_QuestionsData = (value) => {

        let id = value.target.parentNode.id;
        console.log(id)

        const trueArray = Questions_data

        // investigar esta linea
        const NewArray = trueArray.splice(id, 1);

        console.log(NewArray);

        setloading(true);

        setQuestions_data(trueArray);

        setTimeout(() => {
            setloading(false)
        }, 500);

    }

    // continueBtns
    const ContinueBtn = () => {
        console.log(Questions_data)
        Ask_for_requirementsData(Questions_data);
        localStorage.setItem("Requirements", JSON.stringify(Questions_data));

        Navigate("/seller/createProduct/gallery")
    }


    useEffect( () => {

        setTimeout(() => {
            setloading(false)
        }, 500);

    }, [loading])

    // crear loading para poder cargar los datos en question data
   
    if(loading === true){

        return(
            <>
                <div class="loader"></div>
            </>
        )
    }
    else if((Create_questions === false && JSON.parse(localStorage.getItem("Requirements")) !== null && loading !== true)){
         return(
            <>
            <section id="Requirements_container">

                <div className="title">
                    <h1>Pregunta al cliente lo que consideres necesario para poder realizar tu servicio</h1>
                    <h3>puedes conseguirlo como un texto, multiple opcion o un documento</h3>
                </div>

                {Questions_data.map( (element, idx) => {
                   
                    return(
                        <>
                            <Questions type = {element.type} question = {element.question} value = {element.value} id = {idx} Delete_QuestionsData = {Delete_QuestionsData}/>
                        </>
                    )
                    
                })}
                
                <button onClick={create_Requirements} className= "addrequirements">+ Añadir otro requerimiento</button>

            </section>

            <div id="continueBtns_Requirements"> 
                <button onClick={ContinueBtn}>continuar</button>
            </div>
            </>
        )
    }
    else if((Create_questions === false && JSON.parse(localStorage.getItem("Requirements")) === null && loading !== true)){
        return(
            <>
            <section id="Requirements_container">

                <div className="title">
                    <h1>Pregunta al cliente lo que consideres necesario para poder realizar tu servicio</h1>
                    <h3>puedes conseguirlo como un texto, multiple opcion o un documento</h3>
                </div>
                
                <button onClick={create_Requirements} className= "addrequirements">+ Añadir otro requerimiento</button>

            </section>

            <div id="continueBtns_Requirements"> 
                <button onClick={ContinueBtn}>continuar</button>
            </div>
            </>
        )
    }else{
        return(
            <section id="Requirements_container">

                <div className="title">
                    <h1>Pregunta al cliente lo que consideres necesario para poder realizar tu servicio</h1>
                    <h3>puedes conseguirlo como un texto, multiple opcion o un documento</h3>
                </div>

                <Create_requirements AskQuestions = {AskQuestions} create_Requirements = {create_Requirements}/>

            </section>
        )
    }
   
}



    



export default Requirements;