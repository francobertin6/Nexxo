
// import contexto
import { My_Context } from "../../context/My_context";
import { useContext } from "react";

// import Dropdown
import Dropdown from "./Dropdown/Dropdown";


const Profile_dropdown = () => {

    const contexto = useContext(My_Context);

    const {Profile_Dropdown, User_Data} = contexto;

    console.log(User_Data)
    
    return(
        <>
            <Dropdown value = {Profile_Dropdown} user = {User_Data}/>
        </>
    )

}

export default Profile_dropdown;