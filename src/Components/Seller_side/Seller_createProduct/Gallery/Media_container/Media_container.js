
import { useState } from "react";

const Media_container = ({type}) => {

    const [files, setfiles] = useState([]);

    // files functions

    const fileSearch = (e) => { // clickea el input type file para poder buscar los archivos que queremos subir
        e.preventDefault();

        let inputFile = e.target.nextSibling;
        inputFile.click();

        console.log(inputFile.value)

    }

    const fileLoad = (e) => { // cuando el input type file cambia se guarda el file en el estado y se pasa a procesar el archivo
        e.preventDefault();

        setfiles([...files, e.target.files])
        console.log(e.target.files[0])

        processFiles(e.target.files[0], e.target.parentNode);
    }

    const processFiles = (file, parentElement) => { // aca se procesa el archivo para que el navegador pueda procesar la img, se crea con el resultado del reader un elemento img y se ubica dentro del elemento addmedia
        
        let typeOf_File = parentElement.parentNode.id;
        
        let doctype = file.type;
        let childrensArray = Array.from(parentElement.children);
        let parentHeight = parentElement.offsetHeight;
        let parentWidth = parentElement.offsetWidth - 4;
        

        let validType; // tipos de datos a validar 

        if(typeOf_File === "images"){

            validType = ["image/jpeg", "image/png"];
        }
        else if(typeOf_File === "video"){

            validType = ["video/mp4"];
        }
        else if(typeOf_File === "documents"){

            validType = ["application/doc","application/docx","application/xml,application/mswordapplication/vnd","application/openxmlformats-officedocument","application/wordprocessingml.document","application/pdf"];
        }
        

        if(validType.includes(doctype)){
            let reader = new FileReader();
            let id = "file-" + Math.random().toString(32).substring(7);
            
            reader.addEventListener("load", (e) => {
                const fileUrl = reader.result;
                console.log(typeOf_File)

                for (let index = 0; index < childrensArray.length; index++) {
                    const element = childrensArray[index];
                    element.remove();
                }

                if(typeOf_File === "images"){

                    let img = document.createElement("img");
                    img.id = id;
                    img.src = fileUrl;
                    img.width = parentWidth;
                    img.height = parentHeight;

                    parentElement.appendChild(img);
                }
                else if(typeOf_File === "video"){
                    let video = document.createElement("video");
                    video.id = id;
                    video.width = parentWidth;
                    video.height = parentHeight;
                    video.setAttribute("controls", true);

                    let source = document.createElement("source");
                    video.appendChild(source);

                    source.src = fileUrl;

                    parentElement.appendChild(video);
                }
                else if(typeOf_File === "documents"){

                    console.log(fileUrl)
                    let url = fileUrl.slice(28);

                    let pdf_img = document.createElement("img");
                    pdf_img.src = "/images/pdf.png";
                    pdf_img.className = "addMedialogo";

                    let documentName = document.createElement("p");
                    documentName.textContent = file.name;

                    let pdfLink = document.createElement("a");
                    pdfLink.href = "https://drive.google.com/uc?id="+ url +"&embedded=true";
                    pdfLink.target = "_blank"; 

                    let new_btn = document.createElement("button");
                    new_btn.textContent = "Abrir pdf"
                    pdfLink.appendChild(new_btn);

                    parentElement.appendChild(pdf_img);
                    parentElement.appendChild(documentName);
                    parentElement.appendChild(pdfLink)

                }
                
                
            })

            reader.readAsDataURL(file);

        }else{
            alert(doctype + " no es un archivo valido");
        }
    }
    
    // ya el front reconoce la imagen solo queda ajustar el dom, ahora necesito pasarlo al servidor

    // files functions

    if(type === "imagenes"){
        return(
        <article className="Mediacontainer">
            <h3>Imagenes</h3>
            <h6>da ejemplos visuales de tus trabajos realizados</h6>

            <div className="addContainer" id="images">
                <div className="addMedia">
                    <img src="/images/imagen.png" alt="" className="addMedialogo"/>
                    <p>Busca una foto para subir</p>
                    <button onClick={fileSearch}>Buscar</button>
                    <input type="file" hidden accept="image/*" onChange={fileLoad}/>
                </div>
                <div className="addMedia">
                    <img src="/images/imagen.png" alt="" className="addMedialogo"/>
                    <p>Busca una foto para subir</p>
                    <button onClick={fileSearch}>Buscar</button>
                    <input type="file" hidden accept="image/*" onChange={fileLoad}/>
                </div>
                <div className="addMedia">
                    <img src="/images/imagen.png" alt="" className="addMedialogo"/>
                    <p>Busca una foto para subir</p>
                    <button onClick={fileSearch}>Buscar</button>
                    <input type="file" hidden accept="image/*" onChange={fileLoad}/>
                </div>
            </div>

        </article>
        )
    }
    else if(type === "videos"){
        return(
        <article className="Mediacontainer">
            <h3>Videos</h3>
            <h6>captura la atencion de tus clientes con un video que muestre tu trabajo</h6>

            <div className="addContainer" id="video">
                <div className="addMedia">
                    <img src="/images/tocar.png" alt="" className="addMedialogo"/>
                    <p>Busca un video para subir</p>
                    <button onClick={fileSearch}>Buscar</button>
                    <input type="file" hidden accept="video/*" onChange={fileLoad}/>
                </div>
            </div>

        </article>
        )
    }
    else if(type === "documentos"){
        return(
        <article className="Mediacontainer">
        <h3>Documentos</h3>
        <h6>sube tu PDF explicando mas tus trabajos</h6>

        <div className="addContainer" id="documents">
                <div className="addMedia">
                    <img src="/images/archivo-pdf.png" alt="" className="addMedialogo"/>
                    <p>Busca un documento para subir</p>
                    <button onClick={fileSearch}>Buscar</button>
                    <input type="file" hidden accept=".pdf" onChange={fileLoad}/>
                </div>
                <div className="addMedia">
                    <img src="/images/archivo-pdf.png" alt="" className="addMedialogo"/>
                    <p>Busca un documento para subir</p>
                    <button onClick={fileSearch}>Buscar</button>
                    <input type="file" hidden accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/pdf" onChange={fileLoad}/>
                </div>
        </div>

    </article>
        )
    }
}

export default Media_container;