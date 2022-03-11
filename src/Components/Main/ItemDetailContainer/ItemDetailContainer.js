// import react
import { useEffect, useState } from "react";

// import react-router
import { useParams } from "react-router-dom";

// import ItemDetail
import ItemDetail from "./ItemDetail/ItemDetail.js";


// import firebase
import db from "../../../Firebase/firebase.js";
import { collection, getDocs } from "firebase/firestore";

// console.log(itemJson)

const ItemDetailContainer = () => {
    
    const collections = collection(db, "items");

    const docs = getDocs(collections);

    const [ItemDetails, setItemDetails] = useState({});
    let {id} = useParams();

    useEffect( ()=>{

        const newArray = []
        
           docs.then((res) => {
               const doc = res.docs;

               doc.map( doc => {
                   newArray.push(doc.data());
               })

               console.log(newArray)

               let element = newArray.filter( element => element.id === Number(id));
               console.log(element);

               setItemDetails(element[0])
           })
       
    }, [id])

    return(
        <>
            <ItemDetail item = {ItemDetails} id={id}/>
        </>
    )
}

export default ItemDetailContainer;