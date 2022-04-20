
// contexto
import { My_Context } from "../../../../context/My_context";
import { useContext, useState } from "react";

const Profile = ({user_data, Data}) => {

    const contexto = useContext(My_Context);

    console.log(user_data)
    const {Ask_ProfileData} = contexto;

    const {UserName, Email, Id} = user_data;
    const {Description, Education_json, Habilities_json, Profile_picture} = Data;

    // JSON-parse 
    const Education = JSON.parse(Education_json);
    const Habilities = JSON.parse(Habilities_json);
    // JSON-parse

    const [Loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
    }, 2000);


    // update info en habilities/education
    const fetch_update_Json = async (e) => {

        // parametro para la llamada: Habilities_json o Education_json
        const params = e.target.id;
        // index del objeto a modificar
        const idx = e.target.parentNode.parentNode.id;
        // modifyKEY
        const change_data = e.target.parentNode.previousSibling.id;
        // modifyVALUE
        const value = e.target.previousSibling.value;

        let data;

        if(params === "Education_json"){
            data = Education;
        }else{
            data = Habilities;
        }
        
        console.log(change_data);
        console.log(idx);
        
        await fetch("http://127.0.0.1:3500/profile/update_Json/" + params, {
            method: "PUT",
            mode: "cors",
            body: JSON.stringify({
                "User_Id": Id,
                "jsonDoc": data,
                "modifyKEY": '$['+idx+'].'+change_data,
                "modifyVALUE": value
            }),
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            }
        }).then(async (res) => {

            console.log(res);
            setLoading(true);

            await fetch('http://127.0.0.1:3500/profile/selectProfile/' + Id, {
                        method: 'GET',
                        mode: 'cors'
            
                    }).then( (res) => {

                        res.json().then( (res) => {

                            console.log(res[0]);
                            Ask_ProfileData(res[0]);
                            localStorage.setItem('profile_data', JSON.stringify(res[0]));

                        })

                        setTimeout(() => {
                            setLoading(false);
                        }, 2000);

                    })
        }).catch( err => {
            console.log(err);
        })
    }
    
    const Update_json_educ_hab = (e) => {

        const classnameH3_parent = e.target.parentNode.parentNode.className;
        const div_parent = e.target.parentNode.parentNode.parentNode;

        let newdiv = document.createElement("div");
        let newInput = document.createElement("input");
        newInput.placeholder = "Cambia el valor"
        let newBtn = document.createElement("button"); 
        newBtn.innerHTML = "-->";

        newdiv.className = "container_input";
        newdiv.appendChild(newInput);
        newdiv.appendChild(newBtn);

        
        if(classnameH3_parent === "Escuela/Universidad/Curso" || classnameH3_parent === "Habilidades"){
            newBtn.id = div_parent.parentNode.id;
            div_parent.replaceChild(newdiv, div_parent.childNodes[1])
            
        }else if(classnameH3_parent === "Titulo" || classnameH3_parent === "Experiencia"){
            newBtn.id = div_parent.parentNode.id;
            div_parent.replaceChild(newdiv, div_parent.childNodes[3])
        }  

        newBtn.addEventListener("click", fetch_update_Json)
    }

    // agregar info nuevo en habilitites/education
    const agregate_info = async (e) => {

        const education_o_habilities = e.target.parentNode.parentNode.id;
        const first_input_value = e.target.parentNode.childNodes[1].value;
        const second_input_value = e.target.previousSibling.value;

        let body;
        let jsondoc1;
        let Json;

        if(education_o_habilities === "Habilities_json"){
            Json = Habilities;
            jsondoc1 = Habilities;
            body = [
                {"skills": first_input_value, "experience" : second_input_value}
            ]
        }else{
            Json = Education;
            jsondoc1 = Education;
            body = [
                {"escuela": first_input_value, "titulo": second_input_value}
            ]
        }

        console.log(Json)

        if( Json === "{}" ){
            await fetch("http://127.0.0.1:3500/profile/create_New/" + education_o_habilities, {
                method: "PUT",
                mode: "cors",
                body: JSON.stringify({
                    "User_Id" : Id,
                    "jsonDoc1": [
                        
                    ],
                    "jsonDoc2":body,
                }),
                headers: {
                        'Content-Type': 'application/json',
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                    }
            }).then( async (res) => {
                console.log(res);
                setLoading(true);

                await fetch('http://127.0.0.1:3500/profile/selectProfile/' + Id, {
                            method: 'GET',
                            mode: 'cors'
                
                        }).then( (res) => {
    
                            res.json().then( (res) => {
    
                                console.log(res[0]);
                                Ask_ProfileData(res[0]);
                                localStorage.setItem('profile_data', JSON.stringify(res[0]));
    
                            })
    
                            setTimeout(() => {
                                setLoading(false);
                            }, 2000);
    
                        })
            }).catch( err => {
                console.log(err);
            })
            
        }else{
            await fetch("http://127.0.0.1:3500/profile/create_New/" + education_o_habilities, {
                method: "PUT",
                mode: "cors",
                body: JSON.stringify({
                    "User_Id" : Id,
                    "jsonDoc1": Json,
                    "jsonDoc2": body,
                }),
                headers: {
                        'Content-Type': 'application/json',
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                    }
            }).then( async (res) => {
                console.log(res);

                setLoading(true);

                await fetch('http://127.0.0.1:3500/profile/selectProfile/' + Id, {
                            method: 'GET',
                            mode: 'cors'
                
                        }).then( (res) => {
    
                            res.json().then( (res) => {
    
                                console.log(res[0]);
                                Ask_ProfileData(res[0]);
    
                            })
    
                            setTimeout(() => {
                                setLoading(false);
                            }, 2000);
    
                        })
            }).catch( err => {
                console.log(err);
            })
        }

    }

    const agregate_div_infoDiv = (e) => {

        let container_info = e.target.parentNode;

        

        let div_container = document.createElement("div");
        div_container.className = "info_div";
        container_info.appendChild(div_container);

        let h3_escuela = document.createElement("h3");
        h3_escuela.className = "Escuela/Universidad/Curso";
        h3_escuela.id = "escuela";
        h3_escuela.innerHTML = "Escuela/Universidad/Curso";
        div_container.appendChild(h3_escuela);

        let input_1 = document.createElement("input");
        input_1.className = "container_input";
        div_container.appendChild(input_1)

        let h3_titulo = document.createElement("h3");
        h3_titulo.className = "Titulo";
        h3_titulo.id = "titulo";
        h3_titulo.innerHTML = "Titulo";
        div_container.appendChild(h3_titulo)

        let input_2 = document.createElement("input");
        input_2.className = "container_input";
        div_container.appendChild(input_2);

        let agregate_btn = document.createElement("button");
        agregate_btn.className = "agregate_btn";
        div_container.appendChild(agregate_btn);

        agregate_btn.onclick = agregate_info;

    }

    // eliminate info en habilities/education
    const eliminate_json = async (e) => {

        let id = e.target.id;
        let education_o_habilities = e.target.parentNode.parentNode.id;
        let Json;

        console.log(id, education_o_habilities)

        if(education_o_habilities === "Education_json"){
            Json = Education;
        }else{
            Json = Habilities;
        }

        await fetch("http://127.0.0.1:3500/profile/delete_Json/"+ education_o_habilities, {
            method: "PUT",
            mode: "cors",
            body: JSON.stringify({
                "User_Id": Id,
                "jsonDoc": Json,
                "removeJSON": '$['+id+']'
            }),
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            }
        }).then( async (res) => {

            console.log(res);
            setLoading(true);

            await fetch('http://127.0.0.1:3500/profile/selectProfile/' + Id, {
                        method: 'GET',
                        mode: 'cors'
            
                    }).then( (res) => {

                        res.json().then( (res) => {

                            console.log(res[0]);
                            Ask_ProfileData(res[0]);
                            localStorage.setItem('profile_data', JSON.stringify(res[0]));

                        })

                        setTimeout(() => {
                            setLoading(false);
                        }, 2000);

                    })
        }).catch( err => {

            console.log(err)

        })

    }


    if(Loading === true){
        return(
            <>

                <div class="loader"></div>

            </>
        )
    }else{
        return(
        
        <>
        <section id="Image-backgroud">
            <div>
                <button>Mas informacion</button>
                <button><img src="/images/menu.png" alt="" /></button>
            </div>
        </section>

        <div className="perfile_data">
            { Profile_picture === null ? <img src="/images/foto-sinperfil.jpeg" alt="Img_perfil" /> : <img src={Profile_picture} alt="Img_perfil" /> }
            <h1>{UserName}</h1>
            <h6>{Email}</h6>
        </div>
        
        <article className="Description">
            <h3>Sobre mi</h3>
            {Description !== "{}" ? <p>{Description}</p> : <></>}
        </article>

        <article className="message">
            <h3>Si deseas contactarme, enviame un mensaje </h3>
            <button>Contactame</button>
        </article>

        <article className="more_information">

            <div className="more_information_div" id="Education_json">

               <h1 className="title">Educacion</h1>
               <button onClick={agregate_div_infoDiv}>+ Agregar</button>
                { Education_json === "{}" ?
                <>
                </>
                : 
                Education.map((element, idx) => {
                    return(
                        
                        <div className="info_div" id= {idx}>
                            <h3 className="Escuela/Universidad/Curso" id="escuela"> Escuela/Universidad/Curso <button onClick={Update_json_educ_hab}><img src="/images/boligrafo.png" alt="boligrafo" /></button> </h3>
                            <p><li>{element.escuela}</li></p>
                            <h3 className="Titulo" id="titulo"> Titulo <button onClick={Update_json_educ_hab}><img src="/images/boligrafo.png" alt="boligrafo" /></button> </h3>
                            <p><li>{element.titulo}</li></p>
                            <button className="eliminate_btn" id={idx} onClick={eliminate_json}>Eliminar</button>
                        </div>
                    
                    )
                })}

            </div>

            <div className="more_information_div" id="Habilities_json">

                <h1 className="title">Destrezas</h1>
                <button onClick={agregate_div_infoDiv}>+ Agregar</button>
                { Habilities_json === "{}" ? 
                <>
                </>
                : 
                Habilities.map((element, idx) => {
                    return(
                        <div className="info_div" id={idx}>
                            <h3 className="Habilidades" id="skills"> Habilidades <button onClick={Update_json_educ_hab}><img src="/images/boligrafo.png" alt="boligrafo" /></button> </h3>
                            <p><li>{element.skills}</li></p>
                            <h3 className="Experiencia" id="experience"> Experiencia <button onClick={Update_json_educ_hab}><img src="/images/boligrafo.png" alt="boligrafo" /></button> </h3>
                            <p><li>{element.experience}</li></p>
                            <button className="eliminate_btn" id={idx} onClick={eliminate_json}>Eliminar</button>
                        </div>
                    )
                })}

            </div>
            
        </article>
        </>
    )
}

    
}

export default Profile;
