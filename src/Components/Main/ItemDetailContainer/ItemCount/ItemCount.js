// import react/contexto
import { useState, useContext } from "react";
import { My_Context } from "../../../../context/My_context";

// import react-router

import { Link } from "react-router-dom";


const ItemCount = ({name, stock, initial, onAdd, notification, id}) => {

    const contexto = useContext(My_Context);

    const { Duplicated_item } = contexto;

    const [number, setNumber] = useState(initial);

    const Add_one = () => {
        if(number >= stock){
            return undefined;
        }else{
            setNumber(number + 1)
        }
    }

    const Minus_one = (e) => {
        if(number <= 0){
            return undefined;
        }else{
            setNumber(number - 1)
        }
    }

    const Handle_buy = () => {
        
        if(Duplicated_item === true){
            notification(true)
        }else{
            notification(false)
            onAdd(number);
        }

    }

    console.log(Duplicated_item)

    return(

        <div id="Count_container">

            <h6>{name}</h6>
            <div id="Input_container">
                    <img src="/remove_black_24dp.svg" onClick={Minus_one} alt="minus" className="minus"/>
                <input type="number" min={0} max={stock} id="ItemCount_input" value={number}/>
                    <img src="/add_black_24dp.svg" onClick={Add_one} alt="max" className="max"/>
            </div>
            
            <Link to={Duplicated_item ? "/item/" + id : "/cart"}>
                <button id="Buy" onClick={Handle_buy}>Comprar</button>
            </Link>

        </div>
    
    )
}

export default ItemCount;