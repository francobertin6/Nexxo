
// import contexto, react
import { My_Context } from "../../../context/My_context";
import { useContext, useEffect, useState } from "react/cjs/react.production.min";

// import profile
import Profile from "./Profile/Profile";


const ProfileContainer = () => {

    const contexto = useContext(My_Context);

    return(
        <>
            <Profile />
        </>
    )
    
}

export default ProfileContainer;