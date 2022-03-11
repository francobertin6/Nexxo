
// import react y react-router
import { useState } from "react"
import { useNavigate } from "react-router-dom";

// import contexto
import { My_Context } from "../../../../context/My_context";
import { useContext } from "react";

const LogIn = ({Register_change}) => {

    // context
    const contexto = useContext(My_Context);
    const {Ask_for_toggleHeader, Ask_UserInfo} = contexto;

    // react-router
    let Navigate = useNavigate();

    const [Register, setRegister] = useState(Register_change);
    const [DataReg, setDataReg] = useState({});
    const [DataLogin, setDataLogin] = useState({});

    const set_type_data = () => {

        if(Register === true){
            setRegister(false)
        }else{
            setRegister(true)
        }

    }

    // REGISTRAR USUARIO

    // setea data en DataReg para registrar un usuario 
    const Onchange_Data = (e) => {

        e.preventDefault();

        if(document.getElementById("password").value !== document.getElementById("confirm_password").value){

            setDataReg(undefined);

        }else{

            setDataReg({
            UserName: document.getElementById("Name").value,
            Email: document.getElementById("email").value,
            Password: document.getElementById("password").value

        })

        }
    }
    // registra un usuario con el boton #reg_btns solo si todos los datos estan completos
    const Register_user = async() => {

        if(DataReg !== undefined){

            console.log(DataReg)

            await fetch("http://127.0.0.1:3500/user/register", {
            method: 'POST',
            mode: "cors",
            body: JSON.stringify(DataReg),
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
            }).then( res => {
                console.log(res);
            })
        }else{
            console.log("estan mal los datos")
        }

    }


    // LOGIN USUARIO

    // setea data en DataLogin para hacer ingresar un usuario
    const Onchange_DataLogin = (e) => {

        e.preventDefault();

        const esCorreoElectronico = correoElectronico => /\S+@\S+/.test(correoElectronico);

        if(esCorreoElectronico(document.getElementById("Name_login").value)){
            
            setDataLogin({
                Email: document.getElementById("Name_login").value,
                Password: document.getElementById("password_login").value
            })

        }else{

            setDataLogin({
                UserName: document.getElementById("Name_login").value,
                Password: document.getElementById("password_login").value
            })

        }

    }

    // loguea un usuario con el boton #reg_btns solo si los datos concuerdan con los de un usuario previamente registrado
    const Login_user = async(e) => {

        e.preventDefault();

        console.log(DataLogin);

        if((DataLogin.UserName !== "" || DataLogin.Email !== "") && DataLogin.Password !== ""){

            await fetch("http://127.0.0.1:3500/user/login", {
            method: 'POST',
            mode: "cors",
            body: JSON.stringify(DataLogin),
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
        }).then( res => {

            if(res.status === 200){
                Navigate("/index");
                Ask_for_toggleHeader(true);

                // intento de que la promesa me devuelva los datos del usuario
                res.json().then( res => {
                    console.log(res);
                    Ask_UserInfo(res);
                });

            }else{
                return null
            }

        }).catch( err => {
            console.log(err);
        })
        
        }else{
            
            console.log("datos incompletos")

        }

    }


    if(Register === true){

        return(

        <div id="Login_register">
            
            <div id="login_title">
                <h1>Unete a Nexxo</h1>
            </div>

            <div id="social_logs">
                <button id = "facebookBtn" >Continuar con Facebook</button>
                <button id= "googleBtn" >Continuar con Google</button>
            </div>

            <div id="login_inputs">
                <input type="email" id="email" placeholder="Correo electronico" required onChange={Onchange_Data}></input>
                <input type="text" id="Name" placeholder="Nombre de usuario" required onChange={Onchange_Data}/>
                <input type="password" id="password" placeholder="Contraseña" required onChange={Onchange_Data}/>
                <input type="password" id="confirm_password" placeholder="Confirmar Contraseña" required onChange={Onchange_Data}/>
                <button id ="Reg_btns" onClick={Register_user}>Continuar</button>
            </div>

            <div id="login_footer">
                <p>¿ya eres miembro?</p>
                <button id ="logIn" onClick={set_type_data}>Iniciar sesión</button>
            </div>

        </div>

    )
    }else{
        return(

            <div id="Login_register">
                
                <div id="login_title">
                    <h1>Unete a Nexxo</h1>
                </div>
    
                <div id="social_logs">
                    <button id = "facebookBtn" >Continuar con Facebook</button>
                    <button id= "googleBtn" >Continuar con Google</button>
                </div>
    
                <div id="login_inputs">
                    <input type="text" id="Name_login" placeholder="Correo electronico o nombre" required onChange={Onchange_DataLogin}/>
                    <input type="password" id="password_login" placeholder="contraseña" required onChange={Onchange_DataLogin}/>
                    <button id ="Reg_btns" onClick={Login_user}>Continuar</button>
                </div>
    
                <div id="login_footer">
                    <p>¿aun no eres miembro?</p>
                    <button id ="logIn" onClick={set_type_data}>Registrarse</button>
                </div>
    
            </div>
    
        )
    }

    
}

export default LogIn;