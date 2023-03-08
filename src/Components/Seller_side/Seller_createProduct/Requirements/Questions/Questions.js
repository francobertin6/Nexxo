

const Questions = ({type, question, value, id, Delete_QuestionsData}) => {

    const deleteQuestion = (value) => {
        Delete_QuestionsData(value);
    }

    if(type !== "multipleChoise"){
        return(
        <>
            <div className="question_container" id={id}>
                <h3>{type}</h3>
                <br />
                <p>{question}</p>
                <button onClick={deleteQuestion}>X</button>
            </div>
        </>
    ) 
    }else{
        return(
            <>
               <div className="question_container" id={id}>
                    <h3>{type}</h3>
                    <br />
                    <p>{question}</p>
                    <br />
                    <div className="choices">
                         {value.map( (element) => {
                        return(
                            <p className="choice">
                                {element}
                            </p>
                        )
                    })}
                    </div>
                   <button onClick={deleteQuestion}>X</button>
                </div> 
            </>
        )
    }
   
}

export default Questions;