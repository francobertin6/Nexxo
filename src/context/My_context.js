
// import react
import { createContext, useState } from "react";

// exporta contexto a hijos
export const My_Context = createContext()

const { Provider } = My_Context;


const Provider_component = ({children}) => {

    const [Item, setItem] = useState([]);
    const [Duplicated_item, setDuplicated_item] = useState(false)
    const [Categories] = useState(["Grafica y diseño", "Programacion", "Video y animacion", "Musica y audio", "Negocios", "Escritura"])
    const [TotalAmount, setTotalAmount] = useState();
    const [HeaderToggle, setHeaderToggle] = useState(true);
    const [Profile_Dropdown, setProfile_Dropdown] = useState(false);
    const [User_Data, setUser_Data] = useState({});

    const Ask_for_Item = (item) => {

        let find_element = Item.find( element => element.id === item.id);
        
        if(find_element === undefined){
            setDuplicated_item(false)
            setItem([...Item, item]);
        }else{
            setDuplicated_item(true);
            console.log("este item ya ha sido añadido");
        }       
    }

    const Ask_for_TotalAmount = (Amount) => {
        setTotalAmount(Amount);
    }

    const isInCart = (id) => {
        let find_element = Item.find( element => element.id === id);

        if(find_element === undefined){
            setDuplicated_item(false)
        }else{
            setDuplicated_item(true)
        }
    }

    const Remove_Item = (id) => {

        let new_array_items = [];

        let filter_element = Item.filter( element => element.id !== id);
        
        new_array_items = filter_element;
        
        setItem(new_array_items);
        
    }

    const Delete_all = () => {
        setItem([])
    }

    const Ask_for_toggleHeader = (value) => {
        setHeaderToggle(value)
    }

    const Ask_for_Profile_Dropdown = (value) => {
        setProfile_Dropdown(value);
    }

    const Ask_UserInfo = (data) => {

        setUser_Data(data)

    }

    const ContextValue = {
        Item, 
        Categories, 
        Duplicated_item, 
        Ask_for_Item, 
        isInCart, 
        Remove_Item, 
        Delete_all,
        TotalAmount,
        Ask_for_TotalAmount,
        HeaderToggle,
        Ask_for_toggleHeader,
        Profile_Dropdown,
        Ask_for_Profile_Dropdown,
        User_Data,
        Ask_UserInfo
        }

    return(
        <Provider value={ContextValue}>
            {children}
        </Provider>
    )
} 


export default Provider_component;

