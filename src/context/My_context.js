
// import react
import { createContext, useState } from "react";

// exporta contexto a hijos
export const My_Context = createContext()

const { Provider } = My_Context;


const Provider_component = ({children}) => {

    const [Item, setItem] = useState([]);
    const [Duplicated_item, setDuplicated_item] = useState(false)
    const [Quantity, setQuantity] = useState([]);
    const [Categories, setCategories] = useState(["Grafica y diseño", "Programacion", "Video y animacion", "Musica y audio", "Negocios", "Escritura"])

    const Ask_for_Item = (item) => {

        let find_element = Item.find( element => element.id === item.id);
        console.log(find_element);

        if(find_element === undefined){
            setDuplicated_item(false)
            setItem([...Item, item]);
        }else{
            setDuplicated_item(true);
            console.log("este item ya ha sido añadido");
        }       
    }

    const Ask_for_Quantity = (quantity) => {

        setQuantity([...Quantity, quantity]);
    }

    const isInCart = (id) => {
        let find_element = Item.find( element => element.id === id);

        if(find_element === undefined){
            setDuplicated_item(false)
        }else{
            setDuplicated_item(true)
        }
    }

    const Remove_Item = (id, quantity) => {

        let new_array_items = [];
        let new_array_quantity = [];

        console.log(id)

        let filter_element = Item.filter( element => element.id !== id);
        let filter_quantity = Quantity.filter ( element => element !== quantity);

        new_array_items = filter_element;
        new_array_quantity = filter_quantity;
        
        setItem(new_array_items);
        setQuantity(new_array_quantity);
    }

    const Delete_all = () => {
        setItem([])
    }

    const ContextValue = {Item, Quantity, Categories, Duplicated_item, Ask_for_Item, Ask_for_Quantity, isInCart, Remove_Item, Delete_all}

   
    console.log(Quantity)
    

    return(
        <Provider value={ContextValue}>
            {children}
        </Provider>
    )
} 

export default Provider_component;

