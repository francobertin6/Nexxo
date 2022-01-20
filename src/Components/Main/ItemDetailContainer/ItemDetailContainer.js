// import react
import { useEffect, useState } from "react";

// import react-router
import { useParams } from "react-router-dom";

// import ItemDetail
import ItemDetail from "./ItemDetail/ItemDetail.js";

// import itemJson
import itemJson from "./items.json";

// console.log(itemJson)

const ItemDetailContainer = () => {

    const GetItem = () => {
        return new Promise ((res, rej) => {
            res(itemJson);
        })
    }

    const [ItemDetails, setItemDetails] = useState({});
    let {id} = useParams();

    useEffect( ()=>{
        
            GetItem().then((res) => {
                console.log(Number(id))
                console.log(res.items)
                setItemDetails(res.items[Number(id) - 1]);
            })
       
    }, [id])

    return(
        <>
            <ItemDetail item = {ItemDetails} id={id}/>
        </>
    )
}

export default ItemDetailContainer;