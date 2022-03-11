
const Dropdown = ({value, user}) => {

    console.log(user);

    const {Email, UserName} = user;

    if(value === true){
        
        return(

        <div id="Profile_Dropdown">

            <div className="account">
                <button>FR</button>
                <h3>{UserName}</h3>
                <h6>{Email}</h6>

                <button className="become_seller">Convertirse en vendedor</button>
            </div>

            <div className="profile_div1">
                <li><a href="https://www.google.com/search?q=account&rlz=1C1CHBF_esAR873AR873&oq=acount&aqs=chrome.1.69i57j0i10i433l2j0i10i131i433j0i3i10j0i10j0i10i131i433j0i10i433j0i10l2.2423j1j7&sourceid=chrome&ie=UTF-8">Perfil</a></li>
                <li><a href="https://www.google.com/search?q=account&rlz=1C1CHBF_esAR873AR873&oq=acount&aqs=chrome.1.69i57j0i10i433l2j0i10i131i433j0i3i10j0i10j0i10i131i433j0i10i433j0i10l2.2423j1j7&sourceid=chrome&ie=UTF-8">Mis pedidos</a></li>
                <li><a href="https://www.google.com/search?q=account&rlz=1C1CHBF_esAR873AR873&oq=acount&aqs=chrome.1.69i57j0i10i433l2j0i10i131i433j0i3i10j0i10j0i10i131i433j0i10i433j0i10l2.2423j1j7&sourceid=chrome&ie=UTF-8">Favoritos</a></li>
            </div>

            <div className="profile_div2">
                <li><a href="https://www.google.com/search?q=account&rlz=1C1CHBF_esAR873AR873&oq=acount&aqs=chrome.1.69i57j0i10i433l2j0i10i131i433j0i3i10j0i10j0i10i131i433j0i10i433j0i10l2.2423j1j7&sourceid=chrome&ie=UTF-8">Historial de Facturacion</a></li>
                <li><a href="https://www.google.com/search?q=account&rlz=1C1CHBF_esAR873AR873&oq=acount&aqs=chrome.1.69i57j0i10i433l2j0i10i131i433j0i3i10j0i10j0i10i131i433j0i10i433j0i10l2.2423j1j7&sourceid=chrome&ie=UTF-8">Ajustes</a></li>
                <li><a href="https://www.google.com/search?q=account&rlz=1C1CHBF_esAR873AR873&oq=acount&aqs=chrome.1.69i57j0i10i433l2j0i10i131i433j0i3i10j0i10j0i10i131i433j0i10i433j0i10l2.2423j1j7&sourceid=chrome&ie=UTF-8">Cerrar sesion</a></li>
            </div>

        </div>

        )

    }else{

        return(
           <></> 
        )
        
    }
    
}

export default Dropdown;