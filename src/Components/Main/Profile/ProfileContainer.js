// import react-router

import { useParams } from "react-router-dom";

// import contexto, react
import { My_Context } from "../../../context/My_context";
import { useContext, useEffect, useState } from "react";

// import profile
import Profile from "./Profile/Profile";


const ProfileContainer = () => {

    const contexto = useContext(My_Context);

    const {User_Data, ProfileData} = contexto;

    let {Params} = useParams();


    console.log(ProfileData, User_Data);

    if(Params !== "profile"){
        return(
            <>
            </>
        )
    }else{
      return(

        <>
            <Profile user_data = {User_Data} Data = {ProfileData}/>
        </>

        )  
    }
    
}

export default ProfileContainer;