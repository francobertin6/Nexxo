
// import react-router
import { useNavigate } from "react-router-dom";

// import contexto and useState

import { useContext, useState, useEffect } from "react";
import { My_Context } from "../../../../context/My_context";


const Overview = ({Ask_for_overviewData}) => {

    // loading state
    const [loading, setloading] = useState(true)

    useEffect(() => {

        setTimeout(() => {
            setloading(false);
        }, 1000);
        
    },[loading])

    const Navigate = useNavigate();

    let titulo;
    let categoria;
    let etiquetas;

  
    const Overview_data = JSON.parse(localStorage.getItem("overview"));
    console.log(Overview_data);

    if(Overview_data === null){
        titulo = null;
        categoria = null;
        etiquetas = null;
    }else{
        titulo = Overview_data.title;
        categoria = Overview_data.category;
        etiquetas = Overview_data.tags;
    }
    
    // contexto

    const contexto = useContext(My_Context);

    const {Categories} = contexto

    // category-Menus
    const [CategoryInput1, setCategoryInput1] = useState(false);
    const [CategoryInput2, setCategoryInput2] = useState(false);


    const change_categoryDisplay = (e) => {

    let input_change = e.target.parentNode.parentNode.className;

    if(input_change === "category_input1" && CategoryInput1 === false){
        setCategoryInput1(true)
    }else if(input_change === "category_input2" && CategoryInput2 === false){
        setCategoryInput2(true)
    }else if(input_change === "category_input1" && CategoryInput1 === true){
        setCategoryInput1(false)
    }else if(input_change === "category_input2" && CategoryInput2 === true){
        setCategoryInput2(false)
    }
    }

    // useState title/function
    const [Title, useTitle] = useState({ title: titulo })
    const Change_title = (e) => {
        const event_value = e.target.value;
        useTitle({title: event_value})
    }
    // useState category/function
    const [Category, UseCategory] = useState({ category: categoria })
    const Change_category = (e) => {
        const event_value = e.target.innerHTML;
        setCategoryInput1(false);
        UseCategory({ category: event_value})
    }
    // useState tags/function
    const [ Tags ] = useState({ tags : etiquetas })
    const Change_tags = async (e) => {
     
        const parentInput = e.target.parentNode.lastChild;
        console.log(parentInput.children)

        if(e.keyCode === 13){
            console.log("este es el enter")
            let event_name = e.target.value;

            let tag = document.createElement("div");
            tag.className = "tags";
            let label_tag = document.createElement("label");
            label_tag.innerHTML = event_name;
            tag.appendChild(label_tag);
            let x = document.createElement("button");
            x.innerHTML = "x";
            tag.appendChild(x);

            document.getElementById("input_tag").value = "";
            parentInput.appendChild(tag);
    
        }else{
            console.log("este no es enter")
        }

    }

    // overview data function -- pasa los datos de overview a su elemento padre
    const overviewData = () => {

        let tag_container = document.getElementById("Tags").children;
        tag_container = [...tag_container].map( element => {
            return element.firstChild.textContent;
        });

        

        console.log(tag_container);

        let info_object = {
            title : Title.title,
            category : Category.category,
            tags : tag_container
        }

        console.log(info_object);

        Ask_for_overviewData(info_object);
        localStorage.setItem( "overview", JSON.stringify(info_object))
        Navigate("/seller/createProduct/pricing");
    }

    if(loading === true){
        return(
            <>
                <div class="loader"></div>
            </>
        )
    }
    else{
    return(
        <>
        <section id="Overview_container">

        <article id="title_container">
             <div className="title">
                <h1>Titulo</h1>
                <textarea name="titulo_text"  maxlength="80" onChange={Change_title}>{Title.title === null ? "" : Title.title}</textarea>
            </div>
        </article>
           
        <article id="category_container">
            <div className="category_input1">

                <div className="open_selector" onClick={change_categoryDisplay}>
                   { Category.category === null ? <label>Selecciona una categoria</label> : <label>{Category.category}</label> }
                </div>
                

                {CategoryInput1 === false ?  
                <ul style={{display : "none"}}>
                   
                </ul> 
                :
                 <ul style={{display : "block"}} className="Category">
                    {Categories.map( (element) => {
                        return(
                            <li onClick={Change_category}>{element}</li>
                        )
                    })}
                </ul>
                }

            </div>

            <div className="category_input2">

            <div className="open_selector" onClick={change_categoryDisplay}>
                <label>Selecciona una subcategoria</label> 
            </div>


            {CategoryInput2 === false ?  
            <ul style={{display : "none"}}>
                <li>loren ipsum</li>
                <li>loren ipsum</li>
                <li>loren ipsum</li>
                <li>loren ipsum</li>
            </ul> 
            :
            <ul style={{display : "block"}} className="subCategory">
                <li>loren ipsum</li>
                <li>loren ipsum</li>
                <li>loren ipsum</li>
                <li>loren ipsum</li>
            </ul>
            }

            </div>
        </article>

        <article id="tags_container">
            <h1>Tags de buscar</h1>
            <input type="text"  placeholder="establezca un tag" onKeyDown={Change_tags} id="input_tag"/>
            <div id="Tags">
                { Tags.tags === null ? <></> : etiquetas.map( element => {
                    return(
                        <>
                            <div className="tags"><label>{element}</label> <button>x</button></div>
                        </>
                    )
                })}
            </div>
        </article>
            
        </section>

        <div className="overview_options">
            <button>Cancelar</button>
            <button onClick={overviewData}>Seguir</button>
        </div>

        </>
    )
            }
}

export default Overview;