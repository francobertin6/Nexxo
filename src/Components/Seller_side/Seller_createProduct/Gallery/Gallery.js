
import Media_container from "./Media_container/Media_container";

const Gallery = () => {
    return(
        <section id="Gallery_container">

            <div className="title">
                <h1>imagenes, videos y documentos para mostrar tu servicio</h1>
            </div>

            <Media_container type= "imagenes"/>
            <Media_container type= "videos"/>
            <Media_container type= "documentos"/>
        </section>
    )
}

export default Gallery;