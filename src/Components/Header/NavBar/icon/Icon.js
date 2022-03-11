
const Icon = (props) => {
    return(
        <div className="icon_img">
            <img src={props.src} alt="imagen"/>
            {props.children}
        </div>
    )
}

export default Icon;