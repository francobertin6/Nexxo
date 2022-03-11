
// import Search_container
import Search_container from "./Search_container/Search_container";

// import Login
import LogIn from "./Login/Login";

// import react
import { useState } from "react";

// import contexto
import { My_Context } from "../../../context/My_context";
import { useContext } from "react";

const LandingPage = () => {

    const contexto = useContext(My_Context);

    const {Ask_for_toggleHeader} = contexto;

    const [Login, setLogin] = useState(false);
    const [Register_change, setRegister_change] = useState(true);

    const Activate_login = (e) => {
        

        if(Login === false){
            setLogin(true);
        }else{
            setLogin(false);
        } 

        if(e.target.className === "Login_btn"){
            setRegister_change(false);
        }
        else if(e.target.className === "Join_btn"){
            setRegister_change(true);
        }

    }

    Ask_for_toggleHeader(false);

    if(Login === false){

        return(

        <section id="Landing_container">
            
            <Search_container Activate_login = {Activate_login}/>

        </section>
    )

    }else{
        return(

            <section id="Landing_container">
                
                <Search_container Activate_login = {Activate_login}/>


                <LogIn Register_change = {Register_change}/>
    
            </section>
        )
    }

    
}

export default LandingPage;